import React from "react";
import { Poppins, Inter } from "next/font/google";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Filter = () => {
  return (
    <div className="md:px-10 sm:px-6 px-0">
      <div>
        <div className="bg-white rounded-md flex gap-3 sm:gap-5 md:gap-10 text-black py-3 md:px-4 sm:px-6 px-4 overflow-x-auto">
          <div className="border flex items-center gap-2 md:px-6 sm:px-3 px-1 py-1 rounded-md border-[#D8D8DD] flex-shrink-0">
            <p className="text-xs sm:text-sm md:text-base font-extralight">
              Filter by Category
            </p>
            <FaAngleDown />
          </div>
          <div className="border flex items-center gap-5 px-4 py-1 rounded-md border-[#D8D8DD] flex-shrink-0">
            <p className="text-xs sm:text-sm md:text-base">
              Filter by Location
            </p>
            <FaAngleDown />
          </div>
          <div className="border flex items-center gap-5 px-4 py-1 rounded-md border-[#D8D8DD] flex-shrink-0">
            <p className="text-xs sm:text-sm md:text-base">
              Filter by Price range
            </p>
            <FaAngleDown />
          </div>
          <div className="border flex items-center gap-5 px-4 py-1 rounded-md border-[#D8D8DD] flex-shrink-0">
            <p className="text-xs sm:text-sm md:text-base">
              Filter by Availability
            </p>
            <FaAngleDown />
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Filter;
