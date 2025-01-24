import React from 'react'

//sections
import Header from '../components/main/header'
import About from '../components/main/about'
import University from '../components/main/university'
import Courses from '../components/main/courses'
import Community from '../components/main/community'
import Faqs from '../components/main/faqs'

const WebPage = () => {
  return (
    <div className='pt-[70px]'>
      <Header />
      <About/>
      <Community/>
      <University/>
      <Courses/>
      <Faqs/>
    </div>
  )
}

export default WebPage