import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineNoFood } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";





// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Options = () => {
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(menuRef.current.children, {
  //     scrollTrigger: {
  //       trigger: menuRef.current,
  //       start: 'bottom 80%',
  //       scrub: true, // Trigger animation when the top of the element hits 80% of the viewport height
  //       // End the animation when the bottom of the element hits the top of the viewport
  //       // scrub: false, // Smooth animation as you scroll
  //      // Uncomment this line to visualize scrollTrigger markers (for debugging)
  //     },
  //     duration: 6,
  //     opacity: 0.8,
  //     scale: 1.1,
  //     ease: 'back.out(1.7)',
  //     stagger: 0.3 // Adjusted for smoother stagger effect
  //   });
  // }, []);

  return (
    <section className='flex lg:h-[600px]  flex-col gap-4 items-center justify-center' id='menuSe'>
      <div className='flex flex-col gap-1 text-center'>
        <h2 className='text-red-600 font-semibold text-2xl font-mono mb-4'>Explore</h2>
        <h1 className='text-white font-bold text-4xl mb-6'>Menu Features</h1>
      </div>
        <div className='grid lg:grid-cols-4 grid-cols-2 mx-auto gap-2 px-[10px]'>
            <div className="menuItem hover:translate-y-[-2px] rounded-lg duration-[0.4s] ease-in transition bg-black p-[15px] pt-10 lg:max-w-[400px]">
                <IoFastFoodOutline className='text-5xl mb-3'/>
                <div>
                  <h1 className='text-xl font-bold mb-4'>Always Fresh</h1>
                  <p className='opacity-70 text-sm'>We focus on serving fresh food always. Fresh food is always best for your precious body and we keep that in mind and that's why we like to serve everything fresh</p>
                </div>
                                    
            </div>
            <div className="menuItem hover:translate-y-[-2px] rounded-lg duration-[0.4s] ease-in transition bg-black p-[15px] pt-10 lg:max-w-[400px]">
              <MdOutlineFastfood className='text-5xl mb-3'/>
              <div>
                  <h1 className='text-xl font-bold mb-4'>Amazing Taste</h1>
                  <p  className='opacity-70 text-sm'>Serving tasty food has always been our first priority and also to make sure the taste is constant everytime you consume, you will see no rounded-lgifference in taste</p>
              </div>
                
            </div>
            <div className="menuItem hover:translate-y-[-2px] rounded-lg duration-[0.4s] ease-in transition bg-black p-[15px] pt-10 lg:max-w-[400px]">
              <MdOutlineNoFood className='text-5xl mb-3'/>
              <div>
                  <h1 className='text-xl font-bold mb-4'>Halal Ingridients</h1>
                  <p  className='opacity-70 text-sm'>We know great ingredients are must to take the taste and health on next level, but most importanlty to get the akhira. So that's why we focus on using Halal oragnic ingredients so you don't have to worry</p>
              </div>
              
            </div>
            <div className="menuItem hover:translate-y-[-2px] rounded-lg duration-[0.4s] ease-in transition bg-black p-[15px] pt-10 lg:max-w-[400px]">
              <MdOutlineFastfood className='text-5xl mb-3'/>
              <div>
                  <h1 className='text-xl font-bold mb-4'>Local Products</h1>
                  <p  className='opacity-70 text-sm'>Serving tasty food has always been our first priority and also to make sure the taste is constant everytime you consume, you will see no rounded-lgifference in taste</p>
              </div>
                
            </div>
        </div>
        <div className='pb-10'>
        <Link to="/jimneys-resturant/menu"><button className='bg-red-700 hover:shadow-md hover:shadow-red-600 hover:bg-black hover:border-red-600 hover:text-red-600 duration-500 transition-all py-2 text-black font-mono px-8 text-[17px] font-semibold'>See Menu</button></Link>
        </div>
    </section>
  
    // <div
    //   ref={menuRef}
    //   className="flex flex-wrap justify-center mt-[-50px] bg-gray-900 p-5 min-h-[550px]"
    // >
    //   {['Breakfast', 'Lunch', 'Dinner'].map((item, index) => (
    //     <div
    //       key={index}
    //       className="relative flex gap-6 flex-col justify-around items-center m-5"
    //     >
    //       <h1 className="text-2xl">{item}</h1>
    //       <div className="flex flex-col gap-6 items-center justify-center">
    //         <img
    //           src={`src/assets/images/${item.toLowerCase()}.jpg`}
    //           alt={item}
    //           className="sm:w-[360px] md:w-48 xl:w-[400px] h-72 object-cover border-2 border-white rounded-md"
    //         />
    //         <Link to="menu"><button className="text-sm transition-transform transform hover:text-red-700 hover:scale-105 hover:bg-white bg-red-600 text-white px-3 py-2 rounded-[2px]">
    //           Check Menu
    //         </button></Link>
    //       </div>  
    //     </div>
    //   ))}
    // </div>
  );
};

export default Options;
