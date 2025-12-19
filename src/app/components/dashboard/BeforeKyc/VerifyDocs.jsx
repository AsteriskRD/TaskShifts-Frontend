import React from "react";
import { DM_Sans, Inter } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const VerifyDocs = () => {
  return (
    <div className="md:px-20 py-14">
      <h1 className={`${dm_sans.className} text-2xl font-bold`}>
        Document Verification
      </h1>
      <p className="text-[#737380] text-sm">
        Provide correct information to help us verify your account
      </p>
      <div className="md:flex justify-between space-y-4 md:space-y-0 md:py-6">
        

        <div>
          <label className="" htmlFor="document_type">Document Type</label>
          <select
            className="w-full py-2 my-2 rounded-lg border-[#D8D8DD] border"
            name="document_type"
            id="document_type"
          >
            <option className="placeholder:text-[#737380]" value="document_type">
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
            className={`${inter.className} mt-2 border placeholder:text-[#737380] border-gray-300 rounded-md p-2 w-full`}
          />
        </div>
      </div>
      <div className="text-center py-8 md:py-0 md:mx-20">
        <h1 className={`${dm_sans.className} text-2xl font-bold`}>Business Registration Document</h1>
        <p className="text-sm py-2 ">Upload scanned copy of your business registration document in JPG, PNG, or PD</p>
         <div className="flex flex-col items-center gap-4 py-4">
        <button className="border border-[#003271] rounded-full w-30 py-1.5">Choose a file</button>
      </div>
      </div>
     
    </div>
  );
};

export default VerifyDocs;
