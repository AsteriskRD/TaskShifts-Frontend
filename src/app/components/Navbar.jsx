"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../assets/Logo.svg";
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Providers", href: "/providers" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Contact", href: "/contact" },
  ];

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("activeUser"))
      : null;

  return (
    <div className="fixed top-0 left-0 w-full z-30 bg-white px-4 lg:px-20 py-4 lg:py-6 font-bold flex lg:flex-row items-center justify-between text-light-900">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <Image
          src={Logo}
          alt="logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="flex justify-center relative left-10">
        <nav className="hidden lg:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-base hover:text-primary-500 transition-all ${
                pathname === link.href ? "text-primary-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <form action="" className="w-12">
            <input type="search" name="" id="" className="w-full" />
          </form>
        </nav>
      </div>

      {/* Desktop User Buttons */}
      <div className="flex justify-end items-center gap-2">
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/chooserole"
            className="px-5 py-2 rounded-md bg-primary-500 transition hover:scale-105 text-primary-100"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-5 py-2 rounded-md text-primary-500 hover:scale-105"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center gap-1 w-6 h-6 focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-500 transform transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-500 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-500 transform transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden bg-white shadow-2xl rounded-sm transition-all duration-500 w-11/12 absolute top-20 m-auto left-0 right-0 text-center z-50 ${
          isOpen ? "h-auto py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 text-light-900 px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-primary-500 transition-all ${
                pathname === link.href ? "text-primary-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 items-center mt-3">
            <Link
              href="/chooserole"
              onClick={() => setIsOpen(false)}
              className="px-10 py-2 rounded-md bg-primary-500 transition hover:scale-105 text-light-100"
            >
              SignUp
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-primary-500 hover:scale-105"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
