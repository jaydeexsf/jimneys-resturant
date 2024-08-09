import React from 'react';

const Button3 = ({ cont, onClick, style }) => {
    return (
        <button
            onClick={onClick}
            className="btn w-auto px-[15px] bg-gray-300 text-black text-xs border flex justify-center items-center rounded-[5px] h-[33px]">
            {cont}
        </button>
    );
};

export default Button3;
