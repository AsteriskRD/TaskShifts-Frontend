"use client";
import React from "react";
import { DM_Sans, Inter } from "next/font/google";
import imgg from "../../../images/imageUpload.png";
import Image from "next/image";
import { useState } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Personalnfo = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
    bio: "",
    
  });
  

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })

    console.log(formData);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    setProfilePic(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="md:px-20">
      <h1
        className={`${inter.className} py-3 font-bold sm:text-xl text-lg md:text-2xl`}
      >
        Personal Information
      </h1>
      <div className="flex py-4 flex-col justify-center items-center">
      
        <label htmlFor="profilepic" className="cursor-pointer">
          <Image src={preview || imgg} alt="profile" className="rounded-full" width={100} height={100} />

        </label>
        <input type="file" name="profilepic" id="profilepic" accept="image/*" hidden onChange={handleImageChange} />
      </div>
      <div>
        <form className="max-w-screen mx-auto space-y-6">
          <div className="md:flex block gap-20 justify-start">
            <div className="flex space-y-4 flex-col">
              <div className="">
                <label className={`${inter.className}`} htmlFor="firstname">
                  First Name
                </label>
                <input onChange={onChangeHandler}
                  className="w-full placeholder:text-[#737380] py-1 rounded-lg border-[#D8D8DD] border-2"
                  type="text"
                  name="firstname"
                  placeholder="   Mercy"
                  id="firstname"
                  value ={formData.firstname}
                />
              </div>
              <div>
                <label className={`${inter.className}`} htmlFor="phone">
                  Phone Number
                </label>
                <input onChange={onChangeHandler}
                  className="w-full placeholder:text-[#737380]  py-1 rounded-lg border-[#D8D8DD] border-2"
                  type="tel"
                  name="phone"
                  placeholder="   +1234567890"
                  id="phone"
                  value ={formData.phone}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select onChange={onChangeHandler}
                  className="w-full py-2 rounded-lg border-[#D8D8DD] border-2"
                  name="gender"
                  id="gender"
                  value ={formData.gender}
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
                <input onChange={onChangeHandler}
                  className=" placeholder:text-[#737380] py-1 w-full rounded-lg border-[#D8D8DD] border-2"
                  type="text"
                  name="lastname"
                  placeholder=" Mercy"
                  id="lastname"
                  value ={formData.lastname}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input onChange={onChangeHandler}
                  className=" placeholder:text-[#737380] w-full py-1 rounded-lg border-[#D8D8DD] border-2"
                  type="email"
                  name="email"
                  placeholder="   example@example.com"
                  id="email"
                  value ={formData.email}
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth</label>
                <input onChange={onChangeHandler}
                  className="w-full placeholder:text-[#737380]  py-1 rounded-lg border-[#D8D8DD] border-2"
                  type="date"
                  name="dob"
                  placeholder="     DD/MM/YYYY"
                  id="dob"
                  value ={formData.dob}
                />
              </div>
            </div>
          </div>
          <div className="py-6">
            <h1 className="text-[#1C1C1F] font-medium text-xl">
              Professional Bio
            </h1>
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
