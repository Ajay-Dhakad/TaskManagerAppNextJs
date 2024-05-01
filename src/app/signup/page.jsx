'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

function SignupPage() {

  const router = useRouter()

  const handler = async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data)
    if (data.success){
      router.push('/')
    }
  }

  return (
    <form onSubmit={handler} className='w-[450px] rounded-lg p-2 min-h-[200px] flex flex-col items-center gap-2 justify-center bg-gray-500' action="">
    <p>Create A New Account</p>
    <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' placeholder='Enter Your Name' type="text" name="name" id="name" />

     <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' placeholder='Enter Your Email' type="text" name="email" id="email" />

     <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' placeholder='Enter Password' type="password" name="password" id="password" />


     <input className='hover:w-[230px]  transition-all bg-black px-5 py-2 w-[200px] cursor-pointer rounded-md  ' type="submit" value="SignUp" />
   </form>
  )
}

export default SignupPage
