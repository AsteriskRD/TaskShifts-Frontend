import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const SearchComponent = () => {
  return (
    <div className="md:px-10 sm:px-6 px-4 pt-8 md:flex flex-wrap  items-center gap-30">
      <div className="relative ">
        <FiSearch className="inline ml-2 text-gray-500 absolute left-4 top-3" />
        <input
          className="border-[0.5px] bg-[#E3E3E980] placeholder:pl-10 md:w-lg rounded-xl px-4 py-2 border-[border-[#D8D8DD]]"
          type="search"
          name="search"
          id="search"
          placeholder="Search for a service"
        />
      </div>
      <div className="flex gap-6  py-6 md:py-0 flex-wrap">
        <div className="relative ">
          <LuMapPin className="inline ml-2 text-gray-500 absolute left-4 top-3" />
          <input
            className="border-[0.5px] bg-[#E3E3E980] placeholder:pl-10 md:w-sm rounded-xl px-4 py-2 border-[border-[#D8D8DD]]"
            type="search"
            name="search"
            id="search"
            placeholder="City or Zip Code"
          />
        </div>
        <div>
          <button className="bg-[#003271] rounded-xl px-10 py-2 text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
