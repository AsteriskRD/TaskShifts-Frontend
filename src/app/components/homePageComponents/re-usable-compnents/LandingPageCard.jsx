import React from "react";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LandingPageCard = ({ num, head, text }) => {
  return (
    <div className="flex border border-[#003271] md:px-12 rounded-md p-4 items-center gap-6 ">
      <div
        className="bg-[#003271] text-white font-bold rounded-full 
                w-8 md:w-9 aspect-square 
                flex items-center flex-none justify-center text-sm"
      >
        {num}
      </div>

      <div>
        <h1
          className={`${poppins.className} text-[#060D23] text-lg font-extrabold `}
        >
          {head}
        </h1>
        <h1 className={`${inter.className} text-[#64748B] text-sm`}>{text}</h1>
      </div>
    </div>
  );
};

export default LandingPageCard;
