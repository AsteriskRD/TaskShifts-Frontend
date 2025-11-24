import React from "react";
import handshaketwo from "../../images/handshaketwo.png";
import Image from "next/image";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const WantToKnowMore = () => {
  return (
    <div
      className={`${poppins.className}  py-10 px-4 md:px-10 `}
    >
      <div className="md:flex justify-between w-full items-center md:gap-45">
        <div className="w-full">
          <Image width={500} className="w-full" src={handshaketwo} alt="handshaketwo" />
        </div>
        <div data-aos="flip-left" className="">
          <h1 className="font-bold text-2xl">
            Want to know more about{" "}
            <span className="text-[#FF6815]">TaskShift?</span>{" "}
          </h1>
          <p className="text-base text-[#5C5C66]  pt-6">
            At TaskShift, we are redefining how people find, hire, and grow
            within the service economy.
          </p>
          <p className="text-base text-[#5C5C66] ">
            We understand the everyday challenges that clients and service
            providers face from struggling to find trusted professionals, to
            small businesses finding it hard to get consistent leads or manage
            bookings efficiently. TaskShift was created to bridge that gap
          </p>
            <p className="py-6 text-[#5C5C66] text-base">
            Our platform connects residential clients (like homeowners and
            renters) and business clients (like SMEs, event organizers, and
            offices) with verified, reliable service providers across multiple
            industries, all in one place. But we go beyond just connecting
            people.
          </p>
        </div>
      </div>
      <div data-aos="fade-right" className="md:flex justify-between w-full">
        <div className="flex flex-col">
            <div className="py-5">
                <button className="bg-[#FF9A63] w-80 md:w-96 font-bold py-1.5 px-3">Our Mission</button>
            </div>
            <p className="text-[#5C5C66] ">To build the most trusted and versatile service marketplace that empowers clients to find quality services easily and helps providers expand their business with confidence</p>
        </div>
        <div className="flex flex-col">
            <div className="py-5">
                <button className="bg-[#FF9A63] w-80 md:w-96 py-1.5 font-bold px-3">Our Vision</button>
            </div>
            <p className="text-[#5C5C66]">To build the most trusted and versatile service marketplace that empowers clients to find quality services easily and helps providers expand their business with confidence.</p>
        </div>
      </div>
    </div>
  );
};

export default WantToKnowMore;
