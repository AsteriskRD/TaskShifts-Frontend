import React from 'react'
import FindtTrusted from '../components/ServiceComps/FindtTrusted'
import Filter from '../components/ServiceComps/Filter'
import Pagination from '../components/ServiceComps/Pagination'
import ServiceParent from '../components/ServiceComps/ServiceParent'

const Services = () => {
  return (
    <div className='bg-[#e2e2e947] py-8'>
        <FindtTrusted/>
        <Filter/>
        <ServiceParent/>
        <Pagination/>
        
        
      
    </div>
  )
}

export default Services
