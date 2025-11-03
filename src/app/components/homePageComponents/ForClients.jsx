import React from "react";
import LandingPageCard from "./re-usable-compnents/LandingPageCard";
import handshake from "../../images/handshakeman.png";
import client from "../../images/clientgirl.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const cards = [
    {
        id: 1,
        no: "1",
        intro: "Create an account",
        desc: "Sign up in seconds, tell us what you need, and we will match you with trusted providers near you",
    },
    {
        id: 2,
        no: "2",
        intro: "Browse your services",
        desc: "Describe your task or explore verified providers in categories like cleaning, repairs, delivery, and more",
    },
    {
        id: 3,
        no: "3",
        intro: "Hire & Pay securely",
        desc: "Chat, negotiate, and make payments safely through GigLink",
    },
    {
        id: 4,
        no: "4",
        intro: "Track Progress",
        desc: "Track progress and rate your experience after completion",
    },
];
const ForClients = () => {
    return (
        <div className="mx-auto bg-[#003271] gap-20 py-14 ">
            <div className="max-w-7xl w-[90%] mx-auto gap-[8.188rem] flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2">
                    <h1
                        className={`font-extrabold text-white text-3xl ${poppins.className}`}
                    >
                        For Clients
                    </h1>
                    <p
                        className={`font-light text-sm text-white py-3 ${inter.className}`}
                    >
                        Get Things Done Fast!
                    </p>
                    <div className=" flex flex-col">
                        {cards.map((card) => (
                            <div
                                className="bg-white rounded-md p-4 my-1"
                                key={card.id}
                            >
                                <LandingPageCard
                                    num={card.no}
                                    head={card.intro}
                                    text={card.desc}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="bg-[#FF6815] w-50 my-10 mx-auto text-white px-3 py-1.5 rounded-full">
                        Join as Client
                    </button>
                </div>

                <div className="relative w-full md:w-1/2 h-[33.563rem] md:h-182.5">
                    <Image
                        className="absolute w-[17.563rem] md:w-95.5 h-full z-0 object-cover object-center"
                        alt="handshake"
                        src={handshake}
                        // width={300}
                    />

                    <Image
                        className="z-20 absolute bottom-6 md:bottom-10 md:h-[39.063rem] h-[28.75rem] md:w-[17.438rem] w-[12.813rem] md:left-60 right-10 md:right-20 sm:left-56"
                        alt="client"
                        src={client}
                        // width={220}
                    />
                </div>
            </div>

            <div className="max-w-7xl w-[90%] mx-auto gap-[8.188rem] my-[8.5rem] flex flex-col-reverse md:flex-row-reverse justify-center items-center">
                <div className="w-full md:w-1/2">
                    <h1
                        className={`font-extrabold text-white text-3xl ${poppins.className}`}
                    >
                        For Clients
                    </h1>
                    <p
                        className={`font-light text-sm text-white py-3 ${inter.className}`}
                    >
                        Get Things Done Fast!
                    </p>
                    <div className=" flex flex-col">
                        {cards.map((card) => (
                            <div
                                className="bg-white rounded-md p-4 my-1"
                                key={card.id}
                            >
                                <LandingPageCard
                                    num={card.no}
                                    head={card.intro}
                                    text={card.desc}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="bg-[#FF6815] w-50 my-10 mx-auto text-white px-3 py-1.5 rounded-full">
                        Join as Client
                    </button>
                </div>

                <div className="relative w-full md:w-1/2 h-[33.563rem] md:h-182.5">
                    <Image
                        className="absolute w-[17.563rem] md:w-95.5 h-full z-0 object-cover object-center"
                        alt="handshake"
                        src={handshake}
                        // width={300}
                    />

                    <Image
                        className="z-20 absolute bottom-6 md:bottom-10 md:h-[39.063rem] h-[28.75rem] md:w-[17.438rem] w-[12.813rem] md:left-60 right-10 md:right-20 sm:left-56"
                        alt="client"
                        src={client}
                        // width={220}
                    />
                </div>
            </div>
        </div>
    );
};

export default ForClients;
