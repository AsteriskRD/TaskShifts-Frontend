import Image from 'next/image'
import React from 'react'

const HowCard = ({image, title, para, no}) => {
  return (
    <div className='border text-center space-y-2 py-6 px-4 rounded-2xl border-black relative'>
        <Image src={image}  alt={title} className="w-30 mx-auto h-25"/>
        <h1 className='font-bold'>{title}</h1>
        <p className='text-sm'>{para}</p>
        <h1 className='absolute bg-[#003271] text-white rounded-full w-6 aspect-square -top-2.5  left-10'>{no}</h1>
        
      
    </div>
  )
}

export default HowCard
