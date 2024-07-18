import React from 'react';
import Banner from '../components/Banner';
import MenuItem from '../components/MenuItem';
import menuItems from '../database/index';
import { Contact } from '../components/Contact';

const Home = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <Banner />
      <Contact />
      <section className="container mx-auto my-8">
        <h2 className="text-3xl text-center mb-4">Special Deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>   
      </section>
    </div>
  );
};

export default Home;