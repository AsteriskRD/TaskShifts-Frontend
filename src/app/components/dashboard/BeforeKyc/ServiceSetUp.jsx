"use client";
import React from "react";
import { DM_Sans, Inter, Poppins } from "next/font/google";

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

const ServiceSetup = ({ onFinish }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // localStorage.setItem("kyc_current_step", "3");
    // onFinish();

    // alert("Service setup completed. Proceeding to dashboard.");
  };

  return (
    <div className="pt-30">
      <h1 className={`${inter.className} text-[#454545] text-2xl font-bold`}>
        Service setup
      </h1>
      <div className=" rounded-md p-4">
        <form onSubmit={onSubmitHandler}>
          <section className="bg-white px-10 py-9 rounded-2xl my-6">
            <h1
              className={`${dm_sans.className} p-1 inline-flex bg-[#E6F6FD] text-lg font-medium`}
            >
              Basic Service Information
            </h1>
            <div className="grid grid-cols-3 my-4 gap-4">
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  Service Categories
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option value="service categories">Select Categories</option>
                </select>
              </div>
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  {" "}
                  Category
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option value="service categories">Select Category</option>
                </select>
              </div>
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  Service SubCategories
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option value="service categories">
                    Select SubCategories
                  </option>
                </select>
              </div>
              <div>
                <input
                  className="placeholder:text-[#737380] border border-[#D8D8DD] p-2 rounded-md"
                  type="text"
                  name="short"
                  id="short"
                  placeholder="Short Tagline (Optional)"
                />
              </div>
            </div>

            <textarea
              className={` ${inter.className} font-semibold italic bg-[#BEC3CA24] text-[#45454599]  w-full py-8 px-4 rounded-2xl my-6`}
              name="service description"
              id="service description"
              cols="10"
              rows="5"
              defaultValue="Describe your service in details"
            />
          </section>

          <div className="bg-white px-10 py-9 rounded-2xl my-6">
            <h1
              className={`${dm_sans.className} p-1 inline-flex bg-[#E6F6FD] text-lg font-medium`}
            >
              Skills & Expertise
            </h1>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  Add Skills
                </label>
                <input
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  type="text"
                  name="package"
                  id="package"
                  placeholder="Add Skills (comma separated)"
                />
              </div>
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  {" "}
                  Skill Level
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option value="service categories">Skill level</option>
                </select>
              </div>
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  Years of Experience
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option value="service categories">Experience(years)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white px-10 py-9 rounded-2xl my-6">
            <h1
              className={`${dm_sans.className} p-1 inline-flex bg-[#E6F6FD] text-lg font-medium`}
            >
              Pricing & Packages
            </h1>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  Package
                </label>
                <input
                  className="border border-[#D8D8DD] placeholder:text-[#737380] p-2 rounded-md w-full"
                  type="text"
                  name="package"
                  id="package"
                  placeholder="Package Name (e.g., Basic)"
                />
              </div>
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  {" "}
                  Category
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option className="text-[#737380" value="service categories">
                    Price ($)
                  </option>
                </select>
              </div>
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  SubCategories
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option value="service categories">Delivery Time</option>
                </select>
              </div>
            </div>

            <textarea
              className={` ${inter.className} font-semibold italic bg-[#BEC3CA24] text-[#45454599]  w-full py-8 px-4 rounded-2xl my-6`}
              name="service description"
              id="service description"
              cols="10"
              rows="5"
              defaultValue="Describe what's included in this package
            "
            />
          </div>
          <div className="bg-white px-10 py-9 rounded-2xl my-6">
            <h1
              className={`${dm_sans.className} p-1 inline-flex bg-[#E6F6FD] text-lg font-medium`}
            >
              Portfolio & Media
            </h1>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  Click to browse
                </label>
                <input
                  className="border border-[#D8D8DD] bg-[#D8D8DD] placeholder:text-[#737380] p-2 rounded-md w-full"
                  type="text"
                  name="package"
                  id="package"
                  placeholder="Package Name (e.g., Basic)"
                />
              </div>
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  {" "}
                  Skill Level
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option value="service categories">Skill level</option>
                </select>
              </div>
              <div>
                <label
                  className={`${poppins.className} text-lg font-medium block py-2`}
                  htmlFor="service title"
                >
                  Years of Experience
                </label>
                <select
                  className="border border-[#D8D8DD] p-2 rounded-md w-full"
                  name="service categories"
                  id="service categories"
                >
                  <option value="service categories">Experience(years)</option>
                </select>
              </div>
            </div>
            <textarea
              className={` ${inter.className} font-semibold italic bg-[#BEC3CA24] text-[#45454599]  w-full py-8 px-4 rounded-2xl my-6`}
              name="service description"
              id="service description"
              cols="10"
              rows="5"
              defaultValue="Short caption or description of the uploaded work"
            />
          </div>
          <div className="bg-white px-10 py-9 rounded-2xl my-6">
            <h1
              className={`${dm_sans.className} p-1 inline-flex bg-[#E6F6FD] text-lg font-medium`}
            >
              Additional Settings
            </h1>
            <p className={`${poppins.className} font-semibold block pb-2 pt-4`}>
              Service Description
            </p>
            <textarea
              className={` ${inter.className} font-semibold italic bg-[#BEC3CA24] text-[#45454599]  w-full py-8 px-4 rounded-2xl`}
              name="service description"
              id="service description"
              cols="10"
              rows="5"
              defaultValue="Cancellation Policy (Optional)"
            />
          </div>

          <div className="flex items-center space-x-4 my-6">
            <input type="checkbox" name="" id="" />
            <div>
              <h1 className={`${poppins.className} text-sm font-semibold`}>
                I agree to{" "}
                <span className="text-[#6C757D]">Terms & Conditions</span> and{" "}
                <span className="text-[#6C757D]">Privacy Policy</span>
              </h1>
            </div>
          </div>

          <button
            className={`bg-[#003271] cursor-pointer rounded-full py-2 text-white md:px-10 px-4`}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceSetup;
