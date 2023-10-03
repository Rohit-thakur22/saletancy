import AboutUs from "@/components/common/about-us/AboutUs";
import Companies from "@/components/common/company-testimonial/Companies";
import Performance from "@/components/common/performance-container/Performance";
import Testimonial from "@/components/common/testimonial/Testimonial";
import BookBanner from "@/components/shared/BookBanner";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="w-full">
        <div
          className="bg-blend-overlay w-full h-[800px]  bg-cover object-fill"
          style={{
            backgroundImage: "url(/images/home-banner.png)",
          }}
        >
          <div className="w-full flex justify-evenly items-center h-full mx-auto p-2">
            <div className="w-[400px] md:w-[500px] p-2 flex flex-col items-start space-y-4">
              <h1 className="p-2 uppercase font-semibold text-[#056A67] bg-[#92FEBE] rounded-full text-center md:text-start">
                #1 GLOBAL SALES AND MARKETING COMPANY
              </h1>
              <p className="text-white text-2xl md:text-5xl font-bold text-center md:text-start">
                Everything you need to outperform your competitors.
              </p>
              <p className="text-xl md:text-2xl text-[#D2D2D2] font-semibold text-center md:text-start">
                Get your Branding, Marketing, Lead Generation and Sales running
                on top gear, with the most trusted global sales and marketing
                company.
              </p>
              <div className="flex flex-col md:flex-row justify-start gap-6 items-center w-full">
                <button className="p-4 min-w-max text-[#262626] bg-[#37ED81] rounded-full font-bold flex gap-2 items-center">
                  Get Started <AiOutlineArrowRight className="text-[#262626]" />
                </button>
                <p className="text-white underline font-semibold text-xl">
                  Read success stories
                </p>
              </div>
            </div>
            <div
              className="hidden md:block h-[500px] w-[400px] bg-cover object-fill rounded-full"
              style={{
                backgroundImage: "url(/images/home-banner-image.png)",
              }}
            >
              <div className="bg-gradient-to-b from-[#03081B] to-[#fdfdfe00]  h-[500px] w-[400px] rounded-full relative">
                <Image
                  src={"/images/home-banner-icon.png"}
                  width={100}
                  height={100}
                  className="absolute top-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Companies />
      <Performance />
      <AboutUs/>
      <Testimonial/>
      <BookBanner/>
    </>
  );
};

export default Home;
