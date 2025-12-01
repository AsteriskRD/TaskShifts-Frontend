export default function ProgressIndicator({ currentStep }) {
  const steps = [
    { number: 1, label: 'Personal Information' },
    { number: 2, label: 'Document Verification' },
    { number: 3, label: 'Service Setup' }
  ];

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-2 min-h-[120px] sm:min-h-[160px] md:h-[197px] bg-[#EEEEEE]">
      <div className="w-full max-w-5xl">
        {/* Line container - spans full width behind circles */}
        <div className="relative flex items-center mb-3">
          {/* Full width background line */}
          <div className="absolute w-full h-0.5 bg-[#000000E5] border-0.5 left-0 right-0 top-6"></div>
          
          {/* Progress line that fills based on current step */}
          <div 
            className="absolute h-1 bg-[#4D4D4D] transition-all duration-300 left-0 top-6"
            style={{ 
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` 
            }}
          ></div>
          
          {/* Steps with circles */}
          <div className="relative flex justify-between w-full z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center flex-1 first:items-start last:items-end">
                {/* Circle */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-semibold text-base sm:text-lg ${
                  currentStep >= step.number 
                    ? 'bg-[#4D4D4D] text-white' 
                    : 'bg-gray-400 text-white'
                }`}>
                  {step.number}
                </div>
                
                {/* Label */}
                <span className={`text-[10px] sm:text-sm mt-2 sm:mt-3 font-medium text-center leading-tight max-w-[70px] sm:max-w-none ${
                  currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}