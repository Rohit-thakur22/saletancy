'use client'
import React from "react";
import CompanySlider from "./CompanySlider";

const Companies = () => {
  return (
    <div className="w-full py-10 p-4">
      <h1 className="text-center font-bold text-2xl ">
        Join the 200+ companies growing with us.
      </h1>
      <h1 className="text-center text-[#2E2F31] font-bold text-xl">
        They are here, where are you?
      </h1>
      <CompanySlider />
    </div>
  );
};

export default Companies;
