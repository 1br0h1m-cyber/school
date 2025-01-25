import React from 'react'

//icon
import { GoArrowRight } from "react-icons/go";

const Card = ({data}) => {
  return (
    <div>
        <div>
            <img src={data.image} alt="" className='w-full'/>
        </div>
        <div className='pt-1'>
            <div className='font-semibold text-[20px]'>{data.title}</div>
            <button className='text-[#E5B300] uppercase text-[15px] flex items-center gap-[1px] hover:underline'> see university <GoArrowRight/> </button>
        </div>
    </div>
  )
}

export default Card