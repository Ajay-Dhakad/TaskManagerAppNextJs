import { DbConnection } from '../DbConnection/DbConnection'
import { User } from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export const GetUserData = async() => {

try {

       const user = cookies().get('auth_token')?.value || false

       if (user) {
        
          const decoded = jwt.verify(user,process.env.JWT_SECRET)

          await DbConnection()

          const userData = await User.findById(decoded.id).select('-password')

          if (!userData) {
             return false
          }

          return userData
       } else {
          return false  
       }    
} catch (error) {   

    return false
    
}


}