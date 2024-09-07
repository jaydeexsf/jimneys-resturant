import React, { useState } from 'react';
import products from '../database/index'; // Import your product data
import MenuItem from '../components/MenuItem';
import Button3 from '../components/Button3';

//i have to chane this since im now just practising
export const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeButton, setActiveButton] = useState("All");

    // filter products based on the selected category
    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);

       // when you click the buttons the two above states are updated     
    const handleButtonClick = (category) => {
        if (activeButton === category) {
            // changing the button color if the same button is clicked
            setActiveButton("All");
            setSelectedCategory("All");
        } else {
            setActiveButton(category);
            setSelectedCategory(category);
        }
    };

    return (
        <div className='bg-gray-900 min-h-[100vh] flex py-[30px] flex-col items-center h-full text-white'>
            <h1 className='flex justify-start text-[40px]'></h1>
            <div className="flex gap-4 mt-[30px] p-[15px]">
                <Button3
                    cont="All"
                    onClick={() => handleButtonClick("All")}
                     isActive={activeButton === "All"}
                />
                <Button3
                    cont="Breakfast"
                     onClick={() => handleButtonClick("Breakfast")}
                    isActive={activeButton === "Breakfast"}
                />
                <Button3
                    cont="Lunch"
                    onClick={() => handleButtonClick("Lunch")}
                    isActive={activeButton === "Lunch"}
                />
                <Button3
                    cont="Dinner"
                    onClick={() => handleButtonClick("Dinner")}
                    isActive={activeButton === "Dinner"}
                />
            </div>
            <div className="grid justify-center w-[100vw] py-[80px] px-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 gap-4">
                {filteredProducts.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Menu;