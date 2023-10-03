'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  //   //* state for nav handle
  const [openNav, setOpenNav] = useState();

  //   //* handle Nav bar open function
  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="absolute top-0 z-50 text-white p-4 md:px-10 w-full py-8">
      <div className="flex  justify-evenly w-full gap-6">
        <div className="flex items-center relative md:gap-14">
          <div className="border-2 border-white  rounded-full p-4 bg-[#03081b] z-50">
            <Link href={"/"}>
              <Image
                src={"/icons/logo1.png"}
                width={500}
                height={500}
                className="w-36 hidden xl:flex"
              /> <Image
                src={"/icons/logo-res.png"}
                width={10}
                height={10}
                className="  xl:hidden"
              />
            </Link>
          </div>
          <div className="absolute left-[19%] -z-10 ">
            <Image
              src={"/images/navbar-ractangle.png"}
              width={500}
              height={500}
              className="w-20 hidden xl:flex"
            />
          </div>
          <div className="hidden xl:flex border-2 border-white  rounded-full p-4 bg-[#03081b] z-50">
            <ul className="hidden  xl:flex w-full items-center justify-end box-border xl:space-x-16 lg:space-x-8 space-x-4 whitespace-nowrap ">
              <div className="">
                <div className="group inline-block relative">
                  <Link
                    href={"#"}
                    className={`flex justify-between items-center gap-3 text-xl font-semibold`}
                  >
                    Solutions{" "}
                    <Image
                      src={"/icons/down-arrow.png"}
                      width={15}
                      height={0}
                    />
                  </Link>

                  <ul className="absolute hidden top-[45px] rounded-3xl text-gray-700  group-hover:block shadow w-[1000px] min-h-max h-[420px]  bg-white ">
                    <div className="w-full flex justify-between gap-5">
                      <div className="bg-[#35447E] rounded-3xl h-[420px] p-4 flex flex-col justify-center items-center w-[25%] gap-4">
                        <h1 className="text-white text-2xl font-bold text-center whitespace-break-spaces">
                          Make way for more wins with Saletancy
                        </h1>
                        <button className="text-[#262626] bg-[#37ED81] p-2 flex gap-2 items-center rounded-3xl">
                          Get Started{" "}
                          <AiOutlineArrowRight className="text-[#262626]" />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 whitespace-break-spaces p-2 w-[75%]">
                        <div className="space-y-3">
                          <h1 className="text-[#979797] font-bold">
                            Marketing Activation
                          </h1>
                          <div className="space-y-2">
                            <div>
                              <h1 className="text-base font-bold">
                                Branding solutions
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Digital Marketing
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Influencers Marketing{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Virtual Event Marketing{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h1 className="text-[#979797] font-bold">
                            Sales support{" "}
                          </h1>
                          <div className="space-y-2">
                            <div>
                              <h1 className="text-base font-bold">
                                B2B Lead generation{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                B2B Sales Data{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Sales enablement{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Sales Staffing{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h1 className="text-[#979797] font-bold">
                            Hire Dedicated Resources{" "}
                          </h1>
                          <div className="space-y-2">
                            <div>
                              <h1 className="text-base font-bold">
                                Outbound SDRs{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Inbound SDRs{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Digital marketers{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Designers{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="group inline-block relative">
                  <Link
                    href={"#"}
                    className={`flex justify-between items-center gap-3 text-xl font-semibold `}
                  >
                    Industries{" "}
                    <Image
                      src={"/icons/down-arrow.png"}
                      width={15}
                      height={0}
                    />
                  </Link>

                  <ul className="absolute hidden top-[45px] rounded-3xl text-gray-700  group-hover:block shadow w-[1000px] min-h-max h-[420px]  bg-white ">
                    <div className="w-full flex justify-between gap-5">
                      <div className="bg-[#35447E] rounded-3xl h-[420px] p-4 flex flex-col justify-center items-center w-[25%] gap-4">
                        <h1 className="text-white text-2xl font-bold text-center whitespace-break-spaces">
                          Make way for more wins with Saletancy
                        </h1>
                        <button className="text-[#262626] bg-[#37ED81] p-2 flex gap-2 items-center rounded-3xl">
                          Get Started{" "}
                          <AiOutlineArrowRight className="text-[#262626]" />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 whitespace-break-spaces p-2 w-[75%]">
                        <div className="space-y-3">
                          <h1 className="text-[#979797] font-bold">
                            Marketing Activation
                          </h1>
                          <div className="space-y-2">
                            <div>
                              <h1 className="text-base font-bold">
                                Branding solutions
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Digital Marketing
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Influencers Marketing{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Virtual Event Marketing{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h1 className="text-[#979797] font-bold">
                            Sales support{" "}
                          </h1>
                          <div className="space-y-2">
                            <div>
                              <h1 className="text-base font-bold">
                                B2B Lead generation{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                B2B Sales Data{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Sales enablement{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Sales Staffing{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h1 className="text-[#979797] font-bold">
                            Hire Dedicated Resources{" "}
                          </h1>
                          <div className="space-y-2">
                            <div>
                              <h1 className="text-base font-bold">
                                Outbound SDRs{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Inbound SDRs{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Digital marketers{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                            <div>
                              <h1 className="text-base font-bold">
                                Designers{" "}
                              </h1>
                              <p className="text-[#979797] text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>{" "}
              <div className="">
                <div className="group inline-block relative">
                  <Link
                    href={"#"}
                    className={`flex justify-between items-center gap-3 text-xl font-semibold`}
                  >
                    Clients{" "}
                    {/* <Image
                      src={"/icons/down-arrow.png"}
                      width={15}
                      height={0}
                    /> */}
                  </Link>

                  <ul
                    className="absolute hidden  text-gray-700 pt-1 group-hover:block shadow w-28 mx-auto text-center bg-white "
                    style={{
                      insetInlineStart: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <Link href={"#"} className="text-center">
                      <li className="capitalize text-lg hover:text-red-600 text-gray-400 font-semibold">
                        About us
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              {/* <Link href={"/#"} className={`capitalize text-lg `}>
                <li
                  className={`flex justify-between items-center gap-3 text-xl font-semibold`}
                >
                  Blog{" "}
                  <Image src={"/icons/down-arrow.png"} width={15} height={0} />
                </li>
              </Link>{" "} */}
              {/* <Link href={"#"} className="capitalize text-lg">
          <li>Library</li>
        </Link> */}
              <Link href={"/#"} className={`capitalize text-lg `}>
                <li
                  className={`flex justify-between items-center gap-3 text-xl font-semibold`}
                >
                  Resources{" "}
                  {/* <Image src={"/icons/down-arrow.png"} width={15} height={0} /> */}
                </li>
              </Link>
              {""}
            </ul>
          </div>
        </div>
        <div className="border-2 border-white  rounded-full p-2 md:p-4 bg-[#03081b] min-w-max">
          <Link href={"/#"} className={`capitalize  `}>
            <li
              className={`flex justify-between items-center gap-2 text-lg md:text-xl font-semibold h-full`}
            >
              Contact us{" "}
              {/* <Image src={"/icons/down-arrow.png"} width={15} height={0} /> */}
            </li>
          </Link>
        </div>
        <div className="xl:hidden border-2 border-white rounded-full flex items-center justify-center h-14 w-14 p-2" onClick={handleNav}>
          <HiMenuAlt1 size={25} />
        </div>
        <div
          className={
            openNav
              ? " xl:hidden fixed left-0 top-0 w-full h-screen bg-black/60 z-50"
              : ""
          }
        >
          <div
            className={
              openNav
                ? "fixed left-0 top-0 w-[85%] sm:w-[70%] md:w-[45%] h-screen  bg-[#ffffff]  p-8 ease-in duration-500 overflow-y-auto z-50"
                : "fixed left-[-100%] top-0 w-[85%] sm:w-[70%] h-screen md:w-[45%] p-10 ease-in duration-500 "
            }
          >
            <div className="flex w-full items-center justify-evenly ">
              <div className="rounded-full border-2 border-gray-600 p-4">
                <Image
                  src={"/icons/logo-res2.png"}
                  width={10}
                  height={10}
                  className="xl:hidden"
                />
              </div>
              <div className="border-2 border-gray-600  rounded-full p-2 md:p-4 bg-[white] min-w-max">
                <Link href={"/#"} className={`capitalize  `}>
                  <li
                    className={`flex justify-between items-center gap-2 text-lg md:text-xl font-semibold h-full text-gray-600`}
                  >
                    Contact us{" "}
                    {/* <Image src={"/icons/down-arrow.png"} width={15} height={0} /> */}
                  </li>
                </Link>
              </div>
              <div
                className="rounded-3xl shadow-lg  p-3 cursor-pointer border border-black"
                onClick={handleNav}
              >
                <CgClose className="text-black shadow-black" />
              </div>
            </div>
            <ul className="flex flex-col justify-start  py-4  space-y-8 whitespace-nowrap text-black  mt-10 ">
              <Link href={"/#"} className="border-b-2 p-2">
                <li
                  onClick={() => {
                    setOpenNav(false);
                  }}
                  className=" text-2xl font-bold"
                >
                  Solutions
                </li> 
              </Link>{" "}
              <Link href={"/#"} className="border-b-2 p-2">
                <li
                  onClick={() => {
                    setOpenNav(false);
                  }}
                  className=" text-2xl font-bold"
                >
                  Industries
                </li>
              </Link>
              <Link href={"/#"} className="border-b-2 p-2">
                <li
                  onClick={() => {
                    setOpenNav(false);
                  }}
                  className=" text-2xl font-bold"
                >
                  Clients
                </li>
              </Link>
              <Link href={"/#"} className="border-b-2 p-2">
                <li
                  onClick={() => {
                    setOpenNav(false);
                  }}
                  className=" text-2xl font-bold"
                >
                  About us                </li>
              </Link><Link href={"/#"}className="border-b-2 p-2" >
                <li
                  onClick={() => {
                    setOpenNav(false);
                  }}
                  className=" text-2xl font-bold"
                >
                  Resources                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
