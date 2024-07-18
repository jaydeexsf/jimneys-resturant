import React from 'react';
import { Link } from 'react-router-dom';
import data from '../database/index';
import { Contact } from './Contact';
// import Contact from '../components/Contact';


const Banner = () => {

  const backgroundImageStyle = {
    background: `url(${data[4].imageUrl})`,
    backgroundSize: '',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  };

  return (
    <section style={backgroundImageStyle } className="bg-black flex flex-start w-[100%] h-[80vh] text-white py-20">
      <div className="container w-[40vw] mx-[5vw]">
        <h1 className="text-4xl mb-4">Freshness in Every Bite</h1>
        <p className="mb-8">
        At Jimney's Fish & Chips, we bring you a delightful harmony of timeless flavors infused with contemporary culinary flair. Nestled conveniently in the vibrant heart of Mankweng, adjacent to the University of Limpopo and just a stone's throw from the local garage, our restaurant stands as a beacon of exceptional taste and warm hospitality.
        </p>
        <Link to="/order">
            <button className="bg-red-700 hover:border text-white py-2 px-4 rounded-sm">Order  now</button>
        </Link>
        <Link to="/menu">
            <button className="bg-transparent border hover:text-red-700 ml-[20px] text-white py-2 px-4 rounded-sm">View menu</button>
        </Link>

      </div>
    </section>
  );
};

export default Banner;
