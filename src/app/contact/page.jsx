import React from "react";
import about from "../images/creators.png";
import PagesProp from "../components/homePageComponents/re-usable-compnents/PagesProp";
import { Poppins } from "next/font/google";
import devs from "../images/devs.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "../components/globalComponents/Button";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Contact = ({ title, img }) => {
  return (
    <div
      className={`${poppins.className} bg-[] pt-22 pb-10 px-6 sm:px-12 md:px-18 max-w-[1440px] mx-auto `}
    >
      <div className=" ">
        <PagesProp img={devs} title="CONTACT US" />
        <div className="md:flex w-full min-w-96 text-left gap-60 justify-items-start py-8">
          <div className="md:w-1/2">
            <p>Write a message to us today and we will reach you.</p>
            <form className="space-y-6 ">
              <div className="pt-4">
                <input
                  className="border border-[#D4BFB5] w-full px-2 py-1.5 rounded-md"
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="border w-full border-[#D4BFB5] px-2 py-1.5 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="border border-[#D4BFB5] px-2 py-1.5 rounded-md">
                <textarea
                  name="message"
                  id="message"
                  cols=""
                  rows="5"
                  placeholder="Message"
                />
              </div>
              <Button
                className="w-50"
                variant="primary"
                type="submit"
                size="md"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className={`md:w-1/2 ${poppins.className}  py-6 md:py-0 space-y-4`}>
            <h1 className={`text-[#003271] font-extrabold text-2xl`}>
              Get in Touch
            </h1>
            <div
              className={`text-[#737380] ${inter.className} py-4 sm:py-2 md:py-0 font-[400px] mt-6`}
            >
              <p>We are here to help, anytime, anywhere.!</p>
              <p>
                Whether you are a client looking for trusted professionals or a
                service provider ready to grow your business, the TaskShift team
                is just a message away
              </p>
              <p>
                Use the form or reach us directly through our support channels.
                We will get back to you within 24 hours.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex gap-1 items-center">
                <FaFacebook size={20} className="text-[#3b5998] items-center" />
                <a className="text-[#5C5C66] font-[400px] text-sm" href="#">
                  Task_Shift
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <FaInstagram
                  size={20}
                  className="text-[#3b5998] items-center"
                />
                <a className="text-[#5C5C66] font-[400px] text-sm" href="#">
                  Task_Shift
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <FaLinkedin size={20} className="text-[#3b5998] items-center" />
                <a className="text-[#5C5C66] font-[400px] text-sm" href="#">
                  Task_Shift
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <RiTwitterXFill
                  size={15}
                  className="text-[#3b5998] items-center"
                />

                <a className="text-[#5C5C66] font-[400px] text-sm" href="#">
                  TaskShift
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
