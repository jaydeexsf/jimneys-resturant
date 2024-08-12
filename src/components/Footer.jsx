import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='flex flex-col text-lg items-center py-8 bg-black text-white'>
      <div className="logo mb-4">
        <img className='w-16' src="src/assets/images/PSX_20240717_161845-removebg-preview.png" alt="Logo" />
      </div>

      <div className="text-left flex flex-col md:flex-row md:justify-between w-full md:w-[80%]">
        <div className="links mb-4 md:mb-0">
          <h1 className='mb-6 text-red-700'>Quik Links</h1>
          <div>
            <span className="block mb-2  "><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-600">home</span></span>
            <span className="block mb-2"><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-600">services</span></span>
            <span className="block mb-2"><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-600">menu</span></span>
          </div>  
        </div>

        <div className="contact flex items-center flex-col gap-8">
          <h1 className='text-red-700'>Contact Us</h1>
          <div className="flex gap-4">
            <a href="/order" className="block mb-2 hover:text-red-500"><FiPhone /></a>
            <a href="https://mail.google.com/mail" target='_' className="block mb-2 hover:text-red-500"><AiOutlineMail /></a>
            <a href="https://instagram.com" target='_' className="block mb-2 hover:text-red-500"><FaInstagram /></a>
            <a href="https://linkein.com" target='_' className="block mb-2 hover:text-red-500"><FaLinkedinIn /></a>
            <a href="https://x.com" target='_' className="block mb-2 hover:text-red-500"><FaXTwitter /></a>
          </div>
        </div>
        <div className="service w-[20vw]">
          <h1 className='mb-4 text-red-700'>Our Services</h1>
          <p>We make sure that u always have halal meals so that you can gain the akhira</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
