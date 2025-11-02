import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { DM_Sans } from "next/font/google";
import { Poppins } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Popularcomponents = ({ item }) => {
  return (
    <div className="">
      <div>
        <Image className="rounded-t-md" alt="img" src={item.img} />
      </div>
      <div className="bg-white space-y-2 p-4">
        <h1 className={`${dm_sans.className} font-bold text-[20px]`}>
          {item.title}
        </h1>
        <p
          className={`${poppins.className} text-[#737380] font-medium text-sm`}
        >
          {item.desc}
        </p>
      </div>
      <div className="flex p-4 bg-white justify-between py-4">
        <div className="bg-[#F1A008] text-white flex gap-1 items-center rounded-md px-3">
          <CiStar className="text-white" size={20} /> <span>{item.rating}</span>
        </div>
        <div>
          <button className="bg-[#003271] rounded-full text-white px-3 py-1.5">
            {item.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popularcomponents;
