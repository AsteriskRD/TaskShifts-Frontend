import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Pagination = () => {
  return (
    <div className={` ${poppins.className}  flex flex-col items-center   my-14`}>
      <span className="justify-center py-2 px-4 border-2 border-[#003271] rounded-lg  inline-flex">
        <h1 className="text-[#003271] font-bold">Load More Services</h1>
      </span>
    </div>
  );
};

export default Pagination;
