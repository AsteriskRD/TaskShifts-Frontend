import Image from "next/image";
import React from "react";
// import { CiStar } from "react-icons/ci";
import { Poppins } from "next/font/google";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const WhatOurUserComp = ({ user }) => {
  return (
    <div className="text-center bg-white p-4 h-80 flex flex-col justify-center rounded-md">
      <div className="flex relative justify-center mb-4">
        <Image
          src={user.img}
          alt="img"
          className="w-[100px] border-2 border-[#002A5E] h-[100px] rounded-full"
        />
        <div className="bg-[#003271] absolute bottom-0 right-10 rounded-full w-12 aspect-square flex justify-center items-center">
          <FaQuoteRight
            className="text-white"
            size={30}
          />
        </div>
      </div>

      <div>
        <p className={`${poppins.className} text-[#868686] text-xs sm:text-sm`}>
          {user.desc}
        </p>
        <div className="flex justify-center text-yellow-400 my-2">
          <FaStar size={15} />
          <FaStar size={15} />
          <FaStar size={15} />
          <FaStar size={15} />
          <FaStar size={15} />
        </div>
        <h1 className="font-semibold text-[#050505]">{user.name}</h1>
        <p className="text-[#868686]">{user.role}</p>
      </div>
    </div>
  );
};

export default WhatOurUserComp;
