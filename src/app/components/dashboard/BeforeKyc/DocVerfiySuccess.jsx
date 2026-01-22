"use client";
import React from "react";
import { Poppins, DM_Sans } from "next/font/google";
import { FaCheck } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
}); 


const DocSuccessModal = ({ onContinue }) => {
  return (
    <div  className="flex items-center justify-center min-h-screen bg-accent-50 px-4">
      <div
        className="bg-white w-full max-w-md md:max-w-2xl 
        p-6 md:p-12 lg:p-16 
        rounded-2xl shadow-lg 
        flex flex-col items-center text-center gap-6"
      >
        <h1 className={`${dm_sans.className} text-base md:text-lg`}>
          Documents Verification Successful!
        </h1>

        <div className="bg-[#CBAD16] flex items-center justify-center rounded-full w-12 h-12">
          <div className="bg-[#156A15]  flex flex-col justify-center pl-2 rounded-full w-12 aspect-square">
            <FaCheck size={30} className="text-white " />
          </div>
        </div>

        <p className={`${poppins.className} text-sm text-[#737380]`}>
          Your Document has been verified successfully!
        </p>

        <div className="w-full">
          <button onClick={onContinue} className="bg-[#003271] text-white w-full cursor-pointer py-2 rounded-full">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocSuccessModal;
