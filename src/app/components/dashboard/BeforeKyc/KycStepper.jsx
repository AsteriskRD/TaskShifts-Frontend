"use client";
import React, { useState } from "react";

const KycStepper = ({ currentStep }) => {
  const steps = [
    { id: 1, title: "Personal Information" },
    { id: 2, title: "Document Verification" },
    { id: 3, title: "Service Setup" },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          const isCompleted = currentStep > index;

          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
    
              <div className="flex items-center w-full">
                
                {index > 0 && (
                  <div
                    className={`h-1 flex-1 ${
                      isCompleted ? "bg-[#003271]" : "bg-gray-300"
                    }`}
                  ></div>
                )}

                
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium mx-2
                  ${
                    isActive
                      ? "bg-[#003271] text-white"
                      : isCompleted
                      ? "bg-[#003271] text-white"
                      : "border border-gray-300 text-gray-400"
                  }
                `}
                >
                  {index + 1}
                </div>

                
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 ${
                      currentStep > index ? "bg-[#003271]" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>

          
              <p className="mt-3 text-center text-xs sm:text-sm md:text-base leading-tight">
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KycStepper;
