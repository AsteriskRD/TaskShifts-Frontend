"use client";

import { FaRegBell, FaTimes } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage, MdDeleteOutline, MdOutlinePortrait } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { TbDashboardOff } from "react-icons/tb";
import { useState, useEffect } from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdGeneratingTokens, MdOutlineRateReview } from "react-icons/md";
import SideBarNav from "./sidebarCont/SideBarNav";

const navLinks = [
  { id: 1, icons: <TbDashboardOff size={20} />, name: "Dashboard", link: "/providers" },
  { id: 2, icons: <MdOutlinePortrait size={20} />, name: "Profile", link: "/providers/profile" },
  { id: 3, icons: <AiFillCustomerService size={20} />, name: "Support", link: "/providers/support" },
  { id: 4, icons: <IoMdTime size={20} />, name: "History", link: "/providers/history" },
  { id: 5, icons: <RiSecurePaymentLine size={20} />, name: "Payment", link: "/providers/payment" },
  { id: 6, icons: <BiMoneyWithdraw size={20} />, name: "Withdraw", link: "/providers/withdraw" },
  { id: 7, icons: <MdGeneratingTokens size={20} />, name: "Tokens", link: "/providers/tokens" },
  { id: 8, icons: <MdOutlineMessage size={20} />, name: "Messages", link: "/providers/messages" },
  { id: 9, icons: <MdOutlineRateReview size={20} />, name: "Reviews", link: "/providers/reviews" },
];

const DashboardHeader = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if( storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
  }, []);

 

  const closeShow = () => {
    setShow((show) => !show);
  };

  return (
    <>
      
      <header className="w-full px-4 py-4 overflow-x-hidden">
        <div className="hidden md:flex flex-wrap items-center gap-4 justify-between">

    
          <div className="relative w-full max-w-md">
            <input
              className="w-full p-2 pr-10 border rounded-md"
              type="search"
              placeholder="Search here..."
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

        
          <div className="flex items-center gap-3">
            {[FaRegBell, MdOutlineMessage, MdDeleteOutline, IoSettingsOutline].map(
              (Icon, i) => (
                <div key={i} className="relative p-2 rounded-md bg-gray-100">
                  <Icon size={20} />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    2
                  </span>
                </div>
              )
            )}
          </div>

          
          <div className="flex items-center gap-3">
            <p className="text-sm">
              Hello, <span className="font-semibold">{user?.firstName  }</span>
            </p>
            <div className="w-10 h-10 bg-[#003271] text-white rounded-full flex items-center justify-center">
              <MdOutlinePortrait size={20} />
            </div>
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex md:hidden items-center justify-between">
          <button onClick={() => setShow(!show)}>
            {show ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
          <div className="w-9 h-9 bg-[#003271] text-white rounded-full flex items-center justify-center">
            <MdOutlinePortrait size={16} />
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {show && (
        <aside onClick={closeShow} className="fixed inset-0 bg-[#003271] text-white z-50 md:hidden overflow-y-auto">
          <div className="py-10 space-y-12 mt-20 flex flex-col items-center">
            {navLinks.map((link) => (
              <SideBarNav key={link.id} link={link} />
            ))}
          </div>
        </aside>
      )}
    </>
  );
};

export default DashboardHeader;
