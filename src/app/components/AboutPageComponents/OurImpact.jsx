import React from "react";

const impacts = [
  {
    id: 1,
    no: "5000+",
    para: "Booking Completed",
  },
  {
    id: 2,
    no: "500+",
    para: "Trusted Providers Onboarded",
  },
  {
    id: 4,
    no: "50+",
    para: "Active Countries",
  },
];

const OurImpact = () => {
  return (
    <div className="px-6 sm:px-12 bg-[#E7EAF3] md:px-10 py-10">
      <div className="space-y-4">
        <h1 className="font-bold text-center text-2xl">Our Impact</h1>
        <p className="text-center text-sm">
          Building thriving community accross Nigeria
        </p>
      </div>
      <div
        data-aos="flip-left"
        className="md:grid hidden py-10  grid-cols-4 gap-100"
      >
        {impacts.map((impact) => (
          <div
            className="bg-white shadow-2xl flex w-80 h-38 flex-col text-left space-y-6 py-6 px-4 rounded-2xl"
            key={impact.id}
            impact={impact}
          >
            <h1 className="font-bold text-2xl text-[#003271] text-center">
              {impact.no}
            </h1>
            <p className="text-center text-sm">{impact.para}</p>
          </div>
        ))}
      </div>
      <div data-aos="flip-left" className="md:hidden overflow-x-scroll gap-10 flex py-10">
        {impacts.map((impact) => (
          <div
            className="bg-white min-w-80 shadow-2xl flex h-38 flex-col text-left space-y-6 py-6 px-4 rounded-2xl"
            key={impact.id}
            impact={impact}
          >
            <h1 className="font-bold text-2xl text-[#003271] text-center">
              {impact.no}
            </h1>
            <p className="text-center text-sm">{impact.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpact;
