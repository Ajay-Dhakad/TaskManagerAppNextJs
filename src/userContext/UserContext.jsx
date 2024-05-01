'use client'

import { createContext,useContext,useEffect,useReducer, useState } from "react"
import { usePathname } from "next/navigation"
import { type } from "os"

const UserContext = createContext()


const userReducer = (state,action) => {

    switch (action.type) {
        case 'SET_USER':
            return {
               ...state,
                user: action.payload,
                isAuthenticated: true
            }

        case 'LOGOUT':
            return {
                user: null,
                isAuthenticated: false
            }

        default:
            return state
    }

}

export const AuthContextProvider = ({children}) =>{

    const [state,dispatch] = useReducer(userReducer,{
        isAuthenticated:false,
        user:null
    })

    const pathname  = usePathname()
    console.log(pathname)

    const [loading,setloading] = useState(true)


    useEffect(() => {

        if (!state.isAuthenticated){const userData = async() => {
            const user = await fetch('/api/me')
            
            const data = await user.json()

            
         if (data.success) {
               dispatch({
                   type: 'SET_USER',
                   payload: data
               })
         }
         else{
            dispatch({type:'LOGOUT'})
         }
         setloading(false)

        }
    
        userData()}

        else{
           return
        }
       
    },[pathname])

    return(
        <UserContext.Provider value={{...state,dispatch}}>
            {!loading ? children : <div className="bg-black w-[100vw] h-[100vh] flex items-center justify-center font-bold">Loading...</div> }
        </UserContext.Provider>
    )

}

export const UseAuth = () => {
    return useContext(UserContext)
}