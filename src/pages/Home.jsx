import React from 'react';
import Banner from '../components/Banner';
// import MenuItem from '../components/MenuItem';
// import menuItems from '../database/index';
import { Contact } from '../components/Contact';
import { AboutUs } from '../components/AboutUs';
import Footer from '../components/Footer';
import Options from '../components/Options';

const Home = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <Banner />
      <Contact/>
      <AboutUs />
      <section className="container mx-auto  mt-[-90px]">
        {/* <h2 className="text-3xl text-center mb-16 italic text-red-700 font-bold">Menu</h2> */}
        <div className="">
          <Options />
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>    */}
      </section>
      <Footer />
    </div>
  );
};

export default Home;