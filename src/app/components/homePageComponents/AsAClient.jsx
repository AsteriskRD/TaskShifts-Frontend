import React from "react";
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

const facts = [
    {
        id: 1,
        head: "A",
        header: "As a Client",
        text: "Hire with Confidence and stop searching endlessly!",
        textwo: " From home repairs to event setups, find verified experts ready to deliver quality work fast, transparent, and on your term",
    },
    {
        id: 2,
        head: "B",
        header: "As a Service Provider",
        text: "Get Hired, Get Paid, Turn your Skill to steady income",
        textwo: "Join a growing network of verified providers, attract the right clients, and manage your bookings — all in one dashboard. ",
    },
];
const AsAClient = () => {
    return (
        <div className="bg-gradient-to-r py-[3rem] md:py-[7.563rem] mx-auto md:flex w-full justify-between from-[#003271]  to-[#FFFFFF]">
            <div className="max-w-7xl mx-auto flex-col-reverse md:flex-row flex gap-[1rem] md:gap-[8.438rem] justify-center w-[90%] items-center">
                <div
                    data-aos="fade-right"
                    className={`${inter.className} md:w-1/2 py-5`}
                >
                    {facts.map((fact) => (
                        <div
                            key={fact.id}
                            className="flex bg-white  justify-between p-4 my-5 rounded-md gap-5"
                        >
                            <div>
                                <h1 className="rounded-full w-6 h-6 text-center font-extrabold text-white bg-[#003271]">
                                    {fact.head}
                                </h1>
                            </div>
                            <div className="space-y-4 px-5">
                                <h1 className="font-extrabold ">
                                    {fact.header}
                                </h1>
                                <p className="text-sm font-medium">
                                    {fact.text}
                                </p>
                                <p className="text-sm font-medium">
                                    {fact.textwo}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className={`py-10 md:py-0 space-y-4 md:w-1/2 ${poppins.className}`}
                >
                    <h1
                        // data-aos="fade-right"
                        className="font-extrabold text-[2.5rem] w-full md:w-[80%] text-[#003271]"
                    >
                        <span className="text-[#FF6815]">One</span> Platform,{" "}
                        <span className="text-[#FF6815]">Two</span> Paths, Hire
                        or Get Hired
                    </h1>
                    <div className="space-y-5">
                        <p className="">
                            Whether you are looking for trusted professionals or
                            new opportunities to grow your business, TaskShift
                            gives you the tools, trust, and visibility to make
                            it happen
                        </p>
                        <p className="">
                            Whether you need a reliable professional for home or
                            business, or you are a provider looking to grow ,
                            TaskShift brings you together safely
                        </p>
                    </div>
                </div>
            </div>

            {/* <div
                className={`${inter.className} md:w-1/2 md:hidden block  px-6 sm:px-12 md:px-18 py-5`}
            >
                {facts.map((fact) => (
                    <div
                        key={fact.id}
                        className="flex bg-white  justify-between p-4 my-5 rounded-md "
                    >
                        <div>
                            <h1 className="rounded-full w-6 h-6 text-center font-extrabold text-white bg-[#003271]">
                                {fact.head}
                            </h1>
                        </div>
                        <div className="space-y-4 px-5">
                            <h1 className="font-extrabold ">{fact.header}</h1>
                            <p className="text-sm font-medium">{fact.text}</p>
                            <p className="text-sm font-medium">{fact.textwo}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default AsAClient;
