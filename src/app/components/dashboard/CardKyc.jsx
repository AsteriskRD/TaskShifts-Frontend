import React from 'react'
import { DM_Sans, Inter } from 'next/font/google'


const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})
const CardKyc = () => {
  return (
    <div className='pt-28 pb-8 px-8 sm:px-12 md:px-10'>
      <div className={`bg-[#003271] py-6 px-8`}>
        <h1 className={`  ${dm_sans.className} font-bold text-2xl text-white`}>KYC VERIFICATION</h1>
        <p className='text-white text-sm font-medium  '>We would need to verify your KYC first!</p></div>
    </div>
  )
}

export default CardKyc
