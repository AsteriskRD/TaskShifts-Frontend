"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Hide navbar on login and signup pages
  const hideNavbar =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  return (
    <html lang="en">
      <body className="lg:px-20">
        {!hideNavbar && <Navbar />}
        <main>{children}</main>
      </body>
    </html>
  );
}
