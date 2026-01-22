import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export default function ServiceOffer() {
  const services = [
    {
      id: 1,
      title: 'Basic Home Cleaning',
      description: 'Regular maintenance cleaning for homes up to 3 bedrooms',
      price: '$15',
    },
    {
      id: 2,
      title: 'Deep Cleaning Package',
      description: 'Thorough cleaning including hard-to-reach areas',
      price: '$25',
    },
    {
      id: 3,
      title: 'Move In/Out Cleaning',
      description: 'Complete cleaning for moving transitions',
      price: '$35',
    },
    {
      id: 4,
      title: 'Office Cleaning',
      description: 'Professional cleaning for office spaces',
      price: '$20',
    },
  ];

  return (
    <div className='w-full sm:w-[950px] bg-[#FFFFFF] rounded-[12px] p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200'>
      {/* Header */}
      <h2 className="text-[#1F2937] font-semibold text-xl sm:text-2xl lg:text-[24px] leading-[120%] tracking-[-0.02em] mb-4 sm:mb-6">
        Service Offered
      </h2>

      {/* Services Grid - Responsive */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
        {services.map((service) => (
          <div 
            key={service.id}
            className='bg-white border border-gray-200 rounded-[12px] p-4 sm:p-5 hover:shadow-md transition-shadow flex flex-col'
          >
            {/* Icon */}
            <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px] rounded-lg flex items-center justify-center bg-[#E8EEF5] mb-3 sm:mb-4'>
              <Shield size={20} className='sm:w-6 sm:h-6 text-[#003271]' />
            </div>

            {/* Service Title */}
            <h3 className='text-[#1F2937] font-semibold text-sm sm:text-[16px] leading-[120%] mb-2'>
              {service.title}
            </h3>

            {/* Service Description - Grows to fill space */}
            <p className='text-[#6B7280] font-normal text-xs sm:text-[14px] leading-[145%] mb-3 sm:mb-4 flex-grow'>
              {service.description}
            </p>

            {/* Price and Details - Always at bottom */}
            <div className='flex items-center justify-between gap-2 mt-auto'>
              <span className='text-[#EF4444] font-semibold text-sm sm:text-[16px] whitespace-nowrap'>
                From {service.price}
              </span>
              <button className='flex items-center gap-1 text-[#003271] font-semibold text-xs sm:text-[14px] hover:gap-2 transition-all whitespace-nowrap'>
                See Details
                <ArrowRight size={14} className='sm:w-4 sm:h-4' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}