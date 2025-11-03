import React from "react";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import one from "../../images/portraitone.png";
import two from "../../images/portraitwo.png";
import three from "../../images/portraitone.png";
import four from "../../images/portraitwo.png";
import WhatOurUserComp from "./re-usable-compnents/WhatOurUserComp";
import { FaQuoteRight } from "react-icons/fa";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const users = [
    {
        id: 1,
        img: one,
        desc: "I booked a last minute plumber through GigLink, smooth, secure, and stress-free!",
        name: "Grace A., Amos",
        role: "Home Owner",
    },
    {
        id: 2,
        img: two,
        desc: "Finally, a single platform where I can handle home repairs and hire short term staff for my office!",
        name: "John Chris",
        role: "Student",
    },
    {
        id: 3,
        img: three,
        desc: "As a service provider, GigLink helped me find new clients for my event decor business within days",
        name: "Loveth A., Mary",
        role: "Event & Decorator",
    },
    {
        id: 4,
        img: four,
        desc: "I booked a last minute plumber through GigLink, smooth, secure, and stress-free!",
        name: "Herbet Ken",
        role: "CE0",
    },
];

const WhatUsersSay = () => {
    return (
        <div className={`bg-[#002A5E] px-6 sm:px-12 md:px-18 py-10`}>
            <div className="max-w-7xl mx-auto w-[90%]">
                <div className="text-center">
                    <h1
                        className={`${poppins.className} text-bgcolor-50 text-3xl font-bold text-center py-6 bg-[#002A5E]`}
                    >
                        What Our User Say
                    </h1>
                    <p
                        className={`${inter.className} text-bgcolor-50 text-xs sm:text-sm font-[400px] text-center mb-10`}
                    >
                        Thousands of client and service providers trust GigLink
                        to connect, collaborate and grow. Here is what a few of
                        them have to say
                    </p>
                </div>

                <div
                    data-aos="fade-right"
                    className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    {users.map((user) => (
                        <div key={user.id} className="px-3 py-6">
                            <WhatOurUserComp user={user} />
                        </div>
                    ))}
                </div>
                <div className="sm:hidden flex overflow-x-scroll gap-3">
                    {users.map((user) => (
                        <div key={user.id} className="px-3 min-w-[300px] py-6">
                            <WhatOurUserComp user={user} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatUsersSay;
