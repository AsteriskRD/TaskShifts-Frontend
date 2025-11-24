import React from "react";
import { Inter, Poppins } from "next/font/google";
import LandingPageCard from "./re-usable-compnents/LandingPageCard";
import Image from "next/image";
import smiling from "../../images/smilingirl.png";

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

const OnePlatform = () => {
  return (
    <div className="px-6 relative sm:px-12 md:px-10">
     <div>
         <div>
        <h1
          data-aos="flip-left"
          className={`${poppins.className} text-black text-center text-3xl font-bold pt-14 pb-6`}
        >
          {" "}
          <span className="text-[#FF6815]">One</span> Platform,{" "}
          <span className="text-[#FF6815]">Two</span> Paths, Hire or Get Hired
        </h1>
        <p className={`${inter.className} pb-4 text-center text-base`}>
          Whether you are looking for trusted professionals or new talent,{" "}
          <br />
          grow , TaskShift brings you together safely
        </p>
      </div>
      <div className="">
        <div className="md:flex gap-40 justify-between  py-14 ">
          <div className=" block md:hidden ">
            <Image
              data-aos="zoom-in-down"
              className="object contain "
              alt="handshake"
              src={smiling}
              width={500}
              height={500}
            />
          </div>
          <div className="md:flex hidden flex-col">
            <h1
              className={`font-extrabold text-black text-3xl ${poppins.className}`}
            >
              For <span className="text-[#FF6815]">Clients</span>
            </h1>
            <p
              className={`font-light text-sm text-black py-3 ${inter.className}`}
            >
              Get Things Done Fast!
            </p>
            <div className="w-full">
              <div className="">
                {cards.map((card) => (
                  <div className="bg-white rounded-md py-1 my-1" key={card.id}>
                    <LandingPageCard
                      num={card.no}
                      head={card.intro}
                      text={card.desc}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex md:hidden pt-10 flex-col">
            <h1
              className={`font-extrabold text-black text-3xl ${poppins.className}`}
            >
              For <span className="text-[#FF6815]">Clients</span>
            </h1>
            <p
              className={`font-light text-sm text-black py-3 ${inter.className}`}
            >
              Get Things Done Fast!
            </p>
            <div className="w-full">
              <div className="">
                {cards.map((card) => (
                  <div className="bg-white rounded-md py-1 my-1" key={card.id}>
                    <LandingPageCard
                      num={card.no}
                      head={card.intro}
                      text={card.desc}
                    />
                    
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" md:block hidden ">
            <Image
              data-aos="zoom-in-down"
              className="object contain "
              alt="handshake"
              src={smiling}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default OnePlatform;
