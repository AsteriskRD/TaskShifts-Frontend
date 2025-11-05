import React from "react";
import LandingPageCard from "./re-usable-compnents/LandingPageCard";
import handshake from "../../images/handshakeman.png";
import client from "../../images/clientgirl.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cards = [
  {
    id: 1,
    no: "1",
    intro: "Create an account",
    desc: "Sign up in seconds, tell us what you need, and we will match you with trusted providers near you",
  },
  {
    id: 2,
    no: "2",
    intro: "Browse your services",
    desc: "Describe your task or explore verified providers in categories like cleaning, repairs, delivery, and more",
  },
  {
    id: 3,
    no: "3",
    intro: "Hire & Pay securely",
    desc: "Chat, negotiate, and make payments safely through GigLink",
  },
  {
    id: 4,
    no: "4",
    intro: "Track Progress",
    desc: "Track progress and rate your experience after completion",
  },
];
const ForClients = () => {
  return (
    <div className="px-6 sm:px-12 max-w-7xl mx-auto bg-[#003271] md:flex justify-between gap-20 md:px-18 py-14 ">
      <div className="md:flex hidden flex-col">
        <h1
          className={`font-extrabold text-white text-3xl ${poppins.className}`}
        >
          For Clients
        </h1>
        <p className={`font-light text-sm text-white py-3 ${inter.className}`}>
          Get Things Done Fast!
        </p>
        <div className=" flex flex-col">
          {cards.map((card) => (
            <div className="bg-white rounded-md p-4 my-1" key={card.id}>
              <LandingPageCard
                num={card.no}
                head={card.intro}
                text={card.desc}
              />
            </div>
          ))}
        </div>
        <button className="bg-[#FF6815] w-50 my-10 mx-auto text-white px-3 py-1.5 rounded-full">Join as Client</button>
      </div>

      <div className="relative justify-center mx-auto sm:mx-0  flex h-auto w-[200px] md:w-[400px] ">
        <div className="sm:w-[400px] w-[50px] h-[100px]">
          <Image
            className="absolute z-0 object-cover object-center"
            alt="handshake"
            src={handshake}
            width={300}
          />
        </div>
        <div className="">
          <Image
            className="z-20 absolute top-10 md:left-44 right-20 sm:left-56"
            alt="client"
            src={client}
            width={220}
          />
        </div>
      </div>
      <div className="block pt-110 md:pt-130 md:hidden">
        <h1
          className={`font-extrabold text-white text-3xl ${poppins.className}`}
        >
          For Clients
        </h1>
        <p className={`font-light text-sm text-white py-3 ${inter.className}`}>
          Get Things Done Fast!
        </p>
        <div className=" flex flex-col">
          {cards.map((card) => (
            <div className="bg-white rounded-md p-4 my-1" key={card.id}>
              <LandingPageCard
                num={card.no}
                head={card.intro}
                text={card.desc}
              />
            </div>
          ))}
        </div>
        <button className="bg-[#FF6815] w-50 my-10 mx-auto text-white px-3 py-1.5 rounded-full">Join as Client</button>
      </div>
    </div>
  );
};

export default ForClients;
