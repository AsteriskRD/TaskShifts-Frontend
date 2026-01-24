"use client";
import React from "react";
import { DM_Sans, Inter, Poppins } from "next/font/google";
import { FaChevronDown } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { useState } from "react";
import DocSuccessModal from "./DocVerfiySuccess";
import DocVerifyModal from "./DocVerfiyModal";
// import { useRouter } from "next/navigation";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const VerifyDocs = ({ onVerificationComplete }) => {
  const [stage, setStage] = useState("form");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStage("verifying");

    setTimeout(() => {
      setStage("success");
    }, 3000);
  };

  if (stage === "verifying") return <DocVerifyModal />;

  if (stage === "success")
    return (
      <DocSuccessModal
        onContinue={() => {
          localStorage.setItem("kyc_current_step", "2");
          onVerificationComplete();
        }}
      />
    );

  return (
    <form onSubmit={handleSubmit} className="md:px-20 py-14">
      <h1 className={`${dm_sans.className} text-2xl font-bold`}>
        Document Verification
      </h1>
      <p className="text-[#737380] text-sm">
        Provide correct information to help us verify your account
      </p>
      <div className="md:flex justify-between space-y-4 md:space-y-0 md:py-6">
        <div>
          <label className="" htmlFor="document_type">
            Document Type
          </label>
          <select
            className="w-full py-2 my-2 rounded-lg border-[#D8D8DD] border-2"
            name="document_type"
            id="document_type"
          >
            <option
              className="placeholder:text-[#737380]"
              value="document_type"
            >
              Registeration Document
            </option>
            <option value="male">Driver's Licence</option>
            <option value="female">National PassPort</option>
            <option value="female">National ID</option>
          </select>
        </div>
        <div>
          <label htmlFor="RegNo">Registration Number</label>
          <input
            type="text"
            placeholder="  Enter registeration no"
            id="RegNo"
            name="RegNo"
            className={`${inter.className} mt-2 border-2 placeholder:text-[#737380] border-gray-300 rounded-md p-2 w-full`}
          />
        </div>
      </div>
      <div className="text-center py-8 md:py-0 md:mx-30">
        <h1 className={`${dm_sans.className} text-xl font-bold`}>
          Business Registration Document
        </h1>
        <p className="text-sm md:px-26 px-10 py-2 ">
          Upload scanned copy of your business registration document in JPG,
          PNG, or PDF
        </p>
        <div className="flex flex-col items-center gap-4 py-4">
          <button className=" border-[#003271] font-bold text-[#003271] border-2 rounded-full w-30 py-1.5">
            Choose a file
          </button>
        </div>
      </div>
      <div className="relative mt-6 w-full md:w-1/2 mx-auto">
        <label htmlFor="RegNo">Proof of Business Address</label>
        <input
          type="text"
          placeholder="  utility"
          id="RegNo"
          name="RegNo"
          className={`${inter.className} mt-2 border-2 placeholder:text-[#737380] border-gray-300 rounded-md p-2 w-full`}
        />
        <FaChevronDown className="absolute right-3 bottom-3 text-gray-500" />
      </div>
      <div className="">
        <div className="text-center py-8 md:py-0 md:mx-30">
          <div className="text-center  mx-auto w-10 h-10 bg-[#003271] text-white rounded-full flex items-center justify-center my-4">
            <IoMdDocument
              className="text-center flex flex-col justify-center"
              size={20}
            />
          </div>
          <h1 className={`${dm_sans.className} text-xl font-bold`}>
            Utility Bill Document
          </h1>
          <p className="text-sm md:px-26 px-10 py-2 ">
            Upload scanned copy of any utility bills that carries the address of
            your business in JPG, PNG, or PDF
          </p>
          <div className="flex flex-col items-center gap-4 py-4">
            <button className=" border-[#003271] font-bold text-[#003271] border-2 rounded-full w-30 py-1.5">
              Choose a file
            </button>
          </div>
        </div>
      </div>

      <div className={`${poppins.className}`}>
        <h1 className={`${dm_sans.className} text-2xl font-bold `}>
          Upload a proof of your identity
        </h1>
        <p className={`text-[#737380] ${poppins.className} text-sm py-1`}>
          Provide correct information to help us verify your account
        </p>
      </div>

      <div className={`${poppins.className}`}>
        <div className="md:flex justify-between space-y-4 md:space-y-0 md:py-6">
          <div className="relative">
            <label className="" htmlFor="document_type">
              Document Type
            </label>
            <input
              type="text"
              placeholder="  Registration document"
              id="RegNo"
              name="RegNo"
              className={`${inter.className} mt-2 border-2 placeholder:text-[#737380] border-gray-300 rounded-md p-2 w-full`}
            />
            <FaChevronDown className="absolute right-3 bottom-3 text-gray-500" />
          </div>
          <div>
            <label htmlFor="RegNo">NIN</label>
            <input
              type="text"
              placeholder="  Enter your NIN"
              id="RegNo"
              name="RegNo"
              className={`${inter.className} mt-2 border-2 placeholder:text-[#737380] border-gray-300 rounded-md p-2 w-full`}
            />
          </div>
        </div>

        <div className="bg-[#E8E8EB] border-dashed border-2 border-[#D8D8DD] rounded-md py-6 my-6">
          <div className="text-center py-8 md:py-0 md:mx-30">
            <div className="text-center  mx-auto w-10 h-10 bg-[#003271] text-white rounded-full flex items-center justify-center my-4">
              <IoMdDocument
                className="text-center flex flex-col justify-center"
                size={20}
              />
            </div>
            <h1 className={`${dm_sans.className} text-xl font-bold`}>
              Front Side Document
            </h1>
            <p className="text-sm md:px-26 px-10 py-2 ">
              Upload the front side of your support document in JPG, PNG, or PDF
            </p>
            <div className="flex flex-col items-center gap-4 py-4">
              <button className=" border-[#003271] font-bold text-[#003271] border-2 rounded-full w-30 py-1.5">
                Choose a file
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#E8E8EB] border-dashed border-2 border-[#D8D8DD] rounded-md py-6 my-6">
          <div className="text-center py-8 md:py-0 md:mx-30">
            <div className="text-center  mx-auto w-10 h-10 bg-[#003271] text-white rounded-full flex items-center justify-center my-4">
              <IoMdDocument
                className="text-center flex flex-col justify-center"
                size={20}
              />
            </div>
            <h1 className={`${dm_sans.className} text-xl font-bold`}>
              Back Side Document
            </h1>
            <p className="text-sm md:px-26 px-10 py-2 ">
              Upload the back side of your support document in JPG, PNG, or PDF
            </p>
            <div className="flex flex-col items-center gap-4 py-4">
              <button className=" border-[#003271] font-bold text-[#003271] border-2 rounded-full w-30 py-1.5">
                Choose a file
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-centerr gap-4">
          <div>
            <input type="checkbox" name="confirm" id="confirm" />
          </div>
          <div>
            <p>
              I confirm that I uploaded a valid government-issued Identity Card.
              This ID includes my picture, signature, name, date of birth and
              address
            </p>
          </div>
        </div>
        <div className="mt-8 w-full  mx-auto">
          <button
            type="submit"
            className="bg-[#003271]  cursor-pointer rounded-full py-2 text-white w-full md:px-10 px-4"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default VerifyDocs;
