"use client";

import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
