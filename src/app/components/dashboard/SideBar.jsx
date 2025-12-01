import React from 'react'
import SideBarMain from './sidebarCont/SideBarMain'
import SideBarFooter from './sidebarCont/SideBarFooter'

const SideBar = () => {
  return (
    <div className=' py-6' >
        <div className=''>
            <SideBarMain/>
        </div>
        <div>
            <SideBarFooter/>
        </div>
      
    </div>
  )
}

export default SideBar
