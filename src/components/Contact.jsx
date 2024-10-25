import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

export const Contact = () => {
  return (
    <div className='bg-red-700 border-lime-500 w-full py-1 text-sm flex items-center overflow-hidden'>
      <div className='whitespace-nowrap animate-scroll text-sm flex items-center gap-16'>
        <span className='flex items-center gap-4'>
          <IoCallOutline className='text-xl' />
          066 546 4905
        </span>
        <span className='flex items-center gap-4'>
          <MdOutlineEmail className='text-xl' />
          halalmankweng@gmail.com
        </span>
        <span className='flex items-center gap-4'>
          <MdAccessTime className='text-xl' />
          Daily 7am-8pm
        </span>
      </div>
    </div>
  );
};
