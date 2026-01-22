 import React from 'react'
 
 export default function Title( {title, subtitle} ) {
   return (
      <div className="mb-6">
        <h1 className="text-[24px] font-bold text-[#24272A] pt-4 leading-[120%] tracking-[-0.02em]">{title}</h1>
        <p className="text-[16px] text-[#737380] leading-[145%] mt-1">{subtitle}</p>
      </div>
   )
 }
 