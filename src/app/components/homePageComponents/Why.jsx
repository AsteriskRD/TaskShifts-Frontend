import React from "react";
import { Poppins, Inter } from "next/font/google";
import WhyCard from "./re-usable-compnents/WhyCard";
import verified from "../../images/verfied.png";
import secure from "../../images/secure.png";
import easy from "../../images/easy.png";
import support from "../../images/support.png";

const prods = [
  {
    id: 1,
    icon: verified,
    title: "Verified Payments",
    para: "All service providers are background checked and verified for your safety and peace of mind",
  },
  {
    id: 2,
    icon: secure,
    title: "Secure Payments",
    para: "Your payment are protected with industry standard encryption and secure processing",
  },
  {
    id: 3,
    icon: easy,
    title: "Easy Booking",
    para: "Book services in minutes with our simple and intuitive booking system",
  },
  {
    id: 4,
    icon: support,
    title: "24/7 Support",
    para: "Our customer support team is always ready to help you whenever you need assitance",
  },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Why = () => {
  return (
    <div 
      className={`bg-[#E7EAF3] px-6 sm:px-12 md:px-10 py-6`}
    >
      <div>
        <h1 data-aos="fade-right"
          className={` ${poppins.className} pt-10 text-black text-center text-3xl font-bold py-10}`}
        >
          Why Choose <span className="text-[#FF6815]">TaskShift</span>
        </h1>
        <p className={`${inter.className} py-4 text-center text-base`}>
          Experience trust, convenience and quality in every interaction
        </p>
      </div>
      <div data-aos="fade-up-right" className="md:grid hidden py-12  grid-cols-4 gap-6">
        {prods.map((prod) => (
          <div className="min-w-[250px]" key={prod.id}>
            <WhyCard icon={prod.icon} title={prod.title} para={prod.para} />
          </div>
        ))}
      </div>
      <div className="flex gap-10 md:hidden py-12 overflow-x-scroll">
        {prods.map((prod) => (
          <div className="min-w-[250px]" key={prod.id}>
            <WhyCard icon={prod.icon} title={prod.title} para={prod.para} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
