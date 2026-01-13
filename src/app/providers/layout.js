"use client";
import React from "react";
import SideBar from "../components/dashboard/SideBar";
import SideBarMain from "../components/dashboard/sidebarCont/SideBarMain";
import SideBarFooter from "../components/dashboard/sidebarCont/SideBarFooter";
import { useState } from "react";

const ProviderLayout = ({ children }) => {

  const [show, setShow] = useState(false)
  
  return (
    <div className="relative px-10 ">
      <div className="grid grid-cols-[220px_1fr] bg-gray-100">
        <div className="bg-white  sticky top-0 h-screen overflow-y-auto py-18 ">
          <div>
            <SideBarMain />
          </div>
          <div className="pt-24">
            <SideBarFooter />
          </div>
        </div>
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default ProviderLayout;
