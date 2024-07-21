import React from 'react'

export const Button2 = ({fist}) => {
  return (
    <div>
    <div className="relative ml-[20px] inline-flex group">
        <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
        </div>
        <a href="" target="_blank" title="" role="button"
            className="relative inline-flex items-center justify-center px-5 py-2 text-md font- text-gray-300 transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 rounded">
            {fist}
        </a>
    </div>
    </div>
  )
}
