import React from 'react'
import Button from '../ui/button'

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center py-10 gap-6'>
      <p className='text-center px-[30px] sm:px-[80px] md:px-[110px] lg:px-[180px]'>
        Explore your options and make informed decisions with our comprehensive guide to universities around the world. Discover
        top-ranked institutions, explore diverse programs, and connect with like-minded individuals to build your academic future.
        With easy-to-use search tools, in-depth profiles, and trusted ratings and reviews, we provide everything you need to make
        the right choice for your academic journey. Start your search today and find your perfect fit!
      </p>
      <Button text={'Get started'} v1={true} className={'p-3'}/>
    </div>
  )
}

export default About