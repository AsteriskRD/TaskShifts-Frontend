import React from "react";
import { Inter, Poppins } from "next/font/google";
import LandingPageCard from "./re-usable-compnents/LandingPageCard";
import Image from "next/image";
import confidentwoman from "../../images/confidentwoman.png";
import barb from "../../images/barb.png";
import righti from "../../images/righti.png";

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
    desc: "Tell us about your skills or business, Upload verification documents and add your bank info to receive payments securely",
  },
  {
    id: 2,
    no: "2",
    intro: "Get Leads and Manage Bookings",
    desc: "Receive job requests from clients, respond instantly, and manage your bookings from one easy dashboard.",
  },
  {
    id: 3,
    no: "3",
    intro: "Errand, Grow and Build Trust",
    desc: "Complete jobs, earn securely, and grow your reputation with verified reviews and insights from your analytics dashboard",
  },
  {
    id: 4,
    no: "4",
    intro: "Track Progress",
    desc: "Track progress and see what your client rates you  after service completion",
  },
];

const ServiceProvider = () => {
  return (
    <div className="relative">
      <div className="absolute right-0 bottom-0">
        <Image src={righti} width={350} alt="right decoration" />
      </div>
      <div className="px-6  sm:px-12 md:px-10 pb-36 md:pb-12 ">
        <div className="">
          <div className="md:flex w-full  ">
            <div className=" md:w-1/2">
              <Image
                data-aos="zoom-out-up"
                className="object contain "
                alt="handshake"
                src={barb}
                width={400}
            
              />
            </div>
            <div className="md:flex md:w-1/2 md:pr-20 pr-0  hidden flex-col">
              <h1
                className={`font-extrabold text-black text-3xl ${poppins.className}`}
              >
                For <span className="text-[#FF6815]">Service Providers</span>
              </h1>
              <p
                className={`font-light text-sm text-black py-3 ${inter.className}`}
              >
                Grow Your Business With Ease
              </p>
              <div className="w-full">
                <div className="">
                  {cards.map((card) => (
                    <div
                      className="bg-white rounded-md py-1 my-1"
                      key={card.id}
                    >
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
            <div className="flex pt-8 md:hidden flex-col">
              <h1
                className={`font-extrabold text-black text-3xl ${poppins.className}`}
              >
                For <span className="text-[#FF6815]">Service Providers</span>
              </h1>
              <p
                className={`font-light text-sm text-black py-3 ${inter.className}`}
              >
                Grow Your Business With Ease
              </p>
              <div className="w-full">
                <div className="">
                  {cards.map((card) => (
                    <div
                      className="bg-white rounded-md py-1 my-1"
                      key={card.id}
                    >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
