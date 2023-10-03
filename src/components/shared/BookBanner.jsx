import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const BookBanner = () => {
  return (
    <div
      className="bg-cover object-cover h-[1000px] w-full"
      style={{
        backgroundImage: "url(/images/banner-down.png)",
      }}
    >
      <div className="container p-4 md:px-20 space-y-28 h-screen w-full mx-auto">
        <div className=" bg-[#04091C] h-[320px] rounded-3xl relative w-full">
          <Image
            src={"/images/about-bg3.svg"}
            width={500}
            height={500}
            className="absolute  right-0 h-full"
          />
          <div className="flex flex-col md:flex-row  justify-evenly w-full absolute z-50 items-center p-6 h-full">
            <h1 className=" text-3xl text-center md:text-start md:text-4xl text-white font-extrabold w-1/2">
              Make way for more wins with Saletancy
            </h1>
            <button className="p-4 min-w-max text-xl md:text-2xl text-[#262626]  font-bold flex gap-2 items-center bg-[#37ED81] rounded-full">
              Book a consultation{" "}
              <AiOutlineArrowRight className="text-[#262626]" />
            </button>
          </div>
        </div>

        <div className="h-[300px] p-2 md:h-[150px] rounded-3xl border-2 border-black flex items-center justify-center flex-col md:flex-row md:justify-between gap-5 w-full">
          <p className="text-3xl font-bold text-[#262626] text-center w-1/2">
            We’re in many areas to serve you.
          </p>
          <p className="w-1/2 text-[#056A67] flex flex-col md:flex-row  font-bold text-2xl tracking-widest  text-center flex-wrap">
            <span>
              NOIDA
            </span>
            <span className="md:block hidden">|</span>
            <span>
              BENGALURU
            </span>
            <span className="md:block hidden">|</span> <span>
              LONDON
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;
