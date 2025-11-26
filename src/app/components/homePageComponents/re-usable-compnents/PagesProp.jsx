import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PagesProp = ({ img, title }) => {
  return (
    <div className={dm_sans.className}>
      <div
        className="relative h-[55vh] sm:h-[85vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <div className="text-white items-center bg-black/65  absolute inset-0 flex flex-col justify-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center my-6">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PagesProp;
