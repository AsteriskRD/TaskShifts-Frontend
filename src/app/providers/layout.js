"use client";
import React from "react";
import SideBar from "../components/dashboard/SideBar";
import SideBarMain from "../components/dashboard/sidebarCont/SideBarMain";
import SideBarFooter from "../components/dashboard/sidebarCont/SideBarFooter";
import { useState } from "react";


const ProviderLayout = ({ children }) => {

 
  
  return (
    <div className="relative max-w-[1440px] mx-auto w-full md:px-10 px-0  ">
      <div className="md:grid md:grid-cols-[220px_1fr] bg-gray-100">
        <div className={`bg-white hidden md:block  sticky top-0 h-screen overflow-y-auto py-18 `}>
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
