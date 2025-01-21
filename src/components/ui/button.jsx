import React from 'react'

const Button = ({text, icon, v1, v2, onClick}) => {

    const Stylev1 = 'border-solid border-[1px] border-[#E5B300] text-white bg-[#E5B300] hover:text-[#E5B300] hover:bg-white'
    const Stylev2 = 'border-solid border-[1px] border-[#E5B300] text-[#E5B300] bg-white hover:text-white hover:bg-[#E5B300]'

  return (
    <div className={`flex justify-center items-center gap-2 max-w-[200px] uppercase p-2 font-medium cursor-pointer transition-all
        ${v1 ? Stylev1 : v2 ? Stylev2 : "hover:text-[#E5B300]"} `} onClick={onClick}>
        <span>{text}</span>
        {icon ? <span>{icon}</span> : ""}
    </div>
  )
}

export default Button