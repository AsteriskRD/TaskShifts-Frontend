"use client";
import "./globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Context from "./components/Context";
import Header from "./components/globalComponents/Header";
import Footer from "./components/globalComponents/Footer";
import Aos from "aos";
import { AuthProvider } from "./context/AuthProvider"; // Adjust path as needed

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <html className="" lang="en">
      <body className="">
        <AuthProvider>
          <Context>
            <Header />
            {children}
            <Footer />
          </Context>
        </AuthProvider>
      </body>
    </html>
  );
}
