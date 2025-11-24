import Image from 'next/image'
import React from 'react'

const WhyCard = ({icon, title, para}) => {
  return (
    <div className='bg-white flex h-60 flex-col text-left space-y-6 py-6 px-4 rounded-2xl'>
     <div className='w-8 aspect-square bg-[#CCD6E3] rounded-md p-1'>
       
       <Image src={icon} alt={title}/>
     </div>
      <h1 className='font-bold'>{title}</h1>
      <p className='text-sm'>{para}</p>


      
    </div>
  )
}

export default WhyCard
