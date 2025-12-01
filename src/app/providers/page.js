import React from 'react'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import DashBoardIntro from '../components/dashboard/DashBoardIntro'

const ProviderDashboard = () => {
  return (
    <div className='py-10 max-w-[1440px] px-8 mx-auto'>
        <DashboardHeader/>
        <DashBoardIntro/>
      
    </div>
  )
}

export default ProviderDashboard
