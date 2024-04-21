'use client'
import React from 'react'
import Link from 'next/link'
import { UseAuth } from '../userContext/UserContext'
import { useRouter } from 'next/navigation'

function NavLinks() {

    const router = useRouter()
    const {isAuthenticated,dispatch} = UseAuth()

    const logoutHandler =async() => {
        const data = await fetch('/api/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            
       

        dispatch({type:'LOGOUT'})


    }



  return (
   <ul className='flex gap-2 list-none'>
     <li>
       <Link href="/">Home</Link>
     </li>
    { !isAuthenticated && <> <li>
       <Link href="/signup">Sign Up</Link>
     </li>
     <li>
       <Link href="/login">Login</Link>
     </li></>}
     {
        isAuthenticated && <li onClick={logoutHandler}>
        Logout
     </li>
     }
   </ul>
  )
}

export default NavLinks
