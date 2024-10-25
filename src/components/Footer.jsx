import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col items-center py-6 bg-black text-white">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 w-full max-w-4xl px-4 text-center md:text-left">
        
        {/* Quick Links Section */}
        <div className="links">
          <h1 className="mb-2 text-start text-red-700 text-md">Quick Links</h1>
          <div className="text-xs space-y-2">
            <Link to="/jimneys-resturant">
              <div className="flex items-center justify-cente justify-start">
                <IoIosArrowForward className="mr-2" />
                <span className="hover:text-gray-400">Home</span>
              </div>
            </Link>
            <Link to="/jimneys-resturant/location">
              <div className="flex items-center justify-cente justify-start">
                <IoIosArrowForward className="mr-2" />
                <span className="hover:text-gray-400">Location</span>
              </div>
            </Link>
            <Link to="/jimneys-resturant/menu">
              <div className="flex items-center justify-cente md:justify-start">
                <IoIosArrowForward className="mr-2" />
                <span className="hover:text-gray-400">Menu</span>
              </div>
            </Link>
            <Link to="/jimneys-resturant/order">
              <div className="flex items-center justify-cente md:justify-start">
                <IoIosArrowForward className="mr-2" />
                <span className="hover:text-gray-400">Order</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="contact">
          <h1 className="text-red-700 text-center text-md">Contact Us</h1>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://mail.google.com/mail" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <AiOutlineMail size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaInstagram size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaLinkedinIn size={15} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaXTwitter size={15} />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="service md:ml-8">
          <h1 className="mb-2 text-red-700 text-md">Our Services</h1>
          <p className="text-xs">We ensure that you always have halal meals so that you can gain the akhira.</p>
        </div>
      </div>

      <div className="text-[10px] mt-6 text-center">&copy; 2024 Jimneys Restaurant</div>
      {/* <div className="text-xs mt-2 text-center">
        Developed by 
        <a 
          className="underline text-red-300 decoration-slate-700 underline-offset-4 decoration-2 ml-1" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://jaydeexsf.github.io/My-Personal-Portfolio/"
        >
          Isaac Johannes Ibrahim Laka III
        </a>
      </div> */}
    </div>
  );
}

export default Footer;
