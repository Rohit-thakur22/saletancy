import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="container mx-auto w-full p-4 py-16 md:px-10">
      <h1 className="text-center font-extrabold tracking-wide text-4xl">
        Customer's success stories{" "}
      </h1>
      <h1 className="text-center text-[#2E2F31] font-bold text-xl">
        Read how our customers from all different industries thrive with
        Saletancy{" "}
      </h1>
      <div className="container items-center p-6  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="border-2 rounded-3xl p-6 flex flex-col justify-evenly space-y-4">
          <div
            className="h-[200px] flex-wrap bg-cover object-fill rounded-3xl flex justify-start items-start gap-4 p-4"
            style={{
              backgroundImage: "url(/images/testimonial1.png)",
            }}
          >
            <p className="bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Sales services
            </p>
            <p className="bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Business strategy            </p>
          </div>
          <p className="font-extrabold text-xl md:text-2xl ">
            ABM Campaign propelled Bizongo with New Potential Leads
          </p>
          <div className="w-full flex justify-between flex-wrap  gap-5">
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Internet{" "}
            </p>
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              IT Software{" "}
            </p>{" "}
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              SAAS{" "}
            </p>
          </div>
          <button className="p-4 min-w-max text-2xl text-[#056A67]  font-bold flex gap-2 items-center">
            Read more <AiOutlineArrowRight className="text-[#056A67]" />
          </button>
        </div>
        <div className="border-2 rounded-3xl p-6 flex flex-col justify-evenly space-y-4">
          <div
            className="h-[200px] flex-wrap  bg-cover object-fill rounded-3xl flex justify-start items-start gap-2 p-4"
            style={{
              backgroundImage: "url(/images/testimonial1.png)",
            }}
          >
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Sales services
            </p>
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Business strategy            </p>
          </div>
          <p className="font-extrabold md:text-2xl text-xl">
            ABM Campaign propelled Bizongo with New Potential Leads
          </p>
          <div className="w-full flex justify-between flex-wrap gap-5">
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Internet{" "}
            </p>
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              IT Software{" "}
            </p>{" "}
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              SAAS{" "}
            </p>
          </div>
          <button className="p-4 min-w-max text-2xl text-[#056A67]  font-bold flex gap-2 items-center">
            Read more <AiOutlineArrowRight className="text-[#056A67]" />
          </button>
        </div>
        <div className="border-2 rounded-3xl p-6 flex flex-col justify-evenly space-y-4">
          <div
            className="h-[200px] flex-wrap bg-cover object-fill rounded-3xl flex justify-start items-start gap-4 p-4"
            style={{
              backgroundImage: "url(/images/testimonial1.png)",
            }}
          >
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Sales services
            </p>
            <p className="text-center bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Business strategy            </p>
          </div>
          <p className="font-extrabold md:text-2xl text-xl ">
            ABM Campaign propelled Bizongo with New Potential Leads
          </p>
          <div className="w-full flex justify-between flex-wrap gap-5 ">
            <p className="bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              Internet{" "}
            </p>
            <p className="bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              IT Software{" "}
            </p>{" "}
            <p className="bg-[#C6FFFD] text-[#056A67] p-2 border-2 border-[#056A67] rounded-xl font-bold">
              SAAS{" "}
            </p>
          </div>
          <button className="p-4 min-w-max text-2xl text-[#056A67]  font-bold flex gap-2 items-center">
            Read more <AiOutlineArrowRight className="text-[#056A67]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
