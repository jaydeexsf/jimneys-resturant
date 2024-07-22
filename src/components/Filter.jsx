import React from 'react';
import products from '../database/index';
// import { useState } from 'react';
// import { FaDisplay } from 'react-icons/fa6';
import MenuItem from './MenuItem';
import Button3 from './Button3';
import './Filter.css';

export const Filter = () => {
    // const [category, setCategory] = useState('All')

    // let FilteredProducts = products;

    // const FilteredData = products.filter((item) => {
    //     return item.category.toLowerCase() === category.toLowerCase();
    // });

    // const displayAll = 
    // ));

    // setCategory(HandleClick)

    // const displayAll = products.map((item)=> {
    //   return (
    //     <MenuItem key={item.id} item={item} />
    //   )
    // })

    return (
        <div className='bg-gray-900 flex flex-col justify-cente items-center h-full text-white'>
            <h1 className='flex justify-center'></h1>
            <div className="flex gap-4 mt-[30px] p-[15px]">
                <Button3 cont={"All"} />
                <Button3 cont={"BreakFast"} />
                <Button3 cont={"Lunch"} />
                <Button3 cont={'Dinner'} />
            </div>
            <div className="grid justify-center  w-[100vw] p-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((item, index) => (
                 <MenuItem key={index} item={item} />))}
            </div>
        </div>
    );
};
