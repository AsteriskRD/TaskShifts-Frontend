"use client"
import React from 'react'
import notfound from "./images/notfound.png"
import dash from "./images/dash.png"
import { DM_Sans } from "next/font/google";
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const NotFound = () => {
  const router = useRouter();

  const goBackHome = () => {
    router.push("/");
  }
  return (
     <main
         className={`${dmsans.className} flex pt-40 pb-20 flex-col items-center justify-center min-h-screen bg-accent-50 px-4 lg:px-20`}
       >
         <div className="w-full space-y-4 max-w-md bg-white p-8 mx-auto rounded-xl shadow-md">
           
           <h1 className='font-bold text-6xl font-extrabold text-center'>404</h1>
           <h1 className='text-center font-extrabold'>Page Not Found !</h1>
           <Image className='mx-auto' width={200} src={notfound} alt="Not Found" />
           <p className='text-center text-[#5C5C66]'>Sorry, this page does not seem to exist, or an error has occurred somewhere</p>
           <button onClick={goBackHome}
            type="submit"
            className="w-full bg-[#003271] cursor-pointer text-white py-2 rounded-xl hover:bg-[#002050]"
          >
            Go Back Home
          </button>
         </div>
       </main>
  )
}

export default NotFound
