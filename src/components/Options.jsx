import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineNoFood, MdOutlineFastfood } from "react-icons/md";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Options = () => {
  return (
    <section className='flex lg:h-[600px] flex-col gap-4 md:mt-[50px] mt-[100px] items-center justify-center' id='menuSe'>
      <div className='flex flex-col gap-1 text-center'>
        <h2 className='text-red-600 font-semibold text-lg md:text-xl font-mono mb'>Explore</h2>
        <h1 className='text-white font-bold text-3xl md:text-4xl mb-6'>Menu Features</h1>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-2 mx-auto gap-2 px-[10px]'>
        <div className="menuItem bg-gradient-to-r to-gray-950 from-black opacity pointer-events-none hover:translate-y-[-2px] rounded-lg duration-[0.4s] ease-in transition bg-black p-[10px] pt-4 lg:max-w-[400px]">
          <IoFastFoodOutline className='text-3xl md:text-5xl mb-1'/>
          <div>
            <h1 className='text-lg md:text-xl font-bold mb-1 md:mb-4'>Always Fresh</h1>
            <p className='opacity-70 text-[12px] md:text-sm'>We focus on serving fresh food always. Fresh food is always best for your precious body and we keep that in mind and that's why we like to serve everything fresh.</p>
          </div>
        </div>
        <div className="menuItem hover:translate-y-[-2px] bg-gradient-to-r to-gray-950 from-black rounded-lg duration-[0.4s] ease-in transition bg-black p-[10px] pt-4 lg:max-w-[400px]">
          <MdOutlineFastfood className='text-3xl md:text-5xl mb-1'/>
          <div>
            <h1 className='text-lg md:text-xl font-bold mb-1 md:mb-4'>Amazing Taste</h1>
            <p className='opacity-70 text-[12px] md:text-sm'>Serving tasty food has always been our first priority and also to make sure the taste is consistent every time you consume it, you will see no difference in taste.</p>
          </div>
        </div>
        <div className="menuItem hover:translate-y-[-2px] bg-gradient-to-r to-gray-950 from-black rounded-lg duration-[0.4s] ease-in transition bg-black p-[10px] pt-4 lg:max-w-[400px]">
          <MdOutlineNoFood className='text-3xl md:text-5xl mb-1'/>
          <div>
            <h1 className='text-lg md:text-xl font-bold mb-1 md:mb-4'>Halal Ingredients</h1>
            <p className='opacity-70 text-[12px] md:text-sm'>We know great ingredients are a must to take taste and health to the next level, and most importantly, to consider the Akhira. That's why we focus on using Halal, organic ingredients so you don’t have to worry.</p>
          </div>
        </div>
        <div className="menuItem hover:translate-y-[-2px] bg-gradient-to-r to-gray-950 from-black rounded-lg duration-[0.4s] ease-in transition bg-black p-[10px] pt-4 md:pt-4 lg:max-w-[400px]">
          <MdOutlineFastfood className='text-3xl md:text-5xl mb-1'/>
          <div>
            <h1 className='text-md md:text-xl font-bold mb-1 md:mb-4'>Local Products</h1>
            <p className='opacity-70 text-[12px] md:text-sm'>Using local products ensures freshness and supports our community. This commitment helps us deliver the best quality to our customers.</p>
          </div>
        </div>
      </div>
      <div className='pb-12 md:pb-6 pt-8'>
        <Link to="/menu">
          <button className='bg-red-700 hover:shadow-md hover:shadow-red-600 hover:bg-black hover:border-red-600 hover:text-red-600 duration-500 transition-all py-2 md:py-3 text-black font-mono px-12 md:px-12 text-lg md:text-[23px] font-semibold'>
            See Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Options;
