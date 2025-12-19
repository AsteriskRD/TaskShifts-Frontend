import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const Available = () => {
  return (
    <div className="md:px-10 sm:px-6  flex items-center justify-between px-4 py-4">
      <div>
        <h1 className="font-bold md:text-2xl">Available Services</h1>
        <p className="text-xs md:text-sm">Showing 9 trusted service providers</p>
      </div>
      <div className="border border-[#8A8A99] relative p-2 rounded-md">
        <select className="text-sm md:text-sm" name="popular" id="polpular">
          <option  value="popular">Most Popular</option>
        </select>
      </div>
    </div>
  );
};

export default Available;
