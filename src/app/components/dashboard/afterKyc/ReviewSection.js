'use client'
import { Star } from 'lucide-react'

export default function ReviewsSection({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
      
      {/* Title - CENTERED */}
      <h3 className="text-lg sm:text-[20px] leading-[120%] tracking-[0.02em] font-bold text-[#464255] text-center mb-4 sm:mb-6">
        Customer Reviews & Ratings
      </h3>
      
      {/* Main Content: Left (Reviews) | Divider | Right (Ratings) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT SIDE: Customer Reviews List */}
        <div className="space-y-4 lg:pr-6">
          {data.reviews.map((review) => (
            <div key={review.id} className="flex items-start gap-3">
              {/* Avatar */}
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ backgroundColor: review.avatarColor }}
              >
                {review.avatar}
              </div>
              
              {/* Name, Stars, Comment */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-[#050505] text-base sm:text-[18px] truncate">{review.name}</span>
                  
                  {/* Star Rating */}
                  <div className="flex gap-0.5 items-center flex-shrink-0">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={`sm:w-[19px] sm:h-[19px] ${
                          index < review.rating
                            ? 'fill-[#F1A008] text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Comment */}
                <p className="text-xs sm:text-[11px] text-[#868686] tracking-[0%] font-medium line-clamp-2">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* RIGHT SIDE: Ratings Section */}
        <div className="relative pt-6 lg:pt-0">
          {/* VERTICAL DIVIDER - Only on desktop */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          
          {/* Horizontal divider on mobile */}
          <div className="lg:hidden absolute top-0 left-0 right-0 h-px bg-gray-200" />
          
          {/* Rating Summary - RESPONSIVE LAYOUT */}
          <div className="lg:pl-6 flex flex-col sm:flex-row items-center gap-6">
            
            {/* LEFT: Big Average Rating + Badge */}
            <div className="flex flex-col items-center flex-shrink-0">
              {/* Big Rating with Star */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl sm:text-[42px] font-bold text-[#000000]">
                  {data.averageRating}
                </span>
                <Star size={20} className="sm:w-[25px] sm:h-[25px] fill-[#F1A008] text-yellow-400" />
              </div>
              
              {/* Yellow Badge with Review Count */}
              <div className="bg-[#F1A008] text-[#FFFFFF] text-xs font-bold px-3 py-1 leading-[145%] rounded-full whitespace-nowrap">
                {data.totalReviews} reviews
              </div>
            </div>
            
            {/* RIGHT: Progress Bars */}
            <div className="flex-1 space-y-2 w-full max-w-md">
              {data.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-2 sm:gap-3">
                  {/* Star Number */}
                  <span className="text-xl sm:text-[27px] text-[#6A6A6A] w-4 flex-shrink-0">{item.stars}</span>
                  
                  {/* Star Icon */}
                  <Star size={18} className="sm:w-[24px] sm:h-[24px] fill-[#F1A008] text-yellow-400 flex-shrink-0" />
                  
                  {/* Progress Bar */}
                  <div className="flex-1 h-[9px] bg-gray-100 rounded-[11px] overflow-hidden max-w-[290px]">
                    <div 
                      className="h-full bg-gradient-to-r from-[#BFCBC0] to-[#264C7D] rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        
      </div>
      
    </div>
  )
}