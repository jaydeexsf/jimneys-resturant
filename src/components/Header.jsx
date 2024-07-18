import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white items-center text-3xl flex gap-2"><img src='src/assets/images/PSX_20240717_161845-removebg-preview.png' className='w-8'></img>Jimney's</h1>
        <nav className='text-xl'>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/menu" className="text-white mx-2">Menu</Link>
          <Link to="/about" className="text-white mx-2">About</Link>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
          <Link to="/location" className="text-white mx-2">Location</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
