import React from "react";
import about from "../images/creators.png";
import PagesProp from "../components/homePageComponents/re-usable-compnents/PagesProp";
import { Poppins } from "next/font/google";
import devs from "../images/meeting.png";
import Image from "next/image";
import two from "../images/aboutwo.png";
import three from "../images/abouthree.png";
import four from "../images/aboutfour.png";
import one from "../images/aboutone.png";
import { Roboto } from "next/font/google";
import Button from "../components/globalComponents/Button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutUs = ({ title, img }) => {
  return (
    <div
      className={`${poppins.className} pt-22 pb-10 px-6 sm:px-12 md:px-18 max-w-[1440px] mx-auto `}
    >
      <div>
        <PagesProp img={about} title="About Us" />
        <div className="space-y-7">
          <p className="font-[400px] pt-10 text-base">
            At TaskShift, we are redefining how people find, hire, and grow
            within the service economy. We understand the everyday challenges
            that clients and service providers face from struggling to find
            trusted professionals, to small businesses finding it hard to get
            consistent leads or manage bookings efficiently. TaskShift was
            created to bridge that gap
          </p>
          <p className="font-[400px] ">
            Our platform connects residential clients (like homeowners and
            renters) and business clients (like SMEs, event organizers, and
            offices) with verified, reliable service providers across multiple
            industries, all in one place. But we go beyond just connecting
            people
          </p>
          <p className="font-[400px]">
            TaskShift empowers providers with the tools to grow their businesses
            from smart lead generation and secure payments to analytics and
            visibility features that help them thrive. For clients, it means
            peace of mind: every provider is verified, reviewed, and trusted,
            ensuring every booking is smooth, secure, and transparent
          </p>
        </div>
        <div className="bg-[#003271] mb-6 mt-9 p-6 space-y-3 rounded-md text-white">
          <h1 className="font-bold text-xl text-left">Our Mission</h1>
          <p className="font-[400px]">
            To build the most trusted and versatile service marketplace that
            empowers clients to find quality services easily and helps providers
            expand their business with confidence
          </p>
        </div>
        <div className="relative py-10">
          <div className="relative h-[350px] sm:h-[420px] pr-20 w-full">
            <Image
              src={devs}
              alt="devs"
              fill
              className="object-cover rounded-md"
              priority
            />

            <div className="absolute right-6 bottom-6 sm:right-10 sm:bottom-10 bg-[#2B5489B2]/40 backdrop-blur-sm text-white p-5 sm:p-8 rounded-xl max-w-[400px]">
              <h1 className="font-semibold text-lg sm:text-xl mb-3">
                Why Choose GigLink?
              </h1>

              <section
                className={`space-y-2 ${poppins.className} text-sm sm:text-base leading-relaxed`}
              >
                <div className="flex items-center gap-5">
                  <div className="bg-[#003271] p-1">
                    <Image className="w-10" src={one} alt="one" width={50} />
                  </div>

                  <p className="font-[400px]">
                    Unified marketplace for all service types
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-[#003271] p-1">
                    <Image className="w-10" src={two} alt="two" width={50} />
                  </div>
                  <p>Secure payment and verified providers.</p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-[#003271] p-1">
                    <Image
                      className="w-10"
                      src={three}
                      alt="three"
                      width={50}
                    />
                  </div>
                  <p>Built-in business tools for providers</p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-[#003271] p-1">
                    <Image className="w-10" src={four} alt="four" width={50} />
                  </div>
                  <p>Real-time support and transparent reviews</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="bg-secondary-400 max-w-[500px] flex flex-col justify-center mx-auto text-center space-y-5 p-10 rounded-2xl">
          <h1 className={`${roboto.className} font-bold text-2xl text-[#003271]`}>Join the Community of Providers</h1>
          <p>Join our fast-growing community of artisans, improve your network ad just collaborate, there’s power in numbers!</p>
          <div>
            <Button variant="primary" size="md">Join our community</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
