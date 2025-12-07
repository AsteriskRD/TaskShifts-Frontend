"use client";
import "./globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Context from "./components/Context";
import Header from "./components/globalComponents/Header";
import Footer from "./components/globalComponents/Footer";
import Aos from "aos";


export default function RootLayout({ children }) {
  const pathname = usePathname();

  const HideHeaderFooter = pathname.startsWith("provider");


  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <html className="" lang="en">
      <body className="">
        <Context>
            <Header/>
            {children}
            <Footer />
          </Context>
        </AuthProvider>
      </body>
    </html>
  );
}
