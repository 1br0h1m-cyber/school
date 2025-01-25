import React from 'react'

//data
import { communityData } from '../../data/mockData'

//icons
import { GoArrowRight } from 'react-icons/go'

const Community = () => {
  return (
    <div id='community' className='flex justify-center my-5'>
      <div className='communityBg relative min-h-[450px] w-[90%] '>
        <div className="grid grid-cols-1 xlg:grid-cols-3 gap-5 p-5 xlg:my-28">

          {communityData.map((data, index) => (
            <div key={index} data={data} className='flex bg-[rgba(255,255,255,0.9)] gap-5 p-3'>
              <div>
                <img src={data.image} alt="" className='min-w-[50px] w-full'/>
              </div>
              <div className='space-y-1'>
                <div className='font-semibold text-[20px] md:text-[24px]'>{data.title}</div>
                <div className='text-[16px] md:text-[20px]'>{data.text}</div>
                <button className='text-[#E5B300] uppercase text-[15px] flex items-center gap-[1px] hover:underline'> see university <GoArrowRight/> </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Community