import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import imgr from "../assets/images/gg.jpg";

export const AboutUs = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useEffect(() => {
    if (!gsap) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animation for the image (goes up and down)
    tl.to(imgRef.current, { y: -20, duration: 1, repeat: 3, yoyo: true });

    // Typing animation for paragraphs on scroll
    gsap.fromTo(
      [titleRef.current, paragraph1Ref.current, paragraph2Ref.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <div className='h-[800px] flex justify-around items-center w-[100%] bg-gray-80'>
      <img
        ref={imgRef}
        className='border-[5px] rounded-md border-red-700 w-[auto] h-[500px]'
        src={imgr}
        alt="Cooking-a-meal"
      />
      <div>
        <div>
          <h1 ref={titleRef} className='text-4xl mb-[20px] font-semibold text-red-700'>Our Story</h1>
          <p ref={paragraph1Ref} className='w-[40vw] flex-1'>
            Welcome to Jinmney's Fish and Chips, where our journey begins with a passion for authentic flavors and heartfelt hospitality. Nestled in the heart of Mankweng we invite you to experience the rich tapestry of Islamic culinary traditions, lovingly prepared to tantalize your senses and nourish your soul.
          </p>
          <p ref={paragraph2Ref} className='w-96 mt-8'>
            Beyond our delicious food, we pride ourselves on providing warm and welcoming hospitality to all our guests.
          </p>
        </div>
      </div>
    </div>
  );
};
