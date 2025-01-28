import React from 'react'

export const HomeCatagories = ({icon,lable}) => {
  return (
    <div className='w-full md:w-60 max-[890px]:w-72 lg:w-40 h-32 lg:h-36 border-2 border-gray-300 rounded-md flex flex-col py-6 transition-all duration-300 justify-center gap-y-4 lg:gap-y-6 cursor-pointer items-center hover:bg-[#DB4444] hover:border-0 hover:text-white'>
   {icon}
   <h1 className='text-base font-normal'>{lable}</h1>
    </div>
  )
}
