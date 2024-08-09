
import React, { useState } from 'react';
import products from '../database/index'; // Import your product data
import MenuItem from './MenuItem';
import Button3 from './Button3';
import './Filter.css';

export const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [color, setColor] = useState('bg-black');

    const stylei = () => {
       
    }

    // filtering the products if the user selecect a category
    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);

    // const bgblack = 'bg-red-700';
    // const bgwhite = 'bg-white';    
    // const toggleCat = selectedCategory === cont;
    //     ? bgblack
    //     : bgwhite

    

    return (
        <div className='bg-gray-900 flex flex-col justify-center items-center h-full text-white'>
            <h1 className='flex justify-center'></h1>
            <div className="flex gap-4 mt-[30px] p-[15px]">
                <Button3 style={color} cont={"All"} onClick={() => setSelectedCategory("All")} />
                <Button3 cont={"Breakfast"} onClick={() => setSelectedCategory("Breakfast")} />
                <Button3 cont={"Lunch"} onClick={() => setSelectedCategory("Lunch")} />
                <Button3 cont={'Dinner'} onClick={() => setSelectedCategory("Dinner")} />
            </div>
            <div className="grid justify-center w-[100vw] p-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};
