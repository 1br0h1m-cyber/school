import React from 'react'

//images
import email from '../../assets/email.png'

//components
import Button from '../ui/button'

const Faqs = () => {
  return (
    <div id='faqs' className='block xmd:flex px-4 sm:px-8 gap-5 py-8'>
      <div className='faqs w-full h-[60vh] xmd:w-1/2 md:h-[55vh] lg:h-[60vh]'/>
        <div className='xmd:w-1/2 py-5 xmd:py-10 space-y-4'>

          <h1 className='text-[25px] md:text-[30px] lg:text-[35px] font-medium'>We're here to help</h1>
          <h3 className='md:w-2/3'>Read through our FAQs and, if you can't find what you're looking for, our experts will be happy to answer your questions.</h3>
          
          <div className='block sm:flex gap-3 space-y-2 sm:space-y-0'>
            <Button text={'read faqs'} v1={true}/>
            <button className='flex justify-center items-center uppercase font-medium text-[#E5B300] gap-1 p-2 w-full max-w-[200px]'> 
              <img src={email} alt="" /> 
              <p>ask a question</p>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Faqs