"use client";
import React from "react";
import { DM_Sans, Poppins, Roboto } from "next/font/google";
import { VscFolderActive } from "react-icons/vsc";
import { RiPassPendingFill } from "react-icons/ri";
import { LiaPortraitSolid } from "react-icons/lia";
import { PiCurrencyDollarBold } from "react-icons/pi";
import DashboardCards from "./DashboardCards";
import Image from "next/image";
import prokyc from "../../images/prokycc.png";
import Button from "../globalComponents/Button";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cards = [
  {
    id: 1,
    name: "Active Job Posting",
    icon: <VscFolderActive />,
    no: 10,
    stat: "Active Jobs",
    border: "border-[#003271]",
    color: "#003271",
    bg: "#BAF4E6",
  },
  {
    id: 2,
    name: "Pending Requests",
    icon: <RiPassPendingFill />,
    no: 10,
    color: "#F9C846",
    stat: "Pending requests",
    border: "border-[#FF6815]",
    bg: "#F9C84640",
  },
  {
    id: 3,
    name: "Completed Jobs",
    icon: <LiaPortraitSolid />,
    no: 10,
    color: "#003271",
    stat: "Jobs Completed",
    border: "border-[#003271]",
    bg: "#F9E0F3",
  },
  {
    id: 4,
    name: "Earnings",
    icon: <PiCurrencyDollarBold />,
    no: "$2500",
    color: "#14BA6D",
    stat: "Active Jobs",
    border: "border-[#14BA6D]",
    bg: "#BAF4E6",
  },
];

const DashBoardIntro = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const seeShow = () => {
    setShow((show) => !show);
  };
  return (
    <div className="py-4">
      <div>
        <h1 className={`${dm_sans.className} font-bold text-2xl`}>DashBoard</h1>
        <p
          className={`${poppins.className} text-[#737380] font-medium text-sm`}
        >
          Hi <span className="font-bold text-black">{user?.firstName  || "there"},</span> welcome back to GigLink!
        </p>
      </div>

      <div className="grid  grid-cols-2 md:grid-cols-4 gap-4 py-8">
        {cards.map((card) => (
          <div key={card.id} className={`border rounded-2xl ${card.border}`}>
            <DashboardCards
              name={card.name}
              icon={card.icon}
              no={card.no}
              stat={card.stat}
              border={card.border}
              color={card.color}
              bg={card.bg}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:px-50 items-center justify-center  text-center">
        <Image src={prokyc} className="w-full max-w-md" alt="img" />
        <h1 className={`${poppins.className} font-bold md:text-xl pb-2 pt-8`}>
          Complete Your KYC to Unlock Your Dashboard
        </h1>
        <p className={`text-sm md:text-base font-medium ${roboto.className}`}>
          To start receiving jobs, managing bookings and earning on GigLink, you
          need to verify your identity and business Information.
        </p>
        <Link
          className="bg-[#003271] my-4 w-full max-w-md
 text-white rounded-2xl py-2"
          href="/pages-providers/kyc"
        >
          Start KYC Verfication
        </Link>
        <div
          className={`bg-[#FFE1D0] ${roboto.className} w-full max-w-md
 p-8  rounded-2xl }`}
        >
          <h1 className="font-extrabold text-sm md:text-base ">
            Quick Tips to Get Started!!
          </h1>
          <ul className="py-2 list-disc space-y-2 w-full">
            <li className="font-light text-xs">
              Complete Your KYC Verify your identity and business details to
              unlock full access to bookings and payments
            </li>
            <li className="font-light text-xs">
              Set Up Your Profile Add your service categories, location, and a
              clear profile picture to attract more clients
            </li>
            <li className="font-light text-xs">
              Stay Available Keep your availability updated so clients can
              easily book your services.
            </li>
            <li className="font-light text-xs">
              Respond Quickly Accept or decline new leads fast — fast responders
              get booked more often.
            </li>
            <li className="font-light text-xs">
              Deliver Great Service Positive reviews = higher visibility + more
              jobs.
            </li>
            <li className="font-light text-xs">
              Update Payment Info Ensure your bank details are correct to
              receive payments without delays
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardIntro;
