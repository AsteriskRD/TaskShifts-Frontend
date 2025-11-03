import React from "react";
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import logo from "../../images/logo.svg";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const links = [
  {
    id: 1,
    link: "/home",
    name: "Home",
  },
  {
    id: 2,
    link: "/about",
    name: "About Us",
  },
  {
    id: 3,
    link: "/services",
    name: "Services",
  },
  {
    id: 4,
    link: "/provider",
    name: "Provider",
  },
  {
    id: 5,
    link: "/marketplace",
    name: "Marketplace",
  },
];
const contacts = [
  {
    id: 1,
    link: "/loaction",
    name: "Location",
  },
  {
    id: 2,
    link: "/email",
    name: "Email us at",
  },
  {
    id: 3,
    link: "/contacts",
    name: "Call us",
  },
];
const users = [
  {
    id: 1,
    link: "/signup",
    name: "Sign Up as Client",
  },
  {
    id: 2,
    link: "/join",
    name: "Join as Provider",
  },
  {
    id: 3,
    link: "/help",
    name: "Help Center",
  },
  {
    id: 4,
    link: "/pricing",
    name: "Pricing Plans",
  },
];
const legals = [
  {
    id: 1,
    link: "/terms",
    name: "Terms of Service",
  },
  {
    id: 2,
    link: "/privacy",
    name: "Privacy Policy",
  },
  {
    id: 3,
    link: "/refund",
    name: "Refund Policy",
  },
  {
    id: 4,
    link: "/copyright",
    name: "Copyright Policy",
  },
];
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="md:hidden  mx-auto w-full bg-[#24272A]  px-6 sm:px-12 block py-6">
        <Link href="/">
          <Image src={logo} alt="logo" width={50} />
        </Link>
      </div>
      <div className="flex justify-between px-12 md:px-18 py-5 bg-[#24272A] gap-4">
        <div className="md:block hidden pt-3">
          <Link href="/">
            <Image src={logo} alt="logo" width={70} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:grid-cols-4 text-white md:gap-12">
          <div>
            <h1
              className={`${poppins.className} underline py-3 font-bold text-base pb-4`}
            >
              Quick Link
            </h1>
            <div className="space-y-3">
              {links.map((link) => (
                <div key={link.id}>
                  <Link className="text-[13.5px]" href={link.link}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1
              className={`${poppins.className} underline py-3 font-bold text-base pb-4`}
            >
              Contact
            </h1>
            <div className="space-y-3">
              {contacts.map((link) => (
                <div key={link.id}>
                  <Link className="text-[13.5px]" href={link.link}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1
              className={`${poppins.className} underline py-3 text-base font-bold pb-4`}
            >
              For Users
            </h1>
            <div className="space-y-3">
              {users.map((link) => (
                <div key={link.id}>
                  <Link className="text-[13.5px]" href={link.link}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1
              className={`${poppins.className} underline py-3 font-bold text-base pb-4`}
            >
              Legal
            </h1>
            <div className="space-y-3">
              {legals.map((link) => (
                <div key={link.id}>
                  <Link className="text-[13.5px]" href={link.link}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2 sm:block hidden md:hidden py-4">
            <h1
              className={`${dm_sans.className} text-white text-base font-bold`}
            >
              Want to keep hearing from us?
            </h1>
            <div className="space-y-3">
              <input
                className="placeholder:pl-4 bg-white placeholder:text-black rounded-l-md p-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <button className="bg-[#E48D1A] rounded-r-md px-4 py-2 text-white font-bold">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-2 md:block hidden py-4">
          <h1 className={`${dm_sans.className} text-white text-base font-bold`}>
            Want to keep hearing from us?
          </h1>
          <div>
            <input
              className="placeholder:pl-4 bg-white placeholder:text-black rounded-l-full p-2"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#E48D1A] rounded-r-full px-4 py-2 text-white font-bold">
              Send
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${poppins.className} text-white space-y-4 bg-[#24272A] sm:space-y-0 sm:flex justify-between md:px-40 sm:px-10 px-10 py-6 `}
      >
        <div className="space-y-2 block sm:hidden py-4">
          <h1 className={`${dm_sans.className} text-white font-bold`}>
            Want to keep hearing from us?
          </h1>
          <div className="py-3 flex">
            <input
              className="placeholder:pl-4 bg-[#eaeaef] border border-[#D8D8DD] placeholder:text-[#b1b1b6] rounded-l-full p-2"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#E48D1A] rounded-r-full p-2  text-white font-bold">
              Send
            </button>
          </div>
        </div> 
      </div>
      <div className="bg-[#003271] text-white py-6 justify-center md:flex">
          <div className="flex justify-center py-4 md:py-0   gap-4">
            <FaFacebookSquare size={20} className="mx-2" />
            <FaInstagram size={20} className="mx-2" />
            <FaXTwitter size={20} className="mx-2" />
            <FaLinkedin size={20} className="mx-2" />
          </div>
          <div
            className={`flex ${poppins.className} text-xs px-4 sm:text-sm gap-5 md:gap-10`}
          >
            <p className="font-[400px] text-[14px]">
              @ 2025 TaskShift Technologies
            </p>
            <p>All right reserved</p>
            <p>map</p>
            <p>cookies policy</p>
          </div>
        </div>
    </div>
  );
};

export default Footer;
