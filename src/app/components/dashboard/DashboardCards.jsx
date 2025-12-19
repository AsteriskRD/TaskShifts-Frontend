import React from 'react'
import { DM_Sans } from 'next/font/google'


const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});
const DashboardCards = ({name, icon, no, stat, color, bg}) => {
  return (
    <div className={`${dm_sans.className} rounded-2xl p-4 `}>
      <div className='flex justify-between'>
        <h1 className="font-bold">{name}</h1>
        <div className=" p-1 rounded-full" style={{backgroundColor: bg}}>{icon}</div>

      </div>
      <div className='py-4'>
        <h1 className="" style={{color: color}}>{no}</h1>
        <p className='pt-4'>{stat}</p>
        <div className='border-x-13 mt-1.5  rounded border-y' style={{color:color}}>
            
        </div>
      </div>
    </div>
  )
}

export default DashboardCards
