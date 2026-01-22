"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const dm_sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const KycDone = () => {
    const router = useRouter();
  return (
    <div className="bg-black/90 fixed inset-0 z-50 flex top-0 right-0 items-center justify-center">
      <div className=" flex flex-col items-center justify-center px-4">
        <div
          className="bg-white w-full max-w-md md:max-w-2xl 
        p-6 md:p-12 lg:p-16 
        rounded-2xl shadow-lg 
        flex flex-col items-center text-center gap-6"
        >
          <h1 className={`${dm_sans.className} text-base md:text-lg`}>
            Document Verification
          </h1>

          <div className="bg-[#CBAD16] flex items-center justify-center rounded-full w-12 h-12">
            <MdOutlineMarkEmailRead size={28} />
          </div>

          <h1 className={`${poppins.className} text-sm text-[#737380]`}>
            KYC Verification Successful
          </h1>
          <p>Your KYC has been verified successfully!</p>

          <div className="w-full">
            <button onClick={() => router.push("/providers")}
              type="submit"
              className="bg-[#003271] text-white w-full py-2 cursor-pointer rounded-full"
            >
              Go To Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycDone;
