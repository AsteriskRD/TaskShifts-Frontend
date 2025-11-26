"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Accordion = ({ quest, text, id, show, setShow }) => {
  const seeShow = (id) => {
    setShow((show) => (show === id ? null : id));
  };

  const isOpen = show === id; 

  return (
    <div className={` ${isOpen && "border border-[#003271]"} flex py-2 bg-white  text-left md:px-18 sm:px-12  px-3 shadow-2xl rounded-2xl items-start space-y-5 justify-between`}>
      <div className="space-y-3">
        <h1 className={`${dmSans.className} text-sm sm:text-base pt-4 font-semibold`}>{quest}</h1>
        <p className={`${dmSans.className} text-xs  sm:text-sm md:text-base text-[#6F6C90]`}>{isOpen && text}</p>
      </div>
      <div className="bg-[#003271] w-6 pl-1 mt-4 aspect-square text-white text-center flex flex-col justify-center rounded-full">
        <div onClick={() => seeShow(id)}>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}{" "}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
