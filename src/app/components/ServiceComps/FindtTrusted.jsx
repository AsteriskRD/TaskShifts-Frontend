import React from "react";
import { DM_Sans, Poppins } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const FindtTrusted = () => {
  return (
    <div
      className={` pt-22 pb-10 px-6 sm:px-12 md:px-10 max-w-[1440px] mx-auto `}
    >
      <div className="bg-[#003271] text-white space-y-2">
        <div className="p-8">
          <h1 className={` ${dm_sans.className} sm:text-xl text-lg md:text-2xl font-bold `}>
            Find Trusted Service Providers Near You
          </h1>
          <p className={` ${poppins.className} text-xs md:text-sm font-extralight`}>
            Help users quickly find what they are looking for
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindtTrusted;
