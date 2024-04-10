import React from 'react'

function SignupPage() {
  return (
    <form className='w-[450px] rounded-lg p-2 min-h-[200px] flex flex-col items-center gap-2 justify-center bg-gray-500' action="">
    <p>Create A New Account</p>
    <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' placeholder='Enter Your Name' type="text" name="name" id="todo" />

     <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' placeholder='Enter Your Email' type="text" name="email" id="todo" />

     <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' placeholder='Enter Password' type="password" name="password" id="todo" />


     <input className='hover:w-[230px]  transition-all bg-black px-5 py-2 w-[200px] cursor-pointer rounded-md  ' type="submit" value="SignUp" />
   </form>
  )
}

export default SignupPage
