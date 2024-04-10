import React from 'react'

function Todoform() {
  return (
   <form className='w-[450px] rounded-lg p-2 h-[200px] flex flex-col items-center gap-2 justify-center bg-gray-500' action="">
    <p>Add A Task Here...</p>
     <input className='rounded-md border-none w-full outline-none text-black px-2 py-2' type="text" name="todo" id="todo" />
     <input className='bg-black px-5 py-2 w-[200px] cursor-pointer rounded-md  ' type="submit" value="Add Todo" />
   </form>
  )
}

export default Todoform
