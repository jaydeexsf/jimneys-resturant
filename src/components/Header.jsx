// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// const Header = () => {

//   const loca = useLocation().pathname;

//   const [locationurl, setLocationurl] =  useState("/");

//   // const [Ishome, setIshome] =  useState(true);
//   const [Ismenu, setIsmenu] =  useState(false);
//   const [Isorder, setIsorder] =  useState(false);
//   const [Islocation, setIslocation] =  useState(false);



//   function clicklocation (cont) {
//     setLocationurl(loca);

//     if (cont === locationurl) {
//       set+{loca}(true);
//     }
//   }

//   // console.log(useLocation().pathname);

//   return (
//     <header className="bg-black p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white items-center text-3xl flex gap-2"><img src='src/assets/images/PSX_20240717_161845-removebg-preview.png' className='w-8'></img>Jimney's</h1>
//         <nav className='text-xl'>
//           {/* <Link to="/" onclick={clicklocation("/")} className={` ${Ishome ? 'text-red-700' : 'text-white' } hover:text-red-700 p-2 rounded-lg hover:bg-gray-900 mx-2`}>Home</Link> */}
//           <Link to="/" onclick={clicklocation("menu")} className={` ${Ismenu ? 'text-red-700' : 'text-white' } hover:text-red-700 p-2 rounded-lg hover:bg-gray-900  mx-2`}>Menu</Link>
//           <Link to="/order" onclick={clicklocation("order")} className={` ${Isorder ? 'text-red-700' : 'text-white' } hover:text-red-700 p-2 rounded-lg hover:bg-gray-900  mx-2`}>Order</Link>
//           {/* <Link to="/contact" onclick={clicklocation} className="text-white hover:text-red-700 p-2 rounded-lg hover:bg-gray-900 mx-2">Contact</Link> */}
//           <Link to="/location" onclick={clicklocation("location")} className={` ${Islocation ? 'text-red-700' : 'text-white' } hover:text-red-700 p-2 rounded-lg hover:bg-gray-900  mx-2`}>Location</Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation().pathname; // Get the current URL path

const style = 'text-red-700 underline decoration-white	decoration-4	underline-offset-8'

  // Determine if the current path matches the link's path
  const getLinkClassName = (path) => 
    `hover:text-red-700 p-2 rounded-lg mx-2 ${location === path ? style : 'text-white hover:bg-gray-900'}`;

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white items-center text-3xl flex gap-2">
          <img src='src/assets/images/PSX_20240717_161845-removebg-preview.png' className='w-8' alt="Logo" />
          Jimney's
        </h1>
        <nav className='text-xl'>
          <Link 
            to="/" 
            className={getLinkClassName('/')}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={getLinkClassName('/menu')}
          >
            Menu
          </Link>
          <Link 
            to="/order" 
            className={getLinkClassName('/order')}
          >
            Order
          </Link>
          <Link 
            to="/location" 
            className={getLinkClassName('/location')}
          >
            Location
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
