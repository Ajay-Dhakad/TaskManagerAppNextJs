'use client'
import {loginHandler} from './loginHandler.js'
import { useRouter } from 'next/navigation.js'
import Link from 'next/link.js'

function LoginPage() {

  const router = useRouter()

  const handler = async(e) => {
    e.preventDefault()
    const {email, password} = e.target.elements
    console.log(email.value)
    const user = await loginHandler(email.value, password.value)
    if (user.success) {

      router.push('/')
      
    }

    else {
      window.alert(user.error)
    }
  }

    
  
  
  return (
    <form onSubmit={handler} className='min-w-[450px] rounded-lg p-2 min-h-[200px] flex flex-col items-center gap-2 justify-center bg-gray-500' action="">
    <p>Login To Your Account</p>
     <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' placeholder='Enter Your Email' type="text" name="email" id="email" />
     <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' placeholder='Enter Password' type="password" name="password" id="password" />

     <input className=' hover:w-[230px]  transition-all bg-black px-5 py-2 w-[200px] cursor-pointer rounded-md  ' type="submit" value="Login" />
     <p>Dont have any account <Link href="/signup">Signup</Link></p>
   </form>
  )
}

export default LoginPage
