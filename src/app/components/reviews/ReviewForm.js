'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image'; // ✅ Import Next.js Image component
import reviewImage from '../../../images/review.png';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  // Static service data (will be dynamic later)
  const service = {
    businessName: "QuickFix Plumbing Co",
    location: "Business Name in Lagos",
    date: "24th October 2025",
    image: reviewImage
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Send to API later
    console.log({
      rating,
      comment,
      service: service.businessName
    });

    // Show success message (temporary)
    alert('Review submitted successfully!');
    
    // Clear form
    setRating(0);
    setComment('');
    
    // TODO: Redirect to another page later
    // router.push('/some-page');
  };

  return (
    <div className=" ">
      {/* Header */}
      <div className="  bg-[#E6E6EE] py-8 ">
        <h1 className="text-[24px] h-[29px]  leading-[120%] tracking-[-0.02em] font-bold text-[#24272A] mb-1">Add Reviews</h1>
        <p className="text-[16px]  leading-[145%] font-medium h-[23px] text-[#737380]">
          Add your review and overall rating of this Service!
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Service Image */}
        <div className="w-full h-[600px] rounded-t-[20px]  overflow-hidden relative">
          <Image
            src={service.image}
            alt="Service"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Service Info */}
        <div className="p-6 bg-white  ">
          <h2 className="text-[24px] font-bold leading-[120%] h-[34px] tracking-[-0.02em] text-[#000000] ">
            {service.businessName}
          </h2>
          <p className="text-[16px] font-medium leading-[145%] h-[11px] text-[#737380] mb-4">{service.location}</p>

          <div className="py-6 flex flex-col ">
            <p className="text-[20px] leading-[120%] h-[24px] font-bold text-[#737380] mb-1">Date from</p>
            <p className="text-[16px] leading-[145%] h-[11px] font-medium text-[#737380]">{service.date}</p>
          </div>

          {/* Star Rating */}
          <div className="py-6">
            <p className='leading-[120%] h-[11px] text-[#8A8A99] font-medium text-[9px] tracking-[-0.02em]'>Your overall rating of this product</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                     className={`w-[31px] h-[31px] ${
                      star <= (hoverRating || rating)
                        ? 'fill-[#F1A008] text-[#F1A008'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Textarea */}
          <div className="p-6">
            <label 
              htmlFor="comment"
              className="block text-[24px] font-medium text-[#1C1C1F] h-[29px] leading-[120%] tracking-[-0.02em] mb-3"
            >
              Add Detail Review
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add your comment"
              rows={6}
              className="w-full px-5 py-6 border-[0.2px] h-[256px] border-[#77797D] rounded-[16px] bg-[#77797D24] text-[#737380] leading-[120%] tracking-[-0.02em] text-[21px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-4 px-6 h-[52px] rounded-[15px] transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}