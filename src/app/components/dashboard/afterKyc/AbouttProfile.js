"use client";

import Image from 'next/image';

export default function AboutProfile() {
  return (
    <div className='w-full bg-[#FFFFFF] rounded-[12px] p-4 sm:p-6 lg:p-8'>
      {/* Header */}
      <h4 className="font-semibold text-xl sm:text-2xl lg:text-[24px] leading-[120%] tracking-[-0.02em] text-[#000000] mb-3 sm:mb-4">
        About Mercy
      </h4>
      
      {/* Description */}
      <p className="font-normal text-sm sm:text-[14px] leading-[145%] tracking-[0%] text-[#6B7280] mb-4 sm:mb-6">
        With over 8 years of experience in professional cleaning services, I specialize in transforming homes into spotless sanctuaries. My attention to detail and commitment to using eco-friendly products ensures your space is not only clean but also safe for your family and pets. I take pride in delivering exceptional service that exceeds expectations every time.
      </p>

      {/* Info Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Experience */}
        <div className='flex items-start gap-3'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px] rounded-lg flex items-center justify-center bg-[#E8EEF5] flex-shrink-0'>
            <Image src="/images/experience.png" width={24} height={24} alt='experience' className='object-contain w-5 h-5 sm:w-6 sm:h-6'/>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-[#1F2937] font-medium text-sm sm:text-[14px] leading-[20px]'>Experience</p>
            <span className='text-[#1F2937] font-semibold text-sm sm:text-[14px] leading-[20px]'>8+ Years</span>
          </div>
        </div>

        {/* Location */}
        <div className='flex items-start gap-3'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px] rounded-lg flex items-center justify-center bg-[#E8EEF5] flex-shrink-0'>
            <Image src="/images/bagde.png" width={24} height={24} alt='location' className='object-contain w-5 h-5 sm:w-6 sm:h-6'/>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-[#1F2937] font-medium text-sm sm:text-[14px] leading-[20px]'>Location</p>
            <span className='text-[#1F2937] font-semibold text-sm sm:text-[14px] leading-[20px]'>Canada</span>
          </div>
        </div>

        {/* Special Skills */}
        <div className='flex items-start gap-3'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px] rounded-lg flex items-center justify-center bg-[#E8EEF5] flex-shrink-0'>
            <Image src="/images/bector.png" width={24} height={24} alt='skills' className='object-contain w-5 h-5 sm:w-6 sm:h-6'/>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[#1F2937] font-medium text-sm sm:text-[14px] leading-[20px]'>Special Skills</p>
            <div className='flex flex-wrap gap-2'>
              <span className='rounded-full px-2.5 sm:px-3 py-1 bg-[#DBEAFE] text-[#003271] text-[10px] font-semibold whitespace-nowrap'>
                Deep Cleaning
              </span>
              <span className='rounded-full px-2.5 sm:px-3 py-1 bg-[#DBEAFE] text-[#003271] text-[10px] font-semibold whitespace-nowrap'>
                Eco-Friendly
              </span>
              <span className='rounded-full px-2.5 sm:px-3 py-1 bg-[#DBEAFE] text-[#003271] text-[10px] font-semibold whitespace-nowrap'>
                Flexible
              </span>
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className='flex items-start gap-3'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-[48px] lg:h-[48px] rounded-lg flex items-center justify-center bg-[#E8EEF5] flex-shrink-0'>
            <Image src="/images/certificate.png" width={24} height={24} alt='certificate' className='object-contain w-5 h-5 sm:w-6 sm:h-6'/>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-[#1F2937] font-medium text-sm sm:text-[14px] leading-[20px]'>Certifications</p>
            <div className='flex flex-wrap gap-2'>
              <span className='inline-block rounded px-2 py-0.5 bg-[#D1FAE5] text-[#065F46] text-xs sm:text-[12px] font-medium'>
                Self Trained
              </span>
              <span className='inline-block rounded px-2 py-0.5 bg-[#D1FAE5] text-[#065F46] text-xs sm:text-[12px] font-medium'>
                NCSC Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}