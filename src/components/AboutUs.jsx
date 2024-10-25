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
    <section className="relative flex flex-col md:flex-row items-center md:py-8 justify-center gap-12 pb-16 px-6 md:px-12 bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b to-gray-900 from-black opacity-50 pointer-events-none"></div>

      {/* Restaurant Motto Section */}
      <div className="absolute top-4 hidden md:bloc text-center text-lg font-semibold text-red-500">
        "Experience Halal, Taste Excellence"
      </div>

      <div className="relative flex-shrink-0 mb-0 mt-8">
        <img
          ref={imgRef}
          className="border-4 border-red-700 rounded-lg shadow-lg object-cover hidden md:flex w-full h-[10px] md:h-72 max-w-lg mx-auto"
          src={imgr}
          alt="About Us"
        />
      </div>
      
      <div className="relative flex flex-col justify-center items-center text-center">
        <h1
          ref={titleRef}
          className="text-3xl lg:text-4xl font-extrabold text-red-700 mb-6"
        >
          Our Story
        </h1>
        <p
          ref={paragraph1Ref}
          className="text-md lg:text-xl mb-6 leading-relaxed text-gray-200 max-w-2xl"
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
    </section>
  );
};
