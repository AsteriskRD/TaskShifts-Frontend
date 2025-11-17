import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Pagination = () => {
  return (
    <div className={` ${poppins.className} px-8 py-5 my-14`}>
      <div className="bg-white rounded-md flex gap-10 text-black py-3 px-8">
        <h1 className="font-medium">Showing 1 - 10 <span className="font-light">out of 50 Results</span></h1>
      </div>
    </div>
  );
};

export default Pagination;
