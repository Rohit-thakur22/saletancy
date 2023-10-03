import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="bg-[#04091C] h-[1140px] sm:h-[1000px] md:h-[720px] relative bottom-0">
      <Image
        src={"/images/footer-img2.png"}
        width={500}
        height={500}
        className="absolute right-0 hidden md:inline-block"
      />
      <div className="absolute z-50 flex flex-col-reverse md:flex-row justify-between items-start p-4 md:p-20 w-full gap-4">
        <div className="flex flex-col justify-center items-center md:items-start md:justify-between  gap-6 border-b border-white md:border-0 py-5 md:w-[30%] w-full">
          <Image
            src={"/icons/logg-main.png"}
            width={80}
            height={80}
            className="hidden md:inline-block "
          />
          <div className="flex  flex-col gap-4">
            <p className="flex gap-2 items-center">
              <IoLocationOutline className="text-white text-xl" />
              <span className="text-white ">202, H-107, Sector-63, Noida</span>
            </p>
            <p className="flex gap-2 items-center">
              <BsTelephone className="text-white text-xl" />
              <span className="text-white ">+91 - 70178 99611</span>
            </p>
            <p className="flex gap-2 items-center">
              <IoMailUnreadOutline className="text-white text-xl" />
              <span className="text-white ">hello@saletancy.com</span>
            </p>
          </div>
          <div className="flex justify-start gap-8">
            <RiFacebookCircleFill className="text-white text-3xl" />{" "}
            <AiFillTwitterCircle className="text-white text-3xl" />{" "}
            <TiSocialLinkedinCircular className="text-white text-3xl" />{" "}
          </div>
        </div>
        <div className="border-t border-b md:[70%] border-white md:border-0 container  items-start p-4    mx-auto grid  grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-bold text-white">
              Marketing Activation
            </h1>
            <div className="space-y-2">
              <p className="text-white text-start">Branding solutions</p>
              <p className="text-white text-start">Digital Marketing</p>
              <p className="text-white text-start">Influencers Marketing</p>
              <p className="text-white text-start">Virtual Event Marketing</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-bold text-white">Sales support </h1>
            <div className="space-y-2">
              <p className="text-white text-start">B2B Lead generation</p>
              <p className="text-white text-start">B2B Sales Data </p>
              <p className="text-white text-start">Sales enablement</p>
              <p className="text-white text-start">Sales Staffing </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-bold text-white">Hire Resources </h1>
            <div className="space-y-2">
              <p className="text-white text-start">Outbound SDRs </p>
              <p className="text-white text-start">Inbound SDRs </p>
              <p className="text-white text-start">Digital marketers </p>
              <p className="text-white text-start">Designers</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-bold text-white">Resources </h1>
            <div className="space-y-2">
              <p className="text-white text-start">Blogs</p>
              <p className="text-white text-start">E-Books </p>
              <p className="text-white text-start">Cost Comparison </p>
              <p className="text-white text-start">FAQs </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-bold text-white">Clients </h1>
            <div className="space-y-2">
              <p className="text-white text-start">Success Stories </p>
              <p className="text-white text-start">Client’s Review </p>
              <p className="text-white text-start">Referral Programme </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-bold text-white">Company </h1>
            <div className="space-y-2">
              <p className="text-white text-start">The Saletancy </p>
              <p className="text-white text-start">Our Team </p>
              <p className="text-white text-start">Why Saletancy? </p>
              <p className="text-white text-start">Our Approach </p>
              <p className="text-white text-start">Careers </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 flex md:flex-row flex-col items-center md:items-start justify-center text-white w-full gap-2 px-10">
        <span className="text-center">© Copyright 2023 Saletancy Consulting Private Limited </span>{" "} <span className="md:block hidden">|</span>
        <span>
          Made with ❤️ by
          Saletancy </span> <span className="md:block hidden">|</span>
        <span> Privacy Policy Terms & Condition</span>
      </div>
    </div>
  );
};

export default Footer;
