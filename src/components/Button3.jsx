import React from 'react';

const Button3 = ({ cont, onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className={`btn w-auto font-semibold px-[15px] ${isActive ? 'bg-white text-black' : 'bg-zinc-800 hover:bg-zinc-600 text-white '} text-xs border-red-700 flex justify-center items-center rounded-[7px] h-[33px]`}>
            {cont}
        </button>
    );
};

export default Button3;
