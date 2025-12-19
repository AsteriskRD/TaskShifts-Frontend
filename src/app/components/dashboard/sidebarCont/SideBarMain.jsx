import React from "react";
import { TbDashboardOff } from "react-icons/tb";
import { MdOutlinePortrait } from "react-icons/md";
import { AiFillCustomerService } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdGeneratingTokens } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";

import logo from "../../../images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import SideBarNav from "./SideBarNav";

const navLinks = [
  {
    id: 1,
    icons: <TbDashboardOff size={20} />,
    name: "Dashboard",
    link: "/providers",
  },
  {
    id: 2,
    icons: <MdOutlinePortrait size={20} />,
    name: "Profile",
    link: "/providers/profile",
  },
  {
    id: 3,
    icons: <AiFillCustomerService size={20} />,
    name: "Support",
    link: "/providers/support",
  },
  {
    id: 4,
    icons: <IoMdTime size={20} />,
    name: "History",
    link: "/providers/history",
  },
  {
    id: 5,
    icons: <RiSecurePaymentLine size={20} />,
    name: "Payment",
    link: "/providers/payment",
  },
  {
    id: 6,
    icons: <BiMoneyWithdraw size={20} />,
    name: "Withdraw",
    link: "/providers/withdraw",
  },
  {
    id: 7,
    icons: <MdGeneratingTokens size={20} />,
    name: "Tokens",
    link: "/providers/tokens",
  },
  {
    id: 8,
    icons: <MdOutlineMessage size={20} />,
    name: "Messages",
    link: "/providers/messages",
  },
  {
    id: 9,
    icons: <MdOutlineRateReview size={20} />,
    name: "Reviews",
    link: "/providers/reviews",
  },
];
const SideBarMain = () => {
  return (
    <div className="">
      <Link href="/">
        <div className="py-6 flex justify-center">
          <Image width={80} src={logo} alt="logo" />
        </div>
      </Link>
      <div className="space-y-8">
        {navLinks.map((link) => (
          <div className="" key={link.id}>
            <SideBarNav link={link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarMain;
