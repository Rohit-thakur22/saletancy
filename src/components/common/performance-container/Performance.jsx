import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Performance = () => {
  const perArray = [
    {
      id: 1,
      img: "/icons/per1.svg",
      title: "B2B Lead Generation Services",
      content:
        "Capture potential customers using our lead generation and appointment setting services.",
    },
    {
      id: 2,
      img: "/icons/per2.svg",
      title: "B2B Database Services",
      content:
        "Get the most accurate B2B contact data — from direct dials to verified email addresses",
    },
    {
      id: 3,
      img: "/icons/per3.svg",
      title: "Talent Solution",
      content:
        "Recruitment and staffing services for companies seeking Sales Reps, Sales Engineers, and Sales Leaders.",
    },
    {
      id: 4,
      img: "/icons/per4.svg",
      title: "Digital Marketing Services",
      content:
        "Performance-driven digital marketing services to enhance online presence and success.",
    },
    {
      id: 5,
      img: "/icons/per5.svg",
      title: "Hire Dedicated Resources",
      content:
        "Hire pre-vetted sales and marketing professionals on demand to meet your business needs.",
    },
    {
      id: 6,
      img: "/icons/per6.svg",
      title: "Other Services",
      content:
        "Still Haven't Found What You're Looking For? We have more for you. d What You're Looking For? We have more for you.",
    },
  ];
  return (
    <div className="w-full py-16 p-2">
      <h1 className="text-center font-extrabold tracking-wide text-2xl sm:text-4xl">
        Performance-Driven Sales and Marketing Solutions{" "}
      </h1>
      <h1 className="text-center text-[#2E2F31] font-bold text-xl">
        At Saletancy, marketing and sales are in our DNA{" "}
      </h1>
      <div className=" container p-2  md:px-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {perArray.map((item) => {
          return (
            <div
              key={item.id}
              className="border-2 p-4 sm:px-8 rounded-3xl h-[400px] flex flex-col justify-evenly items-start"
            >
              <Image src={item.img} width={100} height={100} />
              <h1 className="font-bold text-2xl">{item.title}</h1>
              <p className="text-[#262626] text-base">{item.content}</p>
              <button className="flex gap-2 text-[#056A67] font-bold text-xl items-center">
                Learn more <AiOutlineArrowRight />{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Performance;
