import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import theimg from "../assets/images/PSX_20240717_161845-removebg-preview.png";

function Footer() {
  return (
    <div className='flex flex-col text-2xl items-center py-2 bg-black text-white'>
      <div className="logo mb-4">
        <img className='w-6' src={theimg} alt="Logo" />
      </div>

      <div className="text-left flex  pl-[30px] flex-co md:flex-row justify-between w-full md:w-[80%] mr-4">
        <div className="links mb-4 md:mb-0">
          <h1 className='mb-6 text-sm text-red-700'>Quik Links</h1>
          <div className="text-[10px]">
            <span className="block mb-  "><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-600">home</span></span>
            <span className="block mb-"><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-600">services</span></span>
            <span className="block mb-"><IoIosArrowForward className="inline mr-2" /><span className="hover:cursor-pointer hover:text-gray-600">menu</span></span>
          </div>  
        </div>

        <div className="contact flex items-cente flex-col gap-8">
          <h1 className='text-red-700 text-center text-sm'>Contact Us</h1>
          <div className="flex gap-2">
            <a href="/order" className="block mb-2 hover:text-red-500"><FiPhone size={14} /></a>
            <a href="https://mail.google.com/mail" target='_' className="block mb-2 hover:text-red-500"><AiOutlineMail size={14} /></a>
            <a href="https://instagram.com" target='_' className="block mb-2 hover:text-red-500"><FaInstagram  size={14}/></a>
            <a href="https://linkein.com" target='_' className="block mb-2 hover:text-red-500"><FaLinkedinIn  size={14}/></a>
            <a href="https://x.com" target='_' className="block mb-2 hover:text-red-500"><FaXTwitter  size={14}/></a>
          </div>
        </div>
        <div className="service w-[20vw]">
          <h1 className='mb-4 text-red-700 text-sm'>Our Services</h1>
          <p className='text-[10px]'>We make sure that u always have halal meals so that you can gain the akhira</p>
        </div>
      </div>
      <div className='text-xs'>&copy;2024 jimneys-resturant</div>
      <div className="text-[10px]">Developed By  <a className='underline text-red-300 decoration-slate-700 underline-offset-4 decoration-2' target='_' href='https://jaydeexsf.github.io/My-Personal-Portfolio/'> isaac_johannes_Ibrahim_Laka_iii</a></div>
    </div>
    
  );
}

export default Footer;