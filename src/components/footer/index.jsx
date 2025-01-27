import React, { useState } from 'react'

//icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa"


const Footer = () => {

  const date = new Date()

  const [inputValue, setInputValue] = useState("");

  return (

    <div className='flex flex-col items-center bg-[#36384E] text-white gap-6 py-8'>

      <h1 className='text-[22px] sm:text-[25px] md:text-[28px] font-semibold'>Subscribe to our Newsletter</h1>
      <h3 className='w-[85%] md:w-[70%] lg:w-[50%] text-center'>Get expert advice for your journey to university delivered to your inbox each month. It's short, and worthwhile - we promise!</h3>

      <input type="email" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='h-[50px] w-[80%] sm:w-[60%] lg:w-[55%] pl-2 rounded-sm focus:ring focus:ring-[#E5B300] focus:outline-none text-black font-medium' placeholder='Type your Email Address' />

      <div className='flex md:items-center gap-1 w-[60%] md:w-auto'>
        <input type="checkbox" className='w-4 h-4' />
        <p className='text-[12px] sm:text-[14px] md:text-[16px]'>I confirm I am over 16 and I agree to the Terms and Conditions and Privacy Notice.</p>
      </div>

      <button className={`${inputValue.trim() ? "bg-[#E5B300]" : "bg-[#999894]"} p-2 w-full max-w-[200px] uppercase font-medium`}>subscribe now</button>

      <hr className='w-[80%] md:w-[70%]' />

      <div className='flex text-[40px] gap-8 sm:gap-10'>
        <a className='hover:text-blue-700 transition hover:bg-white w-[40px] h-[40px] flex items-center rounded-md' href="https://www.facebook.com/"><FaFacebookSquare /></a>
        <a className='hover:text-violet-700 transition hover:bg-white w-[40px] h-[40px] flex items-center rounded-md' href="https://www.instagram.com"><FaSquareInstagram /></a>
        <a className='hover:text-black transition hover:bg-white w-[40px] h-[40px] flex items-center rounded-md' href="https://www.x.com"><FaSquareXTwitter /></a>
        <a className='hover:text-sky-500 transition hover:bg-white w-[40px] h-[40px] flex items-center rounded-md' href="https://www.linkedin.com"><FaLinkedin /></a>
      </div>

      <div className='grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-6 xmd:gap-10 lg:gap-14 w-full pl-10 sm:pl-0 sm:w-auto'>
        <a className='hover:text-[#E5B300] transition cursor-pointer' href>About</a>
        <a className='hover:text-[#E5B300] transition cursor-pointer' href>Contact</a>
        <a className='hover:text-[#E5B300] transition cursor-pointer' href>Faqs</a>
        <a className='hover:text-[#E5B300] transition cursor-pointer' href>Privacy</a>
        <a className='hover:text-[#E5B300] transition cursor-pointer' href>Terms</a>
        <a className='hover:text-[#E5B300] transition cursor-pointer' href>Cookie policy</a>
      </div>

      <h3 className='text-[16px]'>Copyright © {date.getFullYear()} - Mr Ibrohim</h3>

    </div>
  )
}

export default Footer