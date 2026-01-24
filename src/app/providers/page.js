import React from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashBoardIntro from '../components/dashboard/DashBoardIntro'

const ProviderDashboard = () => {
  return (
    <div className='py-10  px-8 w-full max-w-full
'>
        <DashboardHeader/>
        <DashBoardIntro/>
      
    </div>
  )
}

export default ProviderDashboard
