import { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Stage2Form({ formData, handleInputChange, errors = {} }) {
  const [idPreview, setIdPreview] = useState(null);
  const [certPreview, setCertPreview] = useState(null);
  const idInputRef = useRef(null);
  const certInputRef = useRef(null);

  const handleIdClick = () => {
    idInputRef.current?.click();
  };

  const handleCertClick = () => {
    certInputRef.current?.click();
  };

  const handleIdChange = (e) => {
    const file = e.target.files && e.target.files[0];
    
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      const customEvent = {
        target: {
          name: 'governmentId',
          value: file
        }
      };
      handleInputChange(customEvent);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCertChange = (e) => {
    const file = e.target.files && e.target.files[0];
    
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      const customEvent = {
        target: {
          name: 'professionalCert',
          value: file
        }
      };
      handleInputChange(customEvent);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const UserIcon = () => (
    <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );

  return (
    <>
      <h2 className="text-[32px] font-semibold text-[#454545] leading-none mb-4 tracking-[-0.04em] 
                     max-sm:text-[24px] max-sm:px-4 max-sm:mb-3">
        Document Verification
      </h2>

      <div className="space-y-6 w-[650px] h-[512px] mx-auto items-center justify-center
                      max-lg:w-full max-lg:h-auto max-lg:px-6 max-lg:space-y-5
                      max-sm:px-4 max-sm:space-y-4">
        {/* ID Verification */}
        <div>
          <label className="block text-[20px] font-semibold text-[#454545] tracking-[-0.04em] leading-none mb-3
                           max-sm:text-[16px] max-sm:mb-2">
            ID Verification <span className="text-red-500">*</span>
          </label>
          <div 
            onClick={handleIdClick}
            className={`border-2 border-dashed h-[170px] rounded-lg py-10 px-6 cursor-pointer transition-colors 
                       max-sm:h-auto max-sm:py-6 max-sm:px-4
                       ${
              errors.governmentId 
                ? 'border-red-500 bg-red-50' 
                : idPreview 
                ? 'border-green-500 bg-[#EEEEEE]' 
                : 'border-gray-300 bg-[#EEEEEE] hover:bg-gray-100'
            }`}
          >
            <input
              ref={idInputRef}
              type="file"
              accept="image/*,.pdf"
              onChange={handleIdChange}
              className="hidden"
            />
            
            <div className="flex items-center px-10 gap-4
                           max-lg:px-4 max-lg:gap-3
                           max-sm:px-2 max-sm:gap-3">
              <div className="w-14 h-14 rounded-full bg-[#EEEEEE] border border-gray-300 flex items-center justify-center flex-shrink-0
                             max-sm:w-12 max-sm:h-12">
                {idPreview ? (
                  <CheckCircle className="w-6 h-6 text-green-600 max-sm:w-5 max-sm:h-5" />
                ) : (
                  <UserIcon />
                )}
              </div>
              
              <div className="flex flex-col text-left min-w-0">
                <p className="text-[20px] font-semibold text-[#454545] leading-tight
                             max-sm:text-[16px]">
                  {idPreview ? 'Government ID Uploaded' : 'Upload Government ID'}
                </p>
                <p className="text-[16px] tracking-[-0.04em] leading-tight text-[#45454599] mt-1.5
                             max-sm:text-[13px] max-sm:mt-1">
                  {idPreview ? 'Click to change' : 'click to browse'}
                </p>
              </div>
            </div>
          </div>
          {errors.governmentId && (
            <p className="text-red-500 text-sm mt-2 max-sm:text-xs">{errors.governmentId}</p>
          )}
        </div>

        {/* Certification */}
        <div>
          <label className="block text-[20px] tracking-[-0.04em] leading-none font-semibold text-[#454545] mb-3
                           max-sm:text-[16px] max-sm:mb-2">
            Certification
          </label>
          <div 
            onClick={handleCertClick}
            className={`border-2 border-dashed rounded-lg py-10 h-[170px] px-6 cursor-pointer transition-colors 
                       max-sm:h-auto max-sm:py-6 max-sm:px-4
                       ${
              errors.professionalCert 
                ? 'border-red-500 bg-red-50' 
                : certPreview 
                ? 'border-green-500 bg-[#EEEEEE]' 
                : 'border-gray-300 bg-[#EEEEEE] hover:bg-gray-100'
            }`}
          >
            <input
              ref={certInputRef}
              type="file"
              accept="image/*,.pdf"
              onChange={handleCertChange}
              className="hidden"
            />
            
            <div className="flex items-center px-10 gap-4
                           max-lg:px-4 max-lg:gap-3
                           max-sm:px-2 max-sm:gap-3">
              <div className="w-14 h-14 rounded-full bg-[#EEEEEE] border border-gray-300 flex items-center justify-center flex-shrink-0
                             max-sm:w-12 max-sm:h-12">
                {certPreview ? (
                  <CheckCircle className="w-6 h-6 text-green-600 max-sm:w-5 max-sm:h-5" />
                ) : (
                  <UserIcon />
                )}
              </div>
              
              <div className="flex flex-col text-left min-w-0">
                <p className="text-[20px] font-semibold text-[#454545] leading-tight
                             max-sm:text-[16px]">
                  {certPreview ? 'Professional Certification Uploaded' : 'Upload Professional Certification'}
                </p>
                <p className="text-[16px] tracking-[-0.04em] leading-tight text-[#45454599] mt-1.5
                             max-sm:text-[13px] max-sm:mt-1">
                  {certPreview ? 'Click to change' : 'Click to browse'}
                </p>
              </div>
            </div>
          </div>
          {errors.professionalCert && (
            <p className="text-red-500 text-sm mt-2 max-sm:text-xs">{errors.professionalCert}</p>
          )}
        </div>
      </div>
    </>
  );
}