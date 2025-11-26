"use client"
import React from "react";
import { DM_Sans, Montserrat, Open_Sans } from "next/font/google";
import { useState } from "react";
import Accordion from "../globalComponents/Accordion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const questions = [
  {
    id: 1,
    quest: "How quickly will i receive a response",
    text: "we typically respond to all inquires within 24 hours during business days",
  },
  {
    id: 2,
    quest: "Can i schedule a call with your team?",
    text: "Yes please",
  },
  {
    id: 3,
    quest: "Do you offer suport?",
    text: "Yes please",
  },
  {
    id: 4,
    quest: "Can i reach out to a provider individually?",
    text: "Yes please",
  },
  {
    id: 5,
    quest: "Is my data safe?",
    text: "Yes please",
  },
];

const HaveQuestion = () => {
    const [show, setShow] = useState(null)

   
  return (
    <div className={` px-3 sm:px-6 sm:py-12 py-16  md:px-10`}>
      <div className="bg-white rounded-2xl px-2 sm:px-12 md:px-10">
        <div className="py-6">
            <h1
          className={`${montserrat.className} font-bold sm:text-xl text-base  md:text-2xl text-center`}
        >
          Have a Question? We've Got the Answer
        </h1>
        <p
          className={`${openSans.className} pt-2 text-[#6B6565] text-sm text-center`}
        >
          Get quick and easy answers to your most common questions.
        </p>
        </div>
        <div className="flex space-y-6 py-10 flex-col">
        {questions.map((question) => (
          <div className="px-7 " key={question.id}>
            <Accordion
              quest={question.quest}
              text={question.text}
              icon={question.icon}
              id={question.id}
              show={show}
              setShow={setShow}
            />
          </div>
        ))}
      </div>
      </div>

      
    </div>
  );
};

export default HaveQuestion;
