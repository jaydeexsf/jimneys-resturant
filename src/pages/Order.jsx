// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaLocationDot } from "react-icons/fa6";

// const Order = () => {
//   return (
//     <section className="container1 flex flex-col items-center w-[100vw] h-[100vh] bg-gray-900 text-white py-[20px]">
//       <h2 className="text-3xl text-cente mb-[40px]">Order Now</h2>
//       <p className="text-center text-[20px] text-red-700 w-[320px]">
//         To place an order, please call us at 123-456-7890 or visit our restaurant.
//       </p>
//       <Link to="/location" className="flex items-center gap-[10px]">See <FaLocationDot />Location</Link>
//     </section>
//   );
// };

// export default Order;


import React from 'react';
import { Link } from 'react-router-dom';
// import { FaLocationDot, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { AiOutlineClockCircle } from 'react-icons/ai';
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { AiOutlineClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";








const Order = () => {
  return (
    <section className="flex flex-col items-center pt-[50px] w-full h-[100vh] bg-gray-900 text-white py-10 px-5">
      <h2 className="text-4xl font-bold mb-6">Order Now</h2>
      <p className="text-center text-xl text-red-400 mb-8">
        To place an order, please call us at <span className="font-semibold">123-456-7890</span> or visit our restaurant.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Link to="/location" className="flex items-center gap-2 text-lg bg-gray-800 hover:bg-gray-700 rounded-md py-2 px-4 transition-colors duration-300">
          {/* <FaLocationDot className="text-red-400" /> */}
          <FaLocationDot />
          <span>See Location</span>
        </Link>
        <div className="flex flex-col items-center text-sm">
          <div className="flex items-center gap-2 mb-2">
            {/* <FaPhoneAlt className="text-red-400" /> */}
            <FaPhoneAlt />
            <span className="text-gray-300">123-456-7890</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            {/* <FaMapMarkerAlt className="text-red-400" /> */}
            <FaMapMarkerAlt />
            <span className="text-gray-300">123 Main Street, Anytown</span>
          </div>
          <div className="flex items-center gap-2">
            {/* <AiOutlineClockCircle className="text-red-400" /> */}
            <AiOutlineClockCircle />
            <span className="text-gray-300">Mon-Fri: 9 AM - 9 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
