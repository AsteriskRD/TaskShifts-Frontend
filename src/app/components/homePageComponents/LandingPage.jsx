import React from "react";
// import handshake from "../../images/delivery.png";
// import landingone from "../../images/landingone.png";
// import landingtwo from "../../images/landingtwo.png";
// import landingfour from "../../images/landingfour.png";
// import landingfive from "../../images/landingfive.png";
import landinglast from "../../images/landingpage.png";
import Image from "next/image";
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

// const bgImages = [
//   {
//     id: 1,
//     img: landingone,
//   },
//   {
//     id: 2,
//     img: landingtwo,
//   },
//   {
//     id: 3,
//     img: handshake,
//   },
//   {
//     id: 4,
//     img: landingfour,
//   },
//   {
//     id: 5,
//     img: landingfive,
//   },
//   {
//     id: 6,
//     img: landinglast,
//   },
// ];
const LandingPage = () => {
  return (
    <div className={`${poppins.className} z-0 max-w-7xl mx-auto relative pt-24 w-full`}>
      <section className="relative w-full h-[75vh] overflow-hidden">
       <Image width={400}  src={landinglast} alt="img" className="w-full h-full object-center"/>
        <div className="absolute space-y-4 pb-16 z-0 inset-0 bg-black/50  flex text-center flex-col sm:px-10 px-5 md:px-50 justify-center items-center pt-26 ">
          <h1  className=" md:px-20 px-10 font-bold text-white sm:text-2xl text-xl md:text-4xl text-center ">
            Find Trusted{" "}
            <span className="text-[#FF6815]">Service Providers</span> for Your
            Home or Business
          </h1>
          <p
            className={`font-light  ${inter.className} text-center text-base md:text-base text-[#FFFFFF]`}
          >
            Hire or get hired in one seamless platform built for clients and
            service providers
          </p>

          <div className="flex space-y-4  gap-2 md:gap-4">
            <Button className="cursor-pointer md:text-base text-xs" variant="secondary" size="lg">
              Find a Service
            </Button>
            <Button className="cursor-pointer md:text-base text-xs" variant="primary" size="lg">
              Become a Provider
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
