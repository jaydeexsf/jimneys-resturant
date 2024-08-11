import React from 'react';
import { Link } from 'react-router-dom';
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
          <FaLocationDot />
          <span>See Location</span>
        </Link>
        <div className="flex flex-col items-center text-sm">
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            <span className="text-gray-300">+27-64-456-890</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt />
            <span className="text-gray-300">153 University Street, mankweng</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle />
            <span className="text-gray-300">Mon-Fri: 9 AM - 9 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
