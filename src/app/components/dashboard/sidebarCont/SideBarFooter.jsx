import React from "react";
import SideBarNav from "./SideBarNav";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const footerLinks = [
    {
    id: 10,
    icons: <BiSupport size={20} />,
    name: "Customer Support",
    link: "/providers/support",
  },
  {
    id: 11,
    icons: <IoSettingsOutline size={20} />,
    name: "Settings",
    link: "/dashboard/settings",
  },
  {
    id: 12,
    icons: <IoIosLogOut size={20} />,
    name: "Logout",
    link: "/dashboard/logout",
  },
];
const SideBarFooter = () => {
  return <div className="space-y-8">
    {
        footerLinks.map((link) => (
            <div key={link.id}>
                <SideBarNav link={link}/>
            </div>
        ))
    }
  </div>;
};

export default SideBarFooter;
