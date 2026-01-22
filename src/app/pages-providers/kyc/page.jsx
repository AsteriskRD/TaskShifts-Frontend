"use client";
import React from "react";
import { DM_Sans, Inter } from "next/font/google";
import Personalnfo from "@/app/components/dashboard/BeforeKyc/Personalnfo";
import KycStepper from "@/app/components/dashboard/BeforeKyc/KycStepper";
import CardKyc from "@/app/components/dashboard/CardKyc";
import { useState } from "react";
import VerifyDocs from "@/app/components/dashboard/BeforeKyc/VerifyDocs";
import ServiceSetup from "@/app/components/dashboard/BeforeKyc/ServiceSetUp";
import { usePathname } from "next/navigation";
import KycDone from "@/app/components/dashboard/BeforeKyc/kycDone";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const KycVerifyPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [kycDone, setKycDone] = useState(false);

  const continueToNextStep = () => {
    if (currentStep >= 2) return;

    setCurrentStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  return (
    <div className="bg-bgcolor-50 max-w-[1440px] mx-auto">
      <div>
        <CardKyc />
      </div>
      <div className=" w-3/4 py-12 rounded-lg  px-6 mx-auto my-8">
        <KycStepper currentStep={currentStep} />
        <div>
          {currentStep === 0 && <Personalnfo />}
          {currentStep === 1 && (
            <VerifyDocs
              onVerificationComplete={() => {
                setCurrentStep(2);
              }}
            />
          )}
          {currentStep === 2 && (
            <ServiceSetup onFinish={() => setKycDone(true)} />
          )}
        </div>
      </div>
      {currentStep !== 1 && (
        <div className="pb-8 pt-2 mx-auto w-3/4 flex justify-between items-center">
          <button
            onClick={goToPreviousStep}
            className="bg-[#CCD6E3] cursor-pointer rounded-full py-2 text-[#003271] md:px-10 px-4"
          >
            Previous
          </button>
          <button className="bg-white border border-[#003271] cursor-pointer rounded-full py-2 text-[#003271] md:px-10 px-4">
            Save Draft
          </button>
          {currentStep < 2 && (
            <button
              onClick={continueToNextStep}
              className={`bg-[#003271] cursor-pointer rounded-full py-2 text-white md:px-10 px-4`}
            >
              Next
            </button>
          )}
        </div>
      )}
      {kycDone && <KycDone />}
    </div>
  );
};

export default KycVerifyPage;
