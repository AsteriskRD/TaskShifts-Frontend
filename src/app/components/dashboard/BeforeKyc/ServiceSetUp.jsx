import React from 'react'
import CardKyc from '../CardKyc'
import { DM_Sans, Inter } from 'next/font/google'



const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})
    

const ServiceSetup = () => {
  return (
    <div className='pt-30'>
    Service setup
    </div>
  )
}

export default ServiceSetup
