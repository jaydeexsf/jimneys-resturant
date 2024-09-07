import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import imgr from "../assets/images/gg.jpg";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export const AboutUs = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useEffect(() => {
    if (!gsap) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animation for the image (goes up and down)
    tl.to(imgRef.current, { y: -15, duration: 1.5, repeat: 3, yoyo: true });

    // Animation for the text sections
    gsap.fromTo(
      [titleRef.current, paragraph1Ref.current, paragraph2Ref.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <section className='relative flex flex-col md:flex-row md:py-[100px] pb-[150px] items-start md:px-12 justify-center gap-16 lg:p-16'>
      <div className='flex-shrink-0 mb-8 '>
        <img
          ref={imgRef}
          className='border-4 border-red-700 rounded-lg shadow-xl hidden md:flex w-full h-36 md:h-96 max-w-lg mx-auto'
          src={imgr}
          alt="About Us"
        />
      </div>
      <div className=' flex flex-col justify-center px-4 '>
        <h1
          ref={titleRef}
          className='text-3xl lg:text-4xl font-extrabold text-red-700 mb-6 text-center lg:text-left'
        >
          Our Story
        </h1>
        <p
          ref={paragraph1Ref}
          className='text-md lg:text-xl mb-6 leading-relaxed text-gray-200'
        >
          Welcome to Jinmney's Fish and Chips, where our journey begins with a passion for authentic flavors and heartfelt hospitality. Nestled in the heart of Mankweng, we invite you to experience the rich tapestry of Islamic culinary traditions, lovingly prepared to tantalize your senses and nourish your soul.
        </p>
        <p
          ref={paragraph2Ref}
          className='text-md lg:text-xl leading-relaxed text-gray-300'
        >
          Beyond our delicious food, we pride ourselves on providing warm and welcoming hospitality to all our guests.
        </p>
      </div>
      
    </section>
  );
};
