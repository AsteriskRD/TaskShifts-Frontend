import React from 'react'
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LandingPageCard = ({num, head, text}) => {
  return (
    <div className='flex  items-center gap-6 '>
        <div className='bg-[#003271] text-center text-white font-bold rounded-full p-3 w-6 h-6'>
            {num}
        </div>
        <div>
            <h1 className={`${poppins.className} text-[#003271] text-lg font-extrabold `}>{head}</h1>
            <h1 className={`${inter.className} text-[#64748B] text-sm`}>{text}</h1>
        </div>
      
    </div>
  )
}

export default LandingPageCard
