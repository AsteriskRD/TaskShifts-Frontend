"use client";
import React from 'react'
import { Poppins } from 'next/font/google'
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const VerifySuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent-50">
         <div className=" bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center gap-6">
           <h1 className={`${poppins.className} font-bold md:text-xl text-lg`}>
                Email Verified Successfully!
           </h1>
           <div className="bg-[#156A15]  flex flex-col justify-center pl-2 rounded-full w-12 aspect-square">
             <MdOutlineMarkEmailRead size={30} className="text-white " />
           </div>
           <p className={`${poppins.className} text-sm text-[#737380]`}>
           Your email has been successfully verified.
           </p>
   
           <h1 className='font-bold'>Proceed to <span className='text-[#FF6815]'>
            <Link href="/login" className="">Login</Link>
            </span></h1>
         </div>
       </div>
  )
}

export default VerifySuccess
