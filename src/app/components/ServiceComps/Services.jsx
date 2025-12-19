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
    <div className="bg-white w-full p-3 rounded-xl ">
      <div>
        <Image className="w-full" src={props.image} alt={props.name} />
      </div>
      <h1 className="font-bold text-xs md:text-base text-black py-1">{props.service}</h1>
      <h1 className="text-[#737380] text-xs md:text-sm">
        By <span>{props.name}</span>
      </h1>
      <div className="flex py-2 gap-2 text-xs  md:text-sm justify-betweenn items-center">
        {" "}
        <h1 className="bg-[#F1A008] flex gap-1 items-center text-white rounded-md py-1 px-2">
          <CiStar size={20} /> {props.rating}{" "}
        </h1>
        <span className="md:text-sm text-xs">{props.reviews} reviews</span>
      </div>
      <h1 className="flex py-1 font-bold justify-between text-xs md:text-sm">
        From <span className="text-[#D9291E] font-bold">{props.price}</span>
      </h1>
      <h1 className="md:text-sm text-xs font-bold">{props.location}</h1>
    </div>
  );
};

export default Services;
