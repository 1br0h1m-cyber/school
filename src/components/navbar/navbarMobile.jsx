import React, { useState } from 'react'

//icons
import { RiCloseLargeLine } from "react-icons/ri";
import { HiMiniBars4 } from "react-icons/hi2";
import Button from '../ui/button';

const NavbarMobile = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <div className='flex lg:hidden justify-between items-center h-[70px] w-full px-[20px] sm:px-[40px] md:px-[60px] fixed bg-white z-50'>

        <div className='sm:flex sm:justify-center sm:items-center sm:gap-3'>
          <div className='text-[25px] border-solid border-[1px] border-black p-1 rounded-md cursor-pointer hidden sm:flex' 
            onClick={() => setToggle(!toggle)}>
            {toggle ? <RiCloseLargeLine /> : <HiMiniBars4 />}
          </div>
          <div className='font-semibold text-[20px] flex-grow'>
            3-Maktab
          </div>
        </div>

        <div className='text-[25px] border-solid border-[1px] border-black p-1 rounded-md cursor-pointer sm:hidden' 
          onClick={() => setToggle(!toggle)}>
          {toggle ? <RiCloseLargeLine /> : <HiMiniBars4 />}
        </div>

        <div className='hidden sm:flex gap-3'>
          <Button text={'login'} />
          <Button text={'Sign up'} v1={true} />
        </div>

      </div>

      <div className={`lg:hidden justify-center w-full fixed left-0 right-0 top-[70px] bg-white border-t border-black
        ${toggle ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 z-40 pl-10 sm:pl-0 py-3`}>

        <div className='flex flex-col sm:flex-row justify-center w-full sm:space-x-8'>
          <a href="#about" className='hover:text-[#E5B300] transition'>About</a>
          <a href="#university" className='hover:text-[#E5B300] transition'>University</a>
          <a href="#courses" className='hover:text-[#E5B300] transition'>Courses</a>
          <a href="#community" className='hover:text-[#E5B300] transition'>Community</a>
          <a href="#news" className='hover:text-[#E5B300] transition'>News</a>
        </div>

        <div className='flex gap-3 pt-2 sm:hidden'>
          <Button text={'login'} />
          <Button text={'Sign up'} v1={true} />
        </div>

      </div>

    </div>

  )
}

export default NavbarMobile