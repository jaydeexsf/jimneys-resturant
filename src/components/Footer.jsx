import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import theimg from "../assets/images/PSX_20240717_161845-removebg-preview.png";

function Footer() {
  return (
    <div className='flex flex-col items-center py-4 bg-black text-white'>
      <div className="logo mb-4">
        <img className='w-16' src={theimg} alt="Logo" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-[80%] px-4">
        
        {/* Quick Links Section */}
        <div className="links mb-4 md:mb-0">
          <h1 className='mb-2 text-red-700 text-lg'>Quick Links</h1>
          <div className="text-sm">
            <span className="block mb-2"><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-400">Home</span></span>
            <span className="block mb-2"><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-400">Services</span></span>
            <span className="block mb-2"><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-400">Menu</span></span>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="contact flex flex-col items-center mb-4 md:mb-0">
          <h1 className='text-red-700 text-lg text-center'>Contact Us</h1>
          <div className="flex gap-4 mt-2">
            <a href="/order" className="hover:text-red-500"><FiPhone size={20} /></a>
            <a href="https://mail.google.com/mail" target='_' className="hover:text-red-500"><AiOutlineMail size={20} /></a>
            <a href="https://instagram.com" target='_' className="hover:text-red-500"><FaInstagram size={20} /></a>
            <a href="https://linkedin.com" target='_' className="hover:text-red-500"><FaLinkedinIn size={20} /></a>
            <a href="https://x.com" target='_' className="hover:text-red-500"><FaXTwitter size={20} /></a>
          </div>
        </div>

        {/* Services Section */}
        <div className="service w-full md:w-[30%] text-left">
          <h1 className='mb-2 text-red-700 text-lg'>Our Services</h1>
          <p className='text-sm'>We ensure that you always have halal meals so that you can gain the akhira.</p>
        </div>
      </div>

      <div className='text-xs text-center mt-4'>&copy; 2024 Jimneys Restaurant</div>
      <div className="text-xs text-center">
        Developed by <a className='underline text-red-300 decoration-slate-700 underline-offset-4 decoration-2' target='_' href='https://jaydeexsf.github.io/My-Personal-Portfolio/'> Isaac Johannes Ibrahim Laka III</a>
      </div>
    </div>
  );
}

export default Footer;
