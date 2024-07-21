import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Menu = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.from(menuRef.current.children, {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      ease: 'back.out(1.7)',
      stagger: 0.2
    });
  }, []);

  return (
    <div ref={menuRef} className="flex flex-wrap justify-center p-5 bg-black min-h-screen">
      {['Breakfast', 'Lunch', 'Dinner'].map((item, index) => (
        <div key={index} className="relative m-5">
          <img
            src={`/${item.toLowerCase()}.jpg`}
            alt={item}
            className="w-48 h-48 object-cover border-2 border-white rounded-lg"
          />
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded">
            Check Menu
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
