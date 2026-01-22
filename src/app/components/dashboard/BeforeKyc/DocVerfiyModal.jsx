"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useRouter } from "next/navigation";
const dm_sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DocVerifyModal = () => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/doc-verify-success-modal");
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-accent-50 px-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl 
        p-6 md:p-12 lg:p-16 
        rounded-2xl shadow-lg 
        flex flex-col items-center text-center gap-6">

        <h1 className={`${dm_sans.className} text-base md:text-lg`}>
          Document Verification
        </h1>

        <div className="bg-[#CBAD16] flex items-center justify-center rounded-full w-12 h-12">
          <MdOutlineMarkEmailRead size={28} />
        </div>

        <p className={`${poppins.className} text-sm text-[#737380]`}>
          Please note that your document verification is currently in progress.
        </p>

        <div className="w-full">
          <button type="submit" onClick={handleSubmit} className="bg-[#003271] text-white w-full py-2 cursor-pointer rounded-full">
            Submit Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocVerifyModal;
