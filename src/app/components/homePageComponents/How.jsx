import React from "react";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import browse from "../../images/browse.png";
import handshake from "../../images/handshake.png";
import card from "../../images/card.png";
import HowCard from "./re-usable-compnents/HowCard";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const infos = [
  {
    id: 1,
    no: 1,
    image: browse,
    title: "Browse and Request",
    para: "Find services near you",
  },
  {
    id: 2,
    no: 2,
    image: handshake,
    title: "Get Matched",
    para: "Choose a trusted provider",
  },
  {
    id: 3,
    no: 3,
    image: card,
    title: "Get It Done",
    para: "Pay & enjoy quality service",
  },
];

const How = () => {
  return (
    <div className=" px-6 sm:px-12 py-10 md:px-40">
      <div>
        <h1 data-aos="zoom-out-up"
          className={`${poppins.className} text -black text-center text-3xl font-bold`}
        >
          How <span className="text-[#FF6815]">TaskShift</span> Works
        </h1>
        <p className={`${inter.className} py-4 text-center text-base`}>
          Thre simple steps to connect with the right service provide
        </p>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className="md:grid hidden py-12  grid-cols-3 gap-10">
        {
            infos.map((info) => (
                <div className="min-w-[300px] " key={info.id}>
                <HowCard image={info.image} no={info.no} title={info.title} para={info.para}/>
                </div>
            ))
        }
      </div>
      <div className="md:hidden flex overflow-x-scroll py-12  grid-cols-3 gap-10">
        {
            infos.map((info) => (
                <div className="min-w-[300px] " key={info.id}>
                <HowCard image={info.image} no={info.no} title={info.title} para={info.para}/>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default How;
