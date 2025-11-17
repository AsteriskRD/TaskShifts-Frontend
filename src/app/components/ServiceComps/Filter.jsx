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
    <div className="px-10 mr-18">
      <div>
        <div className="bg-white rounded-md flex gap-10 text-black py-3 px-8">
          <div className="border flex items-center gap-5 px-4 py-1 rounded-md border-[#D8D8DD]">
            <p className="font-extralight">Filter by Category</p>
            <FaAngleDown />
          </div>
          <div className="border flex items-center gap-5 px-4 py-1 rounded-md  border-[#D8D8DD]">
            <p>Filter by Location</p>
            <FaAngleDown />
          </div>
          <div className="border flex items-center gap-5 px-4 py-1 rounded-md  border-[#D8D8DD]">
            <p>Filter by Price range</p>
            <FaAngleDown />
          </div>
          <div className="border flex items-center gap-5 px-4 py-1 rounded-md  border-[#D8D8DD]">
            <p>Filter by Availability</p>
            <FaAngleDown />
          </div>
        </div>
        <div className="bg-[#B4B4C280] flex my-12 py-3 mx-auto w-1/2 relative items-center gap-3 px-4 rounded-full">
            <FiSearch />
          <p className={`${inter.className} text-[#505057]`}>What service are you looking for?</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
