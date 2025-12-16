import React from 'react'

const services = [
    "Plumbing",
    "Electrical",
    "Cleaning",
    "Painting"
]

const Popular = () => {
  return (
    <div className='md:px-10 sm:px-6 px-4 py-4'>
        <div className='flex items-center justify-between md:gap-10'>
            <h1>Popular:</h1>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-6 ml-2'>
                {services.map((service) =>(
                    <li  key={service} className='py-2 px-4 border border-[#003271] rounded-lg  cursor-pointer'>{service}</li>
                ))}

            </ul>
        </div>

      
    </div>
  )
}

export default Popular
