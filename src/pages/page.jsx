import React from 'react'

//sections
import Home from '../components/main/home'
import About from '../components/main/about'
import University from '../components/main/university'
import Courses from '../components/main/courses'
import Community from '../components/main/community'
import News from '../components/main/news'

const WebPage = () => {
  return (
    <div className='pt-[70px]'>
      <Home />
      <About/>
      <University/>
      <Courses/>
      <Community/>
      <News/>
    </div>
  )
}

export default WebPage