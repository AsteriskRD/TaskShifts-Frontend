import { useState, useRef } from 'react';

export default function Stage1Form({ formData, handleInputChange, errors = {} }) {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <h2 className="text-[16px] md:text-[32px] font-bold text-[#454545] leading-none mb-8 tracking-[-0.04em]">
        Personal Information
      </h2>

      {/* Profile Photo - COMPLETELY FIXED */}
      <div className="w-full mb-4 ">  {/* Added pb-8 for extra safety */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-2">  {/* Added gap-2 */}
            <div 
              onClick={handleImageClick}
              className="w-[163px] h-[163px] rounded-full bg-gray-100 flex flex-col border-2 border-dashed border-gray-300 items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors overflow-hidden"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <>
                  <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-[#454545] font-medium text-sm tracking-[-0.04em] text-center">
                    Upload Photo
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5 text-center">
                    Click to browse
                  </span>
                </>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* CLEAR SEPARATOR - This creates definite space */}
      <div className="h-8"></div>

      {/* Form Fields */}
      <div className="space-y-6 ">  {/* Added mt-8 for extra top margin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#454545] tracking-[-0.04em] mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              className={`w-full px-4 py-4 h-[67px] w-[630px] border-[0.5px] bg-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                errors.firstName ? 'border-red-500' : 'border-[#000000CC]'
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold tracking-[-0.04em] text-[#454545] mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              className={`w-full px-4 py-4 border-[0.5px] h-[67px] w-[630px] bg-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                errors.lastName ? 'border-red-500' : 'border-[#000000CC]'
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#454545] tracking-[-0.04em] mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className={`w-full px-4 py-4 h-[67px] w-[630px] border-[0.5px] bg-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                errors.email ? 'border-red-500' : 'border-[#000000CC]'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold tracking-[-0.04em] text-[#454545] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className={`w-full px-4 py-4 h-[67px] w-[630px] border-[0.5px] bg-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                errors.phone ? 'border-red-500' : 'border-[#000000CC]'
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#454545] tracking-[-0.04em] mb-2">
            Professional Bio
          </label>
          <textarea
            name="professionalBio"
            value={formData.professionalBio}
            onChange={handleInputChange}
            placeholder="Tell yourself about your work experience and your skills"
            rows={5}
            className={`w-full px-4 py-3 border-[0.5px] bg-[#EEEEEE] h-[102px] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none ${
              errors.professionalBio ? 'border-red-500' : 'border-[#000000CC]'
            }`}
          />
          {errors.professionalBio && (
            <p className="text-red-500 text-sm mt-1">{errors.professionalBio}</p>
          )}
        </div>
      </div>
    </>
  );
}