import React from 'react'

const Title = ({text}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-7'>
        <p className='font-medium text-[24px] sm:text-[30px]'>{text}</p>
        <div className="w-[200px] h-2 bg-[#E5B300] rounded-md my-2"></div>
    </div>
  )
}

export default Title