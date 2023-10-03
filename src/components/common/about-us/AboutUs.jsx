import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="w-full py-16">
      <h1 className="text-center font-extrabold tracking-wide text-4xl">
        We&apos;re Born to Perform{" "}
      </h1>
      <h1 className="text-center text-[#2E2F31] font-bold text-xl">
        Real numbers from real customers{" "}
      </h1>
      <div
        className="h-[2250px] sm:h-[1620px]  md:h-[1400px] bg-cover object-cover"
        style={{
          backgroundImage: "url(/images/about-bg.svg)",
        }}
      >
        <div className="h-full w-full mx-auto relative">
          <div className="w-full py-16">
            <div className=" container items-center p-6  md:px-28 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 z-50">
              <div className="bg-white border-2 border-gray-950 px-8 rounded-3xl h-[250px]   p-6 flex flex-col justify-evenly items-center">
                <Image src={"/icons/abt1.png"} width={50} height={100} />
                <p className="font-extrabold text-2xl">200+</p>
                <p className="text-[#262626] text-xl font-bold">
                  {" "}
                  Satisfied Clients
                </p>
              </div>
              <div className="bg-white border-2 border-gray-950 px-8 rounded-3xl h-[250px]   p-6 flex flex-col justify-evenly items-center">
                <Image src={"/icons/abt1.png"} width={50} height={100} />
                <p className="font-extrabold text-2xl">200+</p>
                <p className="text-[#262626] text-xl font-bold">
                  {" "}
                  Satisfied Clients
                </p>
              </div>
              <div className="bg-white border-2 border-gray-950 px-8 rounded-3xl h-[250px]   p-6 flex flex-col justify-evenly items-center">
                <Image src={"/icons/abt1.png"} width={50} height={100} />
                <p className="font-extrabold text-2xl">200+</p>
                <p className="text-[#262626] text-xl font-bold">
                  {" "}
                  Satisfied Clients
                </p>
              </div>
              <div className="bg-white border-2 border-gray-950 px-8 rounded-3xl h-[250px]   p-6 flex flex-col justify-evenly items-center">
                <Image src={"/icons/abt1.png"} width={50} height={100} />
                <p className="font-extrabold text-2xl">200+</p>
                <p className="text-[#262626] text-xl font-bold">
                  {" "}
                  Satisfied Clients
                </p>
              </div>
            </div>
          </div>
          <div className="w-full z-50 py-10 md:px-28 absolute flex justify-center md:justify-start">
            <div className="w-[400px] md:w-[500px] p-2 flex flex-col items-start space-y-4">
              <h1 className="p-2 uppercase font-semibold text-[#056A67] bg-[#92FEBE] rounded-full text-center md:text-start">
                #1 GLOBAL SALES AND MARKETING COMPANY{" "}
              </h1>
              <p className="text-white text-2xl md:text-5xl font-bold text-center md:text-start">
                Plug and Play: Your Dedicated Sales and Marketing Team{" "}
              </p>
              <p className="text-xl md:text-2xl text-[#D2D2D2] font-semibold text-center md:text-start">
                Accelerate Your Sales and Marketing Campaign in No Time. Backed
                by People, Process, Technology, and Our Proprietary Database, we
                Help You Launch and Manage Results-Driven Inbound and Outbound
                Sales and Marketing Programs.
              </p>
              <div className="flex flex-col md:flex-row justify-start gap-6 items-center w-full">
                <button className="p-4 min-w-max text-[#262626] bg-[#37ED81] rounded-full font-bold flex gap-2 items-center">
                  Book a consultation{" "}
                  <AiOutlineArrowRight className="text-[#262626]" />
                </button>
              </div>
            </div>
          </div>
          <Image
            src={"/images/about-bg3.svg"}
            width={500}
            height={500}
            className="absolute bottom-7 left-10 "
          />
          <Image
            src={"/images/about-bg2.svg"}
            width={500}
            height={500}
            className="absolute right-0 "
          />
          <div className="container items-center p-6  md:px-28 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-50 absolute bottom-0">
            <div className="z-50 flex flex-col gap-4 p-4 text-white">
              <h1 className="font-extrabold text-2xl">People</h1>
              <p className="text-[#D2D2D2]">
                We&apos;re Empowered by 110+ Highly Skilled and Passionate Sales and
                Marketing Professionals You Can Rely On
              </p>
            </div>
            <div className="z-50 flex flex-col gap-4 p-4 text-white">
              <h1 className="font-extrabold text-2xl">Process</h1>
              <p className="text-[#D2D2D2]">
                Proven Account Based Marketing Approach have generated over $480
                Mn+ Pipeline for Our Clients.
              </p>
            </div>
            <div className="z-50 flex flex-col gap-4 p-4 text-white">
              <h1 className="font-extrabold text-2xl">
                Our Proprietary Database
              </h1>
              <p className="text-[#D2D2D2]">
                30 Mn+ Company Profiles and 300 Mn+ Global Contacts, Including
                65% Direct Dial Access
              </p>
            </div>
          </div>
        </div>

        {/* */}
      </div>
    </div>
  );
};

export default AboutUs;
