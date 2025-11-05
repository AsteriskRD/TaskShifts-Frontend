import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PagesProp = ({ img, title }) => {
  return (
    <div className={`${dm_sans.className} `}>
      <div className="relative w-full bg-black/65 h-[55vh] sm:h-[85vh] overflow-hidden">
        <Image fill className="object-cover" src={img} alt={title} priority />
      </div>
      <div className="text-white items-center bg-black/65 mx-6 sm:mx-12 md:mx-18 absolute inset-0 flex flex-col justify-center">
        <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl text-center my-6">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PagesProp;