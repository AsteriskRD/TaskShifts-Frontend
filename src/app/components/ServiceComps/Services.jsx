import React from "react";

import { Poppins, DM_Sans } from "next/font/google";
import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { TbBrandStrava } from "react-icons/tb";
import { TiTimes } from "react-icons/ti";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Services = (props) => {
  return (
   <div className="bg-white w-72 flex flex-col py-6 rounded-xl overflow-hidden">
  <div className="px-3">
    <div className="flex justify-between">
      <div className="flex gap-1">
        <Image
          className="w-8 h-8"
          width={20}
          src={props.img}
          alt={props.title}
        />
        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-xs font-medium whitespace-nowrap">
              {props.name}
            </h1>
            <IoCheckmarkCircle className="text-green-600" size={16} />
          </div>

          <p className="text-[#737380] text-xs pt-1 pb-3">{props.title}</p>
        </div>
      </div>

      <div className="flex gap-1 items-start">
        <div>{props.icon}</div>
        <div
          className={`flex gap-1 items-center py-1.5 px-2 rounded-md ${
            props.status === "Available"
              ? "bg-[#0064001A] text-[#006400]"
              : "bg-[#FF080D4D] text-[#F91115]"
          }`}
        >
          {props.status === "Available" ? <TbBrandStrava /> : <TiTimes />}
          <p className="text-xs whitespace-nowrap">{props.status}</p>
        </div>
      </div>
    </div>
  </div>


  <Image
    src={props.image}
    alt={props.title}
    className="w-full h-40 object-cover rounded-md"
  />

  <div className="px-2 py-4 flex-1 flex flex-col justify-between">
    <div className="flex justify-between">
      <h1 className="text-sm font-medium">{props.service}</h1>
      <button className="bg-[#003271] text-white text-xs rounded-full py-1.5 px-2">
        View Profile
      </button>
    </div>
    <p className="text-[#737380] font-medium text-xs">{props.location}</p>
  </div>

  <div className="flex py-2 px-2 justify-between items-center">
    <div className="bg-[#F1A008] rounded-md py-1 flex px-3 items-center gap-1">
      <CiStar className="text-white" size={18} />
      <h1>{props.rating}</h1>
    </div>
    <h1 className="text-[#D9291E]">₦{props.time}/hr</h1>
  </div>
</div>

  );
};

export default Services;
