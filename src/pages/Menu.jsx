import React from 'react';
import MenuItem from '../components/MenuItem';
import menuItems from '../database';
import Banner from '../components/Banner';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


function Menu() {

  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.to('.ht', {
  //     scrollTrigger: {
  //       trigger: '.ht',
  //       toggleActions: 'restart pause none none',
  //     },
  //     opacity: 1,
  //     rotation: 360,
  //     duration: 2,
  //   });
  // }, []); 

  return (
   <div className='bg-gray-900'>
    {/* <Banner /> */}
    <section className="container mx-auto my-0 py-48">
      <h2 className="text-3xl text-center mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
   </div> 
  );
};

export default Menu;


