import React from 'react';
// import products from '../database/index';
// import { useState } from 'react';
// // import { FaDisplay } from 'react-icons/fa6';
// import MenuItem from './MenuItem';
// import { Button3 } from './Button3';
import Button3 from './Button3';
import './Filter.css';

export const Filter = () => {
    // const [category, setCategory] = useState('All')

//     let FilteredProducts = products;

//     const FilteredData = products.filter((item) => {
//         return item.category.toLowerCase() === category.toLowerCase();
//     });
    
    

  //  const displayAll = 
  //   products.map((item)=> {
  //       <MenuItem key={index} item={item} />
  //   })

//   setCategory(HandleClick)

// const displayAll = products.map((item)=> {
//   return (
//     <MenuItem key={item.id} item={item} />
//   )
// })


  return (
    <div className='bg-black h-screen text-white'>
        <h1 className='flex justify-center'></h1>
        <div className="flex gap-4 p-[15px]">
            <Button3 cont={"All"}/>
            <Button3 cont={"BreakFast"} />
            <Button3 cont={"Lunch"} />
            <Button3 cont={'Dinner'} />
        </div>
        {/* {category == "All" ? displayAll : <p>What</p>} */}
    </div>
  )
}
