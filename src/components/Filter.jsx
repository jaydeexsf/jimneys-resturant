import React from 'react';
import products from '../database/index';
import { useState } from 'react';
import { FaDisplay } from 'react-icons/fa6';
import MenuItem from './MenuItem';

export const Filter = () => {
    const [category, setCategory] = useState('All')

    let FilteredProducts = products;

    const FilteredData = [
        products.filter((item)=> {
            item.category.toLowerCase() = category;
        })
    ]

   const displayAll = [
    products.map((item)=> {
        <MenuItem key={index} item={item} />
    })
]

  return (
    <div>
        <div className="flex">
            <button className=""></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
        {category == "All" ? displayAll : <p></p>}
    </div>
  )
}
