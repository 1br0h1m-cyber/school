import React from 'react'

//components
import Button from '../ui/button'

const NavbarDefault = () => {
  return (
    <div className='hidden lg:flex justify-between items-center h-[70px] fixed bg-white left-0 right-0 lg:px-6 xlg:px-12 z-50'>

      <div className='font-semibold text-[20px]'>3-Maktab</div>

      <div className='space-x-6'>
        <a href="#about" className='hover:text-[#E5B300] transition'>About</a>
        <a href="#university" className='hover:text-[#E5B300] transition'>University</a>
        <a href="#courses" className='hover:text-[#E5B300] transition'>Courses</a>
        <a href="#community" className='hover:text-[#E5B300] transition'>Community</a>
        <a href="#news" className='hover:text-[#E5B300] transition'>News</a>
      </div>

      <div className='flex gap-3'>
        <Button text={'login'} />
        <Button text={'Sign up'} v1={true} />
      </div>

    </div>
  )
}

export default NavbarDefault