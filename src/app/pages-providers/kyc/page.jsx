import React from "react";
import { DM_Sans, Inter } from "next/font/google";
import Personalnfo from "@/app/components/dashboard/BeforeKyc/Personalnfo";
import KycStepper from "@/app/components/dashboard/BeforeKyc/KycStepper";
import CardKyc from "@/app/components/dashboard/CardKyc";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const page = () => {
  return (
    <div>
      <div>
        <CardKyc />
      </div>
      <div>
        <KycStepper />
        <div>
          <Personalnfo />
        </div>
      </div>
     
    </div>
  );
};

export default page;
