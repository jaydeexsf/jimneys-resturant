import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";


const Header = ({className}) => {
  const location = useLocation().pathname; // Get the current URL path

const style = 'text-red-700 underline decoration-white	decoration-4	underline-offset-8'

  // Determine if the current path matches the link's path
  const getLinkClassName = (path) => 
    `hover:text-red-700 p-2 rounded-lg mx-2 ${location === path ? style : 'text-white hover:bg-gray-900'}`;

    const getLinkClassName2 = () =>
        `hover:text-red-700 p-2 rounded-lg mx-2 ${location === path ? style : 'text-white hover:bg-gray-900'}`;

        const showmenu = () => {
          setClass('')
        }

  return (
    <header className={`bg-black p-4`}>
      <div className={`container mx-auto flex justify-between items-center`}>
        <h1 className="text-white items-center text-3xl flex gap-2">
          <img src='src/assets/images/PSX_20240717_161845-removebg-preview.png' className='w-8' alt="Logo" />
          Jimney's
        </h1>
        <CiMenuBurger onClick={showmenu} className='text-gray-200 text-3xl md:hidden hover:cursor-pointer flex'/>
        <nav className='text-xl hidden md:flex'>
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
      </div>
    </header>
  );
};

export default Header;
