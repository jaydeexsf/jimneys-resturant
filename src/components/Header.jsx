import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import logo from '../assets/images/PSX_20240717_161845-removebg-preview.png'
import { GiCancel } from "react-icons/gi";
import { FaSleigh } from 'react-icons/fa';



const Header = ({className}) => {
  const location = useLocation().pathname; 
  const [menuvisible, setMenuVisible] = useState(true);

const style = 'text-red-700 underline decoration-white	decoration-4	underline-offset-8'

  const getLinkClassName = (path) => 
    `hover:text-red-700 p-2 rounded-lg mx-2 ${location === path ? style : 'text-white hover:bg-gray-900'}`;

    const getLinkClassName2 = () =>
        `hover:text-red-700 p-2 rounded-lg mx-2 ${location === path ? style : 'text-white hover:bg-gray-900'}`;

        const showmenu = () => {
          if(menuvisible === false) {
            setMenuVisible(true)
          } else {
            setMenuVisible(false)
          }
          
          console.log('WORKING' + menuvisible)
        }
        
        function removemnu() {
          setMenuVisible(true)
        }


  return (
    <header  className={`bg-black p-4 z-[100000000000000000000] sticky top-0 left-0 z-9999`}>
      <div className={`container mx-auto flex relative justify-between items-center`}>
        <h1 className="text-white items-center text-2xl flex gap-2">
          <img src={logo} className='w-10' alt="Logo" />
          Jimney's
        </h1>
        
        <nav className='text-xl hidden text-end self-end md:flex'>
          <Link
            to="/jimneys-resturant/" 
            className={getLinkClassName('/jimneys-resturant/')}
          >
            Home
          </Link>
          <Link 
            to="/jimneys-resturant/menu" 
            className={getLinkClassName('/jimneys-resturant/menu')}
          >
            Menu
          </Link>
          <Link 
            to="/jimneys-resturant/order" 
            className={getLinkClassName('/jimneys-resturant/order')}
          >
            Order
          </Link>
          <Link 
            to="/jimneys-resturant/location" 
            className={getLinkClassName('/jimneys-resturant/location')}
          >
            Location
          </Link>
        </nav>

        <nav onClick={removemnu} className={`text-xl ${!menuvisible ? 'flex translate-x-0' : 'translate-x-[120%] hidden'} flex rounded-lg py-2 absolute top-[62px] transition duration-700 -right-[0] w-full sm:w-60 px-8 sm:px-0 bg-red-950 flex-col md:hidden`}>
          <Link 
            to="/jimneys-resturant/" 
            className={getLinkClassName('/jimneys-resturant/')}
          >
            Home
          </Link>
          <Link 
            to="/jimneys-resturant/menu" 
            className={getLinkClassName('/jimneys-resturant/menu')}
          >
            Menu
          </Link>
          <Link 
            to="/jimneys-resturant/order" 
            className={getLinkClassName('/jimneys-resturant/order')}
          >
            Order
          </Link>
          <Link 
            to="/jimneys-resturant/location" 
            className={getLinkClassName('/jimneys-resturant/location')}
          >
            Location
          </Link>
        </nav>
        <button onClick={showmenu}  > {menuvisible ? <CiMenuBurger className='text-gray-200 text-3xl md:hidden hover:cursor-pointer flex'/> : <GiCancel  className='text-gray-200 text-3xl md:hidden hover:cursor-pointer flex'/> }</button> 
      </div>
    </header>
  );
};

export default Header;
