import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import data from '../database/index';
// import { Contact } from './Contact';
// import Contact from '../components/Contact';
import { Button } from './Button';
import { Button2 } from './Button2';
import { Button4 } from './Button4';
import briyani from '../assets/images/Chicken-Briyani.jpg'

const Banner = () => {

  
//  const backgroundImageStyle = {
//     background: `url(${data[4].imageUrl})`,
//     backgroundSize: '',
//     backgroundPosition: 'right',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor: 'black',
    
//   };



  
  const bimstyle = {
    background: `url(${briyani})`,
    backgroundSize: '',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  }

  // const [InnerWidth, setInnerWidth] = useState('');

  // const 

  const [Swindow, setSwindow] = useState(window.innerWidth);

  function seet() {
    window.addEventListener('resize', () => {
      setSwindow(window.innerWidth);
    })
  }

  // seet();

  const backgroundImageStyle = {
    background: Swindow > 790 ? `url(${briyani})` : ``,
    backgroundSize: '', // or 'contain' based on your needs
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  };

  seet();

  return (
    <section style={Swindow < 1535 ? backgroundImageStyle : bimstyle} className="xl:bg-none	 bg-black min-h-[350px] md:min-h-[450px] flex flex-start w-[100%] h-[65hvh] text-white py-20">
      <div className="container2 2xl:flex 2xl:justify-center h-[0vh] hidden md:block xl:mb-[300px] 2xl:w-[100%] items-center 2xl:flex-col w-[40vw] mx-[5vw]">
        <h1 className="text-[45px] md:whitespace-nowrap font-medium mt-2 mb-4">Freshness in <span className="text-red-700">Every</span> Bite</h1>
        <p className="mb-8 text-sm 2xl:w-[50vw] 2xl:text-center">
        At Jimney's Fish & Chips, we bring you a delightful harmony of timeless flavors infused with contemporary culinary flair. Nestled conveniently in the vibrant heart of Mankweng, adjacent to the University of Limpopo and just a stone's throw from the local garage, our restaurant stands as a beacon of exceptional taste and warm hospitality.
        </p>
        <div className="flex">
          <Link to="/jimneys-resturant/order">{Swindow < 1535 ? <Button fist={"Order Now"} second={"Thank Us Later"} /> : <Button4 fist={'Order now'} second={"Thank Us Later"}/>}</Link>
          <Link to="/jimneys-resturant/menu"><Button2 fist={"View Menu"}/></Link>
        </div>
      </div>

      <div className='flex flex-col gap-4 items-center px-[20px] pt-8
       w-[100%] text-center justify-center mt-[-100px] md:hidden'>
         <h1 className="text-[40px] text-center font-medium mb-">Freshness in <span className="text-red-700 text-center">Every</span> Bite</h1>
          <p className='mt-[20px] font-semibold px-[40px]'>At Jimney's Fish & Chips, we bring you a delightful harmony of timeless flavors infused with contemporary culinary flair.  Nestled conveniently in the vibrant heart of Mankweng, adjacent to the University of Limpopo and just a stone's throw from the local garage.</p>
          <div className='mt-4'>
             <Link to="/jimneys-resturant/order"><button className='bg-white hover:bg-red-700 rounded-sm hover:border-red-600 duration-500 transition-all whitespace-nowrap py-2 text-red-700 hover:text-white font-mono px-6 text-sm font-semibold'>Order Now</button></Link>
             <Link to="/jimneys-resturant/menu"><button className='bg-red-700 ml-6 hover:bg-white rounded-sm hover:border-red-600 duration-500 transition-all whitespace-nowrap py-2 text-white hover:text-red-700 font-mono px-6 text-sm font-semibold'>View Menu</button></Link>
          </div>
      </div>
    </section>
  );
  
};

export default Banner;
