
"use client";
import "./globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Context from "./components/Context";
import Header from "./components/globalComponents/Header";
import Footer from "./components/globalComponents/Footer";
import Aos from "aos";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";


export default function RootLayout({ children }) {
  const pathname = usePathname();

  const HideHeaderFooter = pathname.startsWith("/providers");


  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <html className="" lang="en">
      <body className="">
        <ToastContainer />
        <Context>
            {!HideHeaderFooter && <Header />}
            {children}
            <Footer/>
        </Context>
        
        </body>
    </html>
  );
}
