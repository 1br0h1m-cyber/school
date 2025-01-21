import React from 'react'

import homeImage from '../../assets/home.jpg'

const Home = () => {
  return (
    <div id='home' className='flex justify-center items-center relative z-30'>
      <img src={homeImage} alt="home" title='3-maktab' className='w-[90%] md:w-[80%] h-[70vh] md:h-[90vh] filter contrast-150 brightness-75'/>
      <div className='absolute h-full w-[90%] md:w-[80%] bg-[rgba(0,0,0,0.25  )] flex flex-col justify-center items-center'>
        <h1 className='text-[35px] md:text-[50px] capitalize text-white'>Find your <span className='bg-[#E5B300] px-1'>future</span> today!</h1>
        <h3 className='text-[15px] md:text-[25px] capitalize text-white'>The ultimate guide to universities worldwide</h3>
      </div>
    </div>
  )
}

export default Home