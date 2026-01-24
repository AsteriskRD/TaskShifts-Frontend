"use client";
import React from "react";
import { DM_Sans, Inter } from "next/font/google";
import imgg from "../../../images/imageUpload.png";
import Image from "next/image";
import { useState } from "react";
import { kycStepOne } from "@/app/api/auth";
import { useRouter } from "next/navigation";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Personalnfo = ({ onNext }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    bio: "",
    profilePicture: null,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    setProfilePic(file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!profilePic) {
      alert("Please upload a profile picture");
      return;
    }

    if(
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.gender ||
      !formData.dateOfBirth ||
      !formData.bio
    ) {
      alert("Please fill in all the required fields");
      return;
    }

    try {
      const token =
        localStorage.getItem("accessToken") ||
        sessionStorage.getItem("accessToken");
      console.log("TOKEN:", token);

      if (!token) {
        alert("You must be logged in before completing KYC");
        return;
      }

      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("phone", formData.phone);
      data.append("gender", formData.gender);
      data.append("dateOfBirth", formData.dateOfBirth);
      data.append("bio", formData.bio);
      data.append("profilePicture", profilePic);

      console.log("TOKEN:", token);
      console.log("DATA:", data);

      const response = await kycStepOne(token, data);
      if (response.status === 200 || response.status === 201) {
        onNext();
      }

      
    } catch (error) {
      console.error("KYC ERROR:", error.response?.data || error.message);
    }
  };

  return (
    <div className="md:px-20">
      <h1
        className={`${inter.className} py-3 font-bold sm:text-xl text-lg md:text-2xl`}
      >
        Personal Information
      </h1>
      <div className="flex py-4 flex-col justify-center items-center">
        <label htmlFor="profilePicture" className="cursor-pointer">
          <Image
            src={preview || imgg}
            alt="profile"
            className="rounded-full"
            width={100}
            height={100}
          />
        </label>
        <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </div>
      <div>
        <form
          onSubmit={onSubmitHandler}
          className="max-w-screen mx-auto space-y-6"
        >
          <div className="md:flex block gap-20 justify-start">
            <div className="flex space-y-4 flex-col">
              <div className="">
                <label className={`${inter.className}`} htmlFor="firstName">
                  First Name
                </label>
                <input
                  onChange={onChangeHandler}
                  className="w-full placeholder:text-[#737380] py-1 rounded-lg border-[#D8D8DD] border-2"
                  type="text"
                  name="firstName"
                  placeholder="   Mercy"
                  id="firstName"
                  value={formData.firstName}
                />
              </div>
              <div>
                <label className={`${inter.className}`} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  onChange={onChangeHandler}
                  className="w-full placeholder:text-[#737380]  py-1 rounded-lg border-[#D8D8DD] border-2"
                  type="tel"
                  name="phone"
                  placeholder="   +1234567890"
                  id="phone"
                  value={formData.phone}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  onChange={onChangeHandler}
                  className="w-full py-2 rounded-lg border-[#D8D8DD] border-2"
                  name="gender"
                  id="gender"
                  value={formData.gender}
                >
                  <option className="placeholder:text-[#737380]" value="gender">
                    Select
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="flex space-y-4 flex-col">
              <div className="">
                <label className="" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  onChange={onChangeHandler}
                  className=" placeholder:text-[#737380] py-1 w-full rounded-lg border-[#D8D8DD] border-2"
                  type="text"
                  name="lastName"
                  placeholder=" Mercy"
                  id="lastName"
                  value={formData.lastName}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={onChangeHandler}
                  className=" placeholder:text-[#737380] w-full py-1 rounded-lg border-[#D8D8DD] border-2"
                  type="email"
                  name="email"
                  placeholder="   example@example.com"
                  id="email"
                  value={formData.email}
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  onChange={onChangeHandler}
                  className="w-full placeholder:text-[#737380]  py-1 rounded-lg border-[#D8D8DD] border-2"
                  type="date"
                  name="dateOfBirth"
                  placeholder="     DD/MM/YYYY"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
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
                onChange={onChangeHandler}
                className="bg-[#989BA024] placeholder:text-[#45454599] w-full rounded-lg p-4"
                name="bio"
                id="bio"
                placeholder="Tell potential clients about yourself, your experience and your skills "
                cols="30"
                rows="10"
                value={formData.bio}
              ></textarea>
            </div>
          </div>

          <div className="pb-8 pt-2 mx-auto w-3/4 flex justify-between items-center">
            

            <button
              type="submit"
              className={`bg-[#003271] cursor-pointer rounded-full py-2 text-white md:px-10 px-4`}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personalnfo;
