import React from 'react'
import FindtTrusted from '../components/ServiceComps/FindtTrusted'
import Filter from '../components/ServiceComps/Filter'
import Pagination from '../components/ServiceComps/Pagination'
import ServiceParent from '../components/ServiceComps/ServiceParent'
import SearchComponent from '../components/ServiceComps/SearchComponent'
import Popular from '../components/ServiceComps/Popular'
import Available from '../components/ServiceComps/Available'


const Services = () => {
  return (
    <div className='bg-[#e2e2e947] max-w-[1440px] mx-auto py-8'>
        <FindtTrusted/>
        <Filter/>
        <SearchComponent/>

        <Popular/>
        <Available/>
        <ServiceParent/>
        <Pagination/>
        
        
      
    </div>
  )
}

export default Services
