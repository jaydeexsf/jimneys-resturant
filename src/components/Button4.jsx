import React from 'react'

export const Button4 = ({fist, second}) => {
  return (
    <div>
        <button className="
            text-white
            group
            p-[22px]
            px-20
            whitespace-nowrap	
            py-[25px]
            hover:bg-black
            hover:text-red-400
            cursor-pointer 
            relative
            text-sm 
            font-normal 
            border-0 
            flex
            items-center 
            justify-center
            bg-red-500
            
            h-auto  
            w-[120px]  
            overflow-hidden   
            transition-all
            duration-100">
            <span class="
            group-hover:w-full
            absolute 
            left-0 
            h-full 
            w-5 
            border-y
            border-l
            border-red-500
                transition-all
            duration-500">
            </span>

            <p class="group-hover:opacity-0 group-hover:translate-x-[100%]  translate-x-0 absolute transition-all
            duration-5000">{fist}</p>

            <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-2000">
                {second}
            </span>

            <span
                class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-500 transition-all duration-500">
            </span>
        </button>
    </div>
  )
}
