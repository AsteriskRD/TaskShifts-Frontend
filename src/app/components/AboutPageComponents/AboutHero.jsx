import React from "react";
import youth from "../../images/youth.png";
import { Inter, Poppins } from "next/font/google";
import Button from "../globalComponents/Button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutHero = () => {
  return (
    <div
      className="bg-cover mt-24 relative bg-no-repeat bg-top h-screen"
      style={{ backgroundImage: `url(${youth.src})` }}
    >
      <div className="bg-black/35 flex flex-col justify-center h-full absolute inset-0 ">
        <h1
          className={`${poppins.className} text-center font-bold sm:text-2xl text-xl md:text-4xl text-white  py-3`}
        >
          Connecting Skills, Empowering People
        </h1>
        <p
          className={`${inter.className} text-center text-sm md:text-base text-white px-10`}
        >
          At Taskshift we believe in bridging the gap between those who <br />{" "}
          need help and those who can offer it safely, quickly and efficiently
        </p>
        <div className="text-center py-10">
           
            <button className="bg-[#003271] text-white py-2 px-3 rounded-md ">Join the GigLink Network</button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
