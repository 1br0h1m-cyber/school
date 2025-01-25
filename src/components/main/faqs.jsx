import React from 'react'

//images
import email from '../../assets/email.png'

//components
import Button from '../ui/button'

const Faqs = () => {
  return (
    <div id='faqs' className='block xmd:flex px-4 sm:px-8 gap-5 pt-8'>
      <div className='faqs w-full h-[60vh] xmd:w-1/2 md:h-[50vh]'/>
        <div className='xmd:w-1/2 py-5 space-y-4'>

          <div className='text-[25px] md:text-[30px] lg:text-[35px] font-medium'>We're here to help</div>
          <div className='md:w-2/3'>Read through our FAQs and, if you can't find what you're looking for, our experts will be happy to answer your questions.</div>
          
          <div className='block sm:flex gap-5 space-y-2 sm:space-y-0'>
            <Button text={'read faqs'} v1={true}/>
            <button className='flex items-center uppercase font-medium text-[#E5B300] gap-1 p-3'> 
              <img src={email} alt="" /> 
              <p>ask a question</p>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Faqs