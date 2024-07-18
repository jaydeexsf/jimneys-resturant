import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";




export const Contact = () => {
  return (
    <div className='bg-red-700 width-[100%] flex items-center justify-center gap-16 h-16'>
      <span className='flex items-center text-xl gap-4'><IoCallOutline  className='text-2xl'/>066 546 4905</span>
      <span className='flex items-center text-xl gap-4'><MdOutlineEmail className='text-2xl'/>halalmankweng@gmail.com</span>
      <span className='flex items-center text-xl gap-4'><MdAccessTime className='text-2xl'/>Daily 7am-8pm</span>
    </div>
  )
}

