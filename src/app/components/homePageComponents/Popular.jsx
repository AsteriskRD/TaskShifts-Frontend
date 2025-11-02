import React from "react";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import one from "../../images/popularone.png";
import two from "../../images/populartwo.png";
import three from "../../images/popularthree.png";
import four from "../../images/popularfour.png";
import Popularcomponents from "./re-usable-compnents/Popularcomponents";
import Link from "next/link";
import Button from "../globalComponents/Button";

const items = [
  {
    id: 1,
    img: one,
    title: "Event & Decor",
    desc: "Discover decorators, caterers, and event planners for your special day.",
    btn: "Explore Services",
    rating: "2.8",
  },

  {
    id: 2,
    img: two,
    title: "Home Repairs",
    desc: "Get help from experienced plumbers, electricians, and handymen",
    btn: "Find Provider",
    rating: "3.2",
  },
  {
    id: 3,
    img: three,
    title: "Cleaning & Laundry",
    desc: "Book vetted cleaners for your home, office, or event space.",
    btn: "Book Now",
    rating: "1.8",
  },
  {
    id: 4,
    img: four,
    title: "Logistics & Delivery",
    desc: "Reliable dispatch riders and delivery agents for your errands or business",
    btn: "Request Services",
    rating: "4.8",
  },
];
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Popular = () => {
  return (
    <div className={` bg-gradient-to-r from-[#FFFFFF] to-[#FFE1D0]  py-14 `}>
      <div className="text-center space-y-2 py-2">
        <h1
          className={`${poppins.className}  text-3xl font-extrabold text-[#003271]`}
        >
          Popular Services
        </h1>
        <p className={`text-[#003271] text-sm font-medium ${inter.className}`}>
          Find experts for every need, at home or at work.
        </p>
      </div>
      <div data-aos="fade-right" className="hidden  sm:grid sm:grid-cols-2 px-3 py-3  gap-3 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="mb-10  ">
            <Popularcomponents item={item} />
          </div>
        ))}
      </div>

      <div className="flex overflow-x-scroll gap-3 md:hidden px-3 py-3 ">
        {items.map((item) => (
          <div  key={item.id} className="mb-10 min-w-[300px] ">
            <Popularcomponents item={item} />
          </div>
        ))}
      </div>

      <div className="flex px-3 justify-center gap-4 items-center">
        <div className="md:flex py-6 md:py-0  justify-center gap-2">
          <h1 className={`${poppins.className} text-xs sm:text-sm md:text-base text-[#737380]`}>
            Can’t find what you are looking for?
          </h1>
          <Link
            className={`text-[#0E0E1B] text-xs sm:text-sm md:text-base font-extrabold ${poppins.className}`}
            href="#"
          >
            Browse our full marketplace for verified services
          </Link>
        </div>
        <div>
          <Button
            variant="secondary"
            className="border text-xs sm:text-sm text-[#161617] border-black"
          >
            View all Categories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
