import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imgr from "../assets/images/gg.jpg";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(imgRef.current, { y: -15, duration: 1.5, repeat: 3, yoyo: true });

    gsap.fromTo(
      [titleRef.current, paragraph1Ref.current, paragraph2Ref.current],
      { opacity: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 100%',
        },
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <section className="relative pt-8 flex flex-col items-center md:py-8 justify-center md:gap-1 pb-16 px- md:px-12 bg-black text-white">
      <div className='z-[9] pt-8'>
        <h1
            ref={titleRef}
            className="text-3xl lg:text-4xl opacity-90   font-bold text-red-700 mb-6"
          >
            About Us
          </h1>

          {/* <span
            className="text-3xl lg:text-4x  font-extrabold text-red-700 mb-6"
          >
            Our Story
          </span> */}
      </div>
      <div  className=" flex flex-col md:flex-row items-center justify-center md:gap-[100px] pb- px-6 md:px-12">
    
      <div className="absolute inset-0 bg-gradient-to-b to-gray-900 from-black opacity-90 pointer-events-none"></div>

      {/* Restaurant Motto Section */}
      {/* <div className="absolute top-4 hidden md:bloc text-center text-lg font-semibold text-red-500">
        "Experience Halal, Taste Excellence"
      </div> */}

      <div className="relative flex-shrink-0 mb-0 mt-">
        <img
          ref={imgRef}
          className="border-4 border-red-700 rounded-lg shadow-lg object-cover hidden md:flex w-full h-[10px] md:h-72 max-w-lg mx-auto"
          src={imgr}
          alt="About Us"
        />
      </div>
      
      <div className="relative flex flex-col justify-center items-center text-center">
       
        <p
          ref={paragraph1Ref}
          className="text-md lg:text-xl mb-3 leading-relaxed text-gray-200 max-w-2xl"
        >
          Welcome to Jinmney's Fish and Chips, where our journey begins with a passion for authentic flavors and heartfelt hospitality. Nestled in the heart of Mankweng, we invite you to experience the rich tapestry of Islamic culinary traditions, lovingly prepared to tantalize your senses and nourish your soul.
        </p>
        <p
          ref={paragraph2Ref}
          className="text-md lg:text-xl leading-relaxed text-gray-300 max-w-2xl"
        >
          Beyond our delicious food, we pride ourselves on providing warm and welcoming hospitality to all our guests.
        </p>
      </div>
      </div>
    </section>
  );
};
