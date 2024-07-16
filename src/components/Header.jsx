import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Jimney's Fish & Chips</h1>
        <nav>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/menu" className="text-white mx-2">Menu</Link>
          <Link to="/about" className="text-white mx-2">About</Link>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
          <Link to="/order" className="text-white mx-2">Order</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
