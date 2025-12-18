import Image from 'next/image';
import { Star } from 'lucide-react'

export default function ProfileCard() {
   return (
     <div className='p-4 sm:p-6 lg:p-10 bg-[#FFFFFF] rounded-[12px]'>
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-[35px] items-start'>
            
            {/* Profile Image */}
            <div className='relative w-32 h-32 sm:w-40 sm:h-40 lg:w-[213px] lg:h-[213px] border-[1.5px] border-[#FFFFFF99] flex-shrink-0 mx-auto sm:mx-0'>
                <Image 
                    src="/images/profile.png" 
                    width={213} 
                    height={213} 
                    alt='profile-pic' 
                    className='object-cover rounded-lg' 
                />
                <div className='absolute bottom-2 right-2 w-6 h-6 sm:w-7 sm:h-7 lg:w-[30.6px] lg:h-[30.6px] bg-[#00C951] rounded-full border-2 border-white'></div>
            </div>
            
            {/* Profile Info */}
            <div className='flex-1 w-full sm:w-auto'>
                {/* Name & Badge */}
                <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 lg:gap-[46px] mb-3 sm:mb-4'>
                    <h4 className='text-[#000000] font-bold text-xl sm:text-2xl lg:text-[28px] leading-[120%] tracking-[-0.02em]'>
                        Mercy Smile
                    </h4>
                    <div className='bg-[#156A15] rounded-[12px] py-2 px-4 w-fit'>
                        <p className='text-xs sm:text-sm font-semibold text-[#FFFFFF] leading-[120%] tracking-[-0.02em] whitespace-nowrap'>
                            Verified Provider
                        </p>
                    </div>
                </div>
                
                {/* Title */}
                <div className='mb-4 sm:mb-6'>
                    <p className='text-[#0E0E1B] font-semibold text-sm sm:text-[14px] leading-[145%] tracking-[0%]'>
                        Professional Home Cleaning Specialist
                    </p>
                </div>
                
                {/* Rating & Location */}
                <div className='flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 lg:gap-[46px] items-start sm:items-center mb-4 sm:mb-6'>
                    {/* Stars */}
                    <div className='flex gap-1 sm:gap-2 items-center'>
                        <Star size={18} className='sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400'/>
                        <Star size={18} className='sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400'/>
                        <Star size={18} className='sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400'/>
                        <Star size={18} className='sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400'/>
                    </div>
                    
                    {/* Rating Text */}
                    <p className='font-semibold text-sm sm:text-[16px] text-[#000000] leading-[120%] tracking-[0%] whitespace-nowrap'>
                        4.8 (120 reviews)
                    </p>
                    
                    {/* Location */}
                    <div className='flex items-center gap-1'>
                        <Image 
                            src="/images/ming.png" 
                            width={15} 
                            height={18} 
                            alt='location-icon' 
                            className='object-cover'
                        />
                        <span className='text-[#000000] font-normal text-sm leading-[145%] tracking-[0%]'>
                            Canada
                        </span>
                    </div>
                </div>
                
                {/* Call to Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-[17px]'>
                    <button className='w-full sm:w-auto px-6 py-3 sm:py-4 hover:bg-[#004A9C] cursor-pointer bg-[#003271] rounded-[30px]'>
                        <p className='text-[#FFFFFF] font-bold text-sm sm:text-[16px] leading-[145%] tracking-[0%]'>
                            Book Now
                        </p>
                    </button>
                    
                    <button className='w-full sm:w-auto flex items-center justify-center cursor-pointer hover:bg-[#E5E7EB] gap-2 sm:gap-3 bg-[#F3F4F6] border-2 border-[#003271] px-6 py-3 sm:py-4 rounded-[30px]'>
                        <Image 
                            src="/images/bector.png" 
                            width={17} 
                            height={15} 
                            alt='vector' 
                            className='object-cover'
                        />
                        <p className='text-[#003271] font-bold text-sm sm:text-[14px] leading-[145%] tracking-[0%]'>
                            Message
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </div>
   )
}