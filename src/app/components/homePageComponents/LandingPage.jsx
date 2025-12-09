"use client";
import React from "react";
// import handshake from "../../images/delivery.png";
// import landingone from "../../images/landingone.png";
// import landingtwo from "../../images/landingtwo.png";
import landingfour from "../../images/plumber.png";
// import landingfive from "../../images/landingfive.png";
import landinglast from "../../images/landingpage.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import Button from "../globalComponents/Button";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const LandingPage = () => {
  const router = useRouter();
  return (
    <div
      className={`${poppins.className} px-6 sm:px-12 md:px-10  bg-[#E7EAF3] relative pt-21 w-full`}
    >
      <section className="sm:flex block justify-between items-center w-full">
        <div className="md:w-1/2 space-y-4 flex flex-col  justify-center  ">
          <h1 className="md:pt-10 pt-14 sm:pt-0 font-bold text-[#000000] sm:text-2xl text-xl md:text-5xl ">
            Find Trusted{" "}
            <span className="text-[#FF6815]">Service Providers</span> Near You
          </h1>
          <p
            className={`font-light  ${inter.className} text-base text-[#000000]`}
          >
            Taskshift connects you with verified professionals for your everyday
            needs. Hire or get hired in one seamless platform
          </p>

          <div>
            <div className="flex md:py-6 py-10 gap-4">
            <Button
              onClick={() => {
                router.push("/chooserole");
              }}
              className="cursor-pointer md:text-base text-xs"
              variant="secondary"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              className="cursor-pointer md:text-base text-xs"
              variant="primary"
              size="lg"
            >
              Become a Provider
            </Button>
          </div>
          </div>
        </div>

        <div className=" pt-6 z-0 relative overflow-hidden ">
          <Image
            className="md:w-96 w-72 h-full object-contain object-center"
            src={landingfour}
            alt="landing"
            width={500}
            height={500}
            priority
          />
          <div className="bg-[#FFE1D0] md:w-[400px]  h-[140px] md:h-[180px] w-[300px] rounded-t-4xl absolute bottom-0 left-0 z-[-1]"></div>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default LandingPage;
