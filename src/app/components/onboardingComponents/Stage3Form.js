'use client'
import { useState } from 'react';

export default function Stage3Form({ formData, handleInputChange, errors = {} }) {
  const [portfolioFiles, setPortfolioFiles] = useState([]);
  const [filePreview, setFilePreview] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setPortfolioFiles(files);
    
    const previews = files.map(file => {
      if (file.type.startsWith('image/')) {
        return URL.createObjectURL(file);
      }
      return null;
    });
    setFilePreview(previews);

    handleInputChange({
      target: {
        name: 'portfolioFiles',
        value: files
      }
    });
  };

  const removeFile = (index) => {
    const newFiles = portfolioFiles.filter((_, i) => i !== index);
    const newPreviews = filePreview.filter((_, i) => i !== index);
    
    setPortfolioFiles(newFiles);
    setFilePreview(newPreviews);
    
    handleInputChange({
      target: {
        name: 'portfolioFiles',
        value: newFiles
      }
    });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold tracking-[-0.04em] leading-none text-gray-900 mb-8 max-sm:text-xl max-sm:mb-6 max-sm:px-4">
        Service Setup
      </h2>

      <div className="space-y-8 max-sm:space-y-6 max-sm:px-2">
        
        {/* SECTION 1: BASIC SERVICE INFORMATION */}
        <div className="bg-[#EFEFEF] p-6 rounded-lg max-sm:p-4">
          <p className="text-lg font-bold text-[#454545] tracking-[-0.04em] leading-none text-gray-800 mb-4 max-sm:text-base max-sm:mb-3">
            Basic Service Information
          </p>
          
          <div className="space-y-4 max-sm:space-y-3">
            {/* Row 1 */}
            <div className="flex gap-4 flex-row items-center w-full max-lg:flex-col max-lg:items-stretch">
              <div className="flex-1 max-lg:w-full">
                <input
                  type="text"
                  name="serviceTitle"
                  value={formData.serviceTitle || ''}
                  onChange={handleInputChange}
                  placeholder="Service Title"
                  className={`w-full px-4 py-3 border-1 h-[60px] leading-none italic tracking-[-0.04em] text-[#45454599] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm ${
                    errors.serviceTitle ? 'border-red-500' : 'border-[#00000080]'
                  }`}
                />
                {errors.serviceTitle && (
                  <p className="text-red-500 text-sm mt-1 max-sm:text-xs">{errors.serviceTitle}</p>
                )}
              </div>

              <div className="max-lg:w-full">
                <select
                  name="category"
                  value={formData.category || ''}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-1 h-[60px] leading-none italic text-[#45454599] tracking-[0.04em] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm ${
                    errors.category ? 'border-red-500' : 'border-[#00000080]'
                  }`}
                >
                  <option value="">Category</option>
                  <option value="design">Design & Creative</option>
                  <option value="development">Development & IT</option>
                  <option value="writing">Writing & Translation</option>
                  <option value="marketing">Marketing & Sales</option>
                  <option value="business">Business & Consulting</option>
                  <option value="video">Video & Animation</option>
                  <option value="music">Music & Audio</option>
                  <option value="other">Other</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1 max-sm:text-xs">{errors.category}</p>
                )}
              </div>

              <div className="max-lg:w-full">
                <select
                  name="subcategory"
                  value={formData.subcategory || ''}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 tracking-[-0.04em] h-[60px] text-[#45454599] italic leading-none border-1 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm ${
                    errors.subcategory ? 'border-red-500' : 'border-[#00000080]'
                  }`}
                >
                  <option value="">Subcategory</option>
                  <option value="web-design">Web Design</option>
                  <option value="logo-design">Logo Design</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="seo">SEO Services</option>
                  <option value="content-writing">Content Writing</option>
                  <option value="other">Other</option>
                </select>
                {errors.subcategory && (
                  <p className="text-red-500 text-sm mt-1 max-sm:text-xs">{errors.subcategory}</p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <input
                type="text"
                name="shortTagline"
                value={formData.shortTagline || ''}
                onChange={handleInputChange}
                placeholder="Short Tagline (Optional)"
                className="w-1/2 px-4 py-3 border-1 h-[60px] border-[#00000080] italic text-[#45454599] leading-none tracking-[-0.04em] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-lg:w-full max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm"
              />
            </div>

            {/* Row 3 */}
            <div>
              <textarea
                name="serviceDescription"
                value={formData.serviceDescription || ''}
                onChange={handleInputChange}
                placeholder="Describe your service in details"
                rows={5}
                className={`w-full px-4 py-3 border-1 rounded-lg h-[130px] leading-none italic text-[#45454599] tracking-[-0.04em] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none max-sm:h-[100px] max-sm:px-3 max-sm:py-2 max-sm:text-sm ${
                  errors.serviceDescription ? 'border-red-500' : 'border-[#00000080]'
                }`}
              />
              {errors.serviceDescription && (
                <p className="text-red-500 text-sm mt-1 max-sm:text-xs">{errors.serviceDescription}</p>
              )}
            </div>

            {/* Row 4 */}
            <div>
              <input
                type="text"
                name="keywords"
                value={formData.keywords || ''}
                onChange={handleInputChange}
                placeholder="Add Keywords or Tags (comma separated)"
                className={`w-1/2 px-4 py-3 border-1 h-[60px] rounded-lg leading-none tracking-[-0.04em] text-[#45454599] italic focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-lg:w-full max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm ${
                  errors.keywords ? 'border-red-500' : 'border-[#00000080]'
                }`}
              />
              {errors.keywords && (
                <p className="text-red-500 text-sm mt-1 max-sm:text-xs">{errors.keywords}</p>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 2: SKILLS & EXPERTISE */}
        <div className="bg-[#EFEFEF] p-6 rounded-lg max-sm:p-4">
          <p className="text-lg font-semibold text-gray-800 leading-none tracking-[-0.04em] text-[#454545] font-[32px] mb-4 max-sm:text-base max-sm:mb-3">
            Skills & Expertise
          </p>
          
          <div className="flex items-center gap-4 max-lg:flex-col max-lg:items-stretch">
            <div className="flex-1 max-lg:w-full">
              <input
                type="text"
                name="skills"
                value={formData.skills || ''}
                onChange={handleInputChange}
                placeholder="Add Skills (comma separated)"
                className={`w-full px-4 py-3 border-1 h-[60px] rounded-lg text-[#45454599] italic leading-none tracking-[-0.04em] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm ${
                  errors.skills ? 'border-red-500' : 'border-[#00000080]'
                }`}
              />
              {errors.skills && (
                <p className="text-red-500 text-sm mt-1 max-sm:text-xs">{errors.skills}</p>
              )}
            </div>

            <div className="max-lg:w-full">
              <select
                name="skillLevel"
                value={formData.skillLevel || ''}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border h-[60px] rounded-lg focus:ring-2 text-[#45454599] leading-none tracking-[-0.04em] italic focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm ${
                  errors.skillLevel ? 'border-red-500' : 'border-[#00000080]'
                }`}
              >
                <option value="">Skill Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              {errors.skillLevel && (
                <p className="text-red-500 text-sm mt-1 max-sm:text-xs">{errors.skillLevel}</p>
              )}
            </div>

            <div className="max-lg:w-full">
              <input
                type="text"
                name="experience"
                value={formData.experience || ''}
                onChange={handleInputChange}
                placeholder="Experience (Years)"
                className={`w-full px-4 py-3 border h-[60px] rounded-lg focus:ring-2 leading-none text-[#45454599] tracking-[-0.04em] focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm ${
                  errors.experience ? 'border-red-500' : 'border-[#00000080]'
                }`}
              />
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1 max-sm:text-xs">{errors.experience}</p>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 3: PRICING & PACKAGES */}
        <div className="bg-[#EFEFEF] p-6 rounded-lg max-sm:p-4">
          <p className="text-lg font-bold text-[#454545] leading-none tracking-[-0.04em] mb-4 max-sm:text-base max-sm:mb-3">
            Pricing & Packages
          </p>
          
          <div className="space-y-6 max-sm:space-y-4">
            {/* BASIC PACKAGE */}
            <div className="p-4 rounded-lg border border-gray-200 max-sm:p-3">
              <div className="flex items-center gap-4 mb-4 max-lg:flex-col max-lg:items-stretch max-sm:mb-3">
                <div className="flex-1 max-lg:w-full">
                  <input
                    type="text"
                    name="basicPackageName"
                    value={formData.basicPackageName || 'Basic'}
                    onChange={handleInputChange}
                    placeholder="Package Name"
                    className={`w-full px-4 py-3 border rounded-lg h-[60px] italic text-[#45454599] text-sm font-semibold leading-none tracking-[0.04em] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.basicPackageName ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  />
                </div>

                <div className="max-lg:w-full">
                  <input
                    type="text"
                    name="basicPrice"
                    value={formData.basicPrice || ''}
                    onChange={handleInputChange}
                    placeholder="Price ($)"
                    className={`w-full px-4 py-3 border-1 h-[60px] rounded-lg leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.basicPrice ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  />
                </div>

                <div className="max-lg:w-full">
                  <select
                    name="basicDeliveryTime"
                    value={formData.basicDeliveryTime || ''}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-1 rounded-lg h-[60px] leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.basicDeliveryTime ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  >
                    <option value="">Delivery Time</option>
                    <option value="1-day">1 Day</option>
                    <option value="2-days">2 Days</option>
                    <option value="3-days">3 Days</option>
                    <option value="5-days">5 Days</option>
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="1-month">1 Month</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="basicDescription"
                  value={formData.basicDescription || ''}
                  onChange={handleInputChange}
                  placeholder="Describe what's included"
                  rows={3}
                  className={`w-full px-4 py-3 border-1 rounded-lg h-[130px] leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none max-sm:h-[100px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                    errors.basicDescription ? 'border-red-500' : 'border-[#00000080]'
                  }`}
                />
              </div>
            </div>

            {/* CLASSIC PACKAGE */}
            <div className="p-4 rounded-lg border border-gray-200 max-sm:p-3">
              <div className="flex items-center gap-4 mb-4 max-lg:flex-col max-lg:items-stretch max-sm:mb-3">
                <div className="flex-1 max-lg:w-full">
                  <input
                    type="text"
                    name="classicPackageName"
                    value={formData.classicPackageName || 'Classic'}
                    onChange={handleInputChange}
                    placeholder="Package Name"
                    className={`w-full px-4 py-3 border-1 h-[60px] leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.classicPackageName ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  />
                </div>

                <div className="max-lg:w-full">
                  <input
                    type="text"
                    name="classicPrice"
                    value={formData.classicPrice || ''}
                    onChange={handleInputChange}
                    placeholder="Price ($)"
                    className={`w-full px-4 py-3 border-1 h-[60px] leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.classicPrice ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  />
                </div>

                <div className="max-lg:w-full">
                  <select
                    name="classicDeliveryTime"
                    value={formData.classicDeliveryTime || ''}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-1 h-[60px] leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.classicDeliveryTime ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  >
                    <option value="">Delivery Time</option>
                    <option value="1-day">1 Day</option>
                    <option value="2-days">2 Days</option>
                    <option value="3-days">3 Days</option>
                    <option value="5-days">5 Days</option>
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="1-month">1 Month</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="classicDescription"
                  value={formData.classicDescription || ''}
                  onChange={handleInputChange}
                  placeholder="Describe what's included"
                  rows={3}
                  className={`w-full px-4 py-3 border-1 h-[134px] leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none max-sm:h-[100px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                    errors.classicDescription ? 'border-red-500' : 'border-[#00000080]'
                  }`}
                />
              </div>
            </div>

            {/* PREMIUM PACKAGE */}
            <div className="p-4 rounded-lg border border-gray-200 max-sm:p-3">
              <div className="flex items-center gap-4 mb-4 max-lg:flex-col max-lg:items-stretch max-sm:mb-3">
                <div className="flex-1 max-lg:w-full">
                  <input
                    type="text"
                    name="premiumPackageName"
                    value={formData.premiumPackageName || 'Premium'}
                    onChange={handleInputChange}
                    placeholder="Package Name"
                    className={`w-full px-4 py-3 border-1 h-[60px] leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.premiumPackageName ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  />
                </div>

                <div className="max-lg:w-full">
                  <input
                    type="text"
                    name="premiumPrice"
                    value={formData.premiumPrice || ''}
                    onChange={handleInputChange}
                    placeholder="Price ($)"
                    className={`w-full px-4 py-3 border-1 h-[60px] leading-none text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.premiumPrice ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  />
                </div>

                <div className="max-lg:w-full">
                  <select
                    name="premiumDeliveryTime"
                    value={formData.premiumDeliveryTime || ''}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-1 leading-none h-[60px] text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                      errors.premiumDeliveryTime ? 'border-red-500' : 'border-[#00000080]'
                    }`}
                  >
                    <option value="">Delivery Time</option>
                    <option value="1-day">1 Day</option>
                    <option value="2-days">2 Days</option>
                    <option value="3-days">3 Days</option>
                    <option value="5-days">5 Days</option>
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="1-month">1 Month</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="premiumDescription"
                  value={formData.premiumDescription || ''}
                  onChange={handleInputChange}
                  placeholder="Describe what's included"
                  rows={3}
                  className={`w-full px-4 py-3 border-1 leading-none h-[134px] text-[#45454599] text-sm font-semibold tracking-[-0.04em] italic rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none max-sm:h-[100px] max-sm:px-3 max-sm:py-2 max-sm:text-xs ${
                    errors.premiumDescription ? 'border-red-500' : 'border-[#00000080]'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: PORTFOLIO & MEDIA */}
        <div className="bg-[#EFEFEF] border border-blue-200 p-6 rounded-lg max-sm:p-4">
          <p className="text-lg font-bold leading-none tracking-[-0.04em] text-[#454545] mb-4 max-sm:text-base max-sm:mb-3">
            Portfolio & Media
          </p>
          
          <div className="space-y-4 max-sm:space-y-3">
            <div>
              <label className="block text-sm font-semibold text-[#454545] leading-none tracking-[-0.04em] mb-2 max-sm:text-xs max-sm:mb-1.5">
                Choose Files
              </label>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={portfolioFiles.length > 0 ? `${portfolioFiles.length} file(s) selected` : ''}
                  placeholder="Click to browse"
                  onClick={() => document.getElementById('portfolio-upload-browse').click()}
                  className="w-1/2 px-4 py-3 border-1 border-[#00000080] leading-none tracking-[-0.04] h-[60px] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer max-lg:w-full max-sm:h-[50px] max-sm:px-3 max-sm:py-2 max-sm:text-sm"
                />
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="portfolio-upload-browse"
                />
              </div>
            </div>

            <div>
              <textarea
                name="portfolioCaption"
                value={formData.portfolioCaption || ''}
                onChange={handleInputChange}
                placeholder="Short caption or description of the uploaded work"
                rows={5}
                className="w-full px-4 py-3 border-1 border-[#00000080] leading-none tracking-[-0.04] h-[130px] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none max-sm:h-[100px] max-sm:px-3 max-sm:py-2 max-sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* SECTION 5: ADDITIONAL SETTINGS */}
        <div className="bg-[#EFEFEF] p-6 rounded-lg max-sm:p-4">
          <p className="text-lg font-bold text-[#454545] leading-none tracking-[-0.04em] mb-4 max-sm:text-base max-sm:mb-3">
            Additional Settings
          </p>
          
          <div className="space-y-4 max-sm:space-y-3">
            <div>
              <textarea
                name="cancellationPolicy"
                value={formData.cancellationPolicy || ''}
                onChange={handleInputChange}
                placeholder="Cancellation Policy (Optional)"
                rows={4}
                className="w-full px-4 py-3 h-[130px] border-1 border-[#00000080] leading-none tracking-[-0.04] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none max-sm:h-[100px] max-sm:px-3 max-sm:py-2 max-sm:text-sm"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms || false}
                onChange={(e) => handleInputChange({
                  target: {
                    name: 'agreeToTerms',
                    value: e.target.checked
                  }
                })}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-sm text-[#454545] leading-none tracking-[-0.04em] max-sm:text-xs">
                I agree to GeekLink's Terms of Service
                {errors.agreeToTerms && (
                  <span className="text-red-500 ml-1">{errors.agreeToTerms}</span>
                )}
              </label>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}