import React from 'react'

import header from '../../assets/head.jpg'

const Header = () => {
  return (
    <div id='home' className='flex justify-center items-center relative z-30'>
      <div alt="home" title='3-maktab' className='w-[90%] md:w-[80%] h-[70vh] md:h-[100vh] filter contrast-150 brightness-75 header'/>
      <div className='absolute h-full w-[90%] md:w-[80%] flex flex-col justify-center items-center gap-2'>
        <h1 className='text-[27px] md:text-[40px] lg:text-[50px] capitalize text-white pl-5 ssm:pl-0'>Find your <span className='bg-[#E5B300] px-1'>future</span> today!</h1>
        <h3 className='text-[15px] md:text-[20px] lg:text-[27px] capitalize text-white pl-5 ssm:pl-0'>The ultimate guide to universities worldwide</h3>
      </div>
    </div>
  )
}

export default Header