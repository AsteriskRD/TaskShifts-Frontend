
"use client";
import "./globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Context from "./components/Context";
import Header from "./components/globalComponents/Header";
import Footer from "./components/globalComponents/Footer";
import Aos from "aos";


export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <html className="" lang="en">
      <body>
        <Context>
            <Header/>
            {children}
            <Footer/>
        </Context>
        
        </body>
    </html>
  );
}
