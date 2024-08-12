import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../database/index';
// import { Contact } from './Contact';
// import Contact from '../components/Contact';
import { Button } from './Button';
import { Button2 } from './Button2';
import { Button4 } from './Button4';

const Banner = () => {

  const backgroundImageStyle = {
    background: `url(${data[4].imageUrl})`,
    backgroundSize: '',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
  };

  const bimstyle = {
    background: `url(${data[4].imageUrl})`,
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

  seet();

  return (
    <section style={Swindow < 1535 ? backgroundImageStyle : bimstyle} className="bg-black min-h-[450px] flex flex-start w-[100%] h-[75vh] text-white py-20">
      <div className="container 2xl:flex 2xl:justify-center xl:mb-[300px] 2xl:w-[100%] items-center 2xl:flex-col w-[40vw] mx-[5vw]">
        <h1 className="text-[36px] font-medium mb-4">Freshness in <span className="text-red-700">Every</span> Bite</h1>
        <p className="mb-8 text-sm 2xl:w-[50vw] 2xl:text-center">
        At Jimney's Fish & Chips, we bring you a delightful harmony of timeless flavors infused with contemporary culinary flair. Nestled conveniently in the vibrant heart of Mankweng, adjacent to the University of Limpopo and just a stone's throw from the local garage, our restaurant stands as a beacon of exceptional taste and warm hospitality.
        </p>
        <div className="flex">
        {/* <Link to="/order">
            <button className="bg-white border hover:border hover:text-white hover:bg-transparent hover:animate-pulse text-red-700 py-2 px-4 rounded-sm">Order  now</button>
        </Link>
        <Link to="/menu">
            <button className="bg-transparent border hover:text-red-700 ml-[20px] text-white py-2 px-4 rounded-sm">View menu</button>
        </Link> */}
         <Link to="/order">{Swindow < 1535 ? <Button fist={"Order Now"} second={"Thank Us Later"} /> : <Button4 fist={'Order now'} second={"Thank Us Later"}/>}</Link>
        <Link to="/menu"><Button2 fist={"View Menu"}/></Link>
        </div>
      </div>
    </section>
  );
  
};

export default Banner;
