import React from "react";
import CardKyc from "../CardKyc";
import { DM_Sans, Inter } from "next/font/google";
import imgg from "../../../images/imageUpload.png";
import Image from "next/image";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Personalnfo = () => {
  return (
    <div className="md:px-20">
      <h1 className={`${inter.className} py-3 font-bold sm:text-xl text-lg md:text-2xl`}>
        Personal Information
      </h1>
      <div className="flex py-4 flex-col justify-center items-center">
        <Image src={imgg} alt="img" width={100} />
      </div>
      <div>
        <form className="w-full ">
          <div className="md:flex block gap-20 justify-start">
            <div className="flex space-y-4 flex-col">
              <div className="">
                <label className={`${inter.className}`} htmlFor="firstname">
                  First Name
                </label>
                <input
                  className="w-full px-40 placeholder:text-[#737380] py-1 rounded-lg border-[#D8D8DD] border"
                  type="text"
                  name="firstname"
                  placeholder="   Mercy"
                  id="firstname"
                />
              </div>
              <div>
                <label className={`${inter.className}`} htmlFor="phone">Phone Number</label>
                <input
                  className="w-full placeholder:text-[#737380]  py-1 rounded-lg border-[#D8D8DD] border"
                  type="tel"
                  name="phone"
                  placeholder="   +1234567890"
                  id="phone"
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  className="w-full py-2 rounded-lg border-[#D8D8DD] border"
                  name="gender"
                  id="gender"
                >
                  <option className="placeholder:text-[#737380]" value="gender">
                    Select
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="flex space-y-4 flex-col">
              <div className="">
                <label className="" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  className="w-full px-40 placeholder:text-[#737380] py-1 rounded-lg border-[#D8D8DD] border"
                  type="text"
                  name="lastname"
                  placeholder="   Mercy"
                  id="lastname"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="w-full placeholder:text-[#737380]  py-1 rounded-lg border-[#D8D8DD] border"
                  type="email"
                  name="email"
                  placeholder="   example@example.com"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  className="w-full placeholder:text-[#737380]  py-1 rounded-lg border-[#D8D8DD] border"
                  type="date"
                  name="dob"
                  placeholder="     DD/MM/YYYY"
                  id="dob"
                />
              </div>
            </div>
          </div>
          <div className="py-6">
            <h1 className="text-[#1C1C1F] font-medium text-xl">Professional Bio</h1>
            <div className="py-3">
              <textarea
              className="bg-[#989BA024] placeholder:text-[#45454599] w-full rounded-lg p-4"
              name=""
              id=""
              placeholder="Tell potential clients about yourself, your experience and your skills "
              cols="30"
              rows="10"
            ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personalnfo;
