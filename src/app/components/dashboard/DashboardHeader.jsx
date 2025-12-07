import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePortrait } from "react-icons/md";

const DashboardHeader = () => {
  return (
    <div className="flex items-center gap-10 ">
      <div>
        <div className="flex relative items-center gap-2">
          <input
            className="p-2 bg-white placeholder:text-[#969BA0] rounded-md w-96 border border-gray-300"
            type="search"
            name="search"
            id="search"
            placeholder="Search here... "
          />
          <span className="absolute right-4">
            <AiOutlineSearch size={20} />
          </span>
        </div>
      </div>
      <div className="flex relative bg-[#2D9CDB26] rounded-md text-[#2D9CDB] p-1 gap-4">
        <FaRegBell size={25} />
        <div className="bg-[#2D9CDB] rounded-full w-4 aspect-square text-center text-xs text-white -right-2 top-0 absolute">
          2
        </div>
      </div>
      <div className="flex relative bg-[#2D9CDB26] rounded-md text-[#2D9CDB] p-1 gap-4">
        <MdOutlineMessage size={25} />
         <div className="bg-[#2D9CDB] rounded-full w-4 aspect-square text-center text-xs text-white -right-2 top-0 absolute">
          2
        </div>
      </div>
      <div className="flex relative bg-[#5E6C9326] rounded-md text-[#5E6C93] p-1 gap-4">
        <MdDeleteOutline size={25} />
          <div className="bg-[#5E6C93] rounded-full w-4 aspect-square text-center text-xs text-white -right-2 top-0 absolute">
          2
        </div>
      </div>
      <div className="flex relative bg-[#FF5B5B26] rounded-md text-[#FF5B5B] p-1 gap-4">
        <IoSettingsOutline size={25} />
          
          <div className="bg-[#FF5B5B] rounded-full w-4 aspect-square text-center text-xs text-white -right-2 top-0 absolute">
          2
        </div>
      </div>
      <div className="border-x- border-y-12 border-[#77797D] border-2"></div>
      <div className="flex items-center gap-10">
        <div>
          <h1>
            Hello, <span>Mercy Smith</span>
          </h1>
        </div>
        <div className="bg-[#003271] rounded-full w-12 flex flex-col pl-2.5 justify-center aspect-square text-center">
          <MdOutlinePortrait size={25} />{" "}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
