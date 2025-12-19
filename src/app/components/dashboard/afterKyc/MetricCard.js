// components/dashboard/MetricCard.jsx
import Link from 'next/link'

export default function MetricCard({ title, value, description, icon: Icon, href }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow">
      
      {/* Top Row */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <h3 className="text-[#737380] leading-[145%] text-[16px] sm:text-[18px] tracking-[0%] font-medium">
          {title}
        </h3>
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB38A] rounded-full flex items-center justify-center flex-shrink-0">
          <Icon className="text-blue-600 border-[2.4px] border-[#092F63]" size={20} />
        </div>
      </div>
      
      {/* Big Number */}
      <div className="mb-3 sm:mb-4">
        <p className="text-[32px] sm:text-[40px] leading-[120%] tracking-[0.04em] font-bold text-[#0E0E1B]">
          {value}
        </p>
      </div>
      
      {/* Bottom Row */}
      <div className="flex items-center justify-between gap-2">
        <p className="bg-[#F4F2F2B2] px-3 sm:px-4 py-1 text-[#848C93] leading-[145%] tracking-[0%] rounded-[20px] text-[12px] sm:text-[14px] flex-shrink-0">
          {description}
        </p>
        <Link 
          href={href}
          className="text-[14px] sm:text-[16px] leading-[100%] text-[#676767] hover:text-blue-600 font-semibold transition-colors whitespace-nowrap"
        >
          View
        </Link>
      </div>
      
    </div>
  )
}