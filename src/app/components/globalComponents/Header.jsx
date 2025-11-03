"use client";
import Link from "next/link";
import React from "react";
import logo from "../../images/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { Inter } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const showMenuHandler = () => {
        setShowMenu((prev) => !prev);
    };

    const path = usePathname();

    return (
        <div
            className={`w-full fixed top-0 bg-white left-0 z-50 ${
                inter.className
            }  px-6 sm:px-12 md:px-10 py-5 ${
                showMenu ? "overflow-hidden" : "overflow-visible"
            }`}
        >
            <div
                className={`flex ${inter.className} w-full max-w-7xl mx-auto justify-between items-center`}
            >
                <div className="">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={50} />
                    </Link>
                </div>
                <div className="md:flex hidden items-center gap-6">
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/") ? "active" : ""
                        }`}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/aboutus") ? "active" : ""
                        }`}
                        href="/aboutus"
                    >
                        About Us
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/services") ? "active" : ""
                        }`}
                        href="/services"
                    >
                        Sevices
                    </Link>
                    <Link
                        className={`text-[#6C757D] ${
                            path.startsWith("/providers") ? "active" : ""
                        }`}
                        href="/providers"
                    >
                        Providers
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/marketplace") ? "active" : ""
                        }`}
                        href="/marketplace"
                    >
                        MarketPlace
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/contact") ? "active" : ""
                        }`}
                        href="/contact"
                    >
                        Contact
                    </Link>
                    <div className="bg-[#A8A8B147] relative rounded-full w-30 px-2 py-1.5">
                        <input
                            className="placeholder:pl-10 placeholder:text-[#484E53]"
                            type="search"
                            name="search"
                            id="search"
                            placeholder="search"
                        />
                        <CiSearch
                            size={20}
                            className="text-[#484E53] absolute left-2 top-2 text-2xl"
                        />
                    </div>
                </div>
                <div className="md:flex hidden gap-2">
                    <Button variant="primary" size="sm">
                        Get Started
                    </Button>
                    <Button variant="secondary" size="sm">
                        Login
                    </Button>
                </div>

                {/* for smaller screens */}
                <div className="md:hidden flex gap-10 items-center">
                    <Button variant="primary" size="sm">
                        Get Started
                    </Button>
                    <div onClick={showMenuHandler}>
                        <div>
                            {showMenu ? (
                                <FaTimes size={30} />
                            ) : (
                                <RxHamburgerMenu size={30} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={` overflow-hidden w-full h-full  z-20  transition-all duration-1000  ${
                    showMenu ? "max-h-screen " : "max-h-0"
                }  `}
            >
                <div className="flex flex-col pt-7 text-center justify-center space-y-7">
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/") ? "active" : ""
                        }`}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/aboutus") ? "active" : ""
                        }`}
                        href="/aboutus"
                    >
                        About Us
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/services") ? "active" : ""
                        }`}
                        href="/services"
                    >
                        Sevices
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/providers") ? "active" : ""
                        }`}
                        href="/providers"
                    >
                        Providers
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/marketplace") ? "active" : ""
                        }`}
                        href="/marketplace"
                    >
                        MarketPlace
                    </Link>
                    <Link
                        className={`text-[#6C757D]  ${
                            path.startsWith("/contact") ? "active" : ""
                        }`}
                        href="/contact"
                    >
                        Contact
                    </Link>
                    <div className="bg-[#A8A8B147] text-center mx-auto relative rounded-full w-30 px-2 py-1.5">
                        <input
                            className="placeholder:pl-10 placeholder:text-[#484E53]"
                            type="search"
                            name="search"
                            id="search"
                            placeholder="search"
                        />
                        <CiSearch
                            size={20}
                            className="text-[#484E53] absolute left-2 top-2 text-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
