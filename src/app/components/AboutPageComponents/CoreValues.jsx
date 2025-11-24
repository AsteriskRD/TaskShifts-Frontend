import React from "react";
import people from "../../images/people.png";
import hand from "../../images/hand.png";
import speed from "../../images/speed.png";
import innovation from "../../images/innovation.png";
import WhyCard from "../homePageComponents/re-usable-compnents/WhyCard";

const prods = [
  {
    id: 1,
    icon: hand,
    title: "Trust & Transparency",
    para: "All service providers are background checked and verified for your safety and peace of mind",
  },
  {
    id: 2,
    icon: speed,
    title: "Speed & Efficiency",
    para: "Your payment are protected with industry standard encryption and secure processing",
  },
  {
    id: 3,
    icon: innovation,
    title: "Innovation & Simplicity",
    para: "Book services in minutes with our simple and intuitive booking system",
  },
  {
    id: 4,
    icon: people,
    title: "People First",
    para: "Our customer support team is always ready to help you whenever you need assitance",
  },
];
const CoreValues = () => {
  return (
    <div className="px-6 sm:px-12 md:px-10 bg-[#E7EAF3]">
    <div className="text-center pt-14">
          <h1 className="font-bold text-2xl">
        Our Core  
        <span className="text-[#FF6815]"> Values</span>{" "}
      </h1>
      <p className="pt-4 text-sm">The principles that guide everything we do at Taskshift</p>
    </div>

      <div>
        <div
          data-aos="fade-up-right"
          className="md:grid hidden py-10  grid-cols-4 gap-6"
        >
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
    </div>
  );
};

export default CoreValues;
