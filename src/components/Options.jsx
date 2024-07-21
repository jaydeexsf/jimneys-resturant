// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Options = () => {
//   const menuRef = useRef(null);

//   useEffect(() => {
//     gsap.from(menuRef.current.children, {
//       duration: 1,
//       opacity: 1,
//       scale: 0.5,
//       ease: 'back.out(1.7)',
//       stagger: 0.9
//     });
//   }, []);

//   return (
//     <div ref={menuRef} className="flex flex-wrap justify-center mt-[-50px] bg-gray-900 p-5 min-h-[550px]">
//       {['Breakfast', 'Lunch', 'Dinner'].map((item, index) => (
//         <div key={index} className="relative flex gap-6 flex-col justify-around items-center m-5">
//           <h1 className="text-2xl">{item}</h1>
//           <div className=" flex flex-col gap-6 items-center justify-center">
//             <img
//               src={`src/assets/images/${item.toLowerCase()}.jpg`}
//               alt={item}
//               className="sm:w-[360px] md:w-48 xl:w-[400px] h-72 object-cover border-2 border-white rounded-md"
//             />
//             <button className="transform bg-red-600 text-white px-3 py-2 rounded-[1px]">
//               Check Menu
//             </button>
//           </div>  
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Options;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Options = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.to(menuRef.current.children, {
      scrollTrigger: {
        trigger: menuRef.current,
        start: 'bottom 80%',
        scrub: true, // Trigger animation when the top of the element hits 80% of the viewport height
        // End the animation when the bottom of the element hits the top of the viewport
        // scrub: false, // Smooth animation as you scroll
       // Uncomment this line to visualize scrollTrigger markers (for debugging)
      },
      duration: 6,
      opacity: 0.8,
      scale: 1.1,
      ease: 'back.out(1.7)',
      stagger: 0.3 // Adjusted for smoother stagger effect
    });
  }, []);

  return (
    <div
      ref={menuRef}
      className="flex flex-wrap justify-center mt-[-50px] bg-gray-900 p-5 min-h-[550px]"
    >
      {['Breakfast', 'Lunch', 'Dinner'].map((item, index) => (
        <div
          key={index}
          className="relative flex gap-6 flex-col justify-around items-center m-5"
        >
          <h1 className="text-2xl">{item}</h1>
          <div className="flex flex-col gap-6 items-center justify-center">
            <img
              src={`src/assets/images/${item.toLowerCase()}.jpg`}
              alt={item}
              className="sm:w-[360px] md:w-48 xl:w-[400px] h-72 object-cover border-2 border-white rounded-md"
            />
            <button className="text-sm transition-transform transform hover:text-red-700 hover:scale-105 hover:bg-white bg-red-600 text-white px-3 py-2 rounded-[2px]">
              Check Menu
            </button>
          </div>  
        </div>
      ))}
    </div>
  );
};

export default Options;
