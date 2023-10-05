"use client";
import React from "react";
import Link from "next/link";

import Slider from "react-slick";
import Image from "next/image";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CompanySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [
    "/icons/company1.png",
    "/icons/company2.png",
    "/icons/company3.png",
    "/icons/company4.png",
    "/icons/company5.png",
    "/icons/company6.png",
  ];
  return (
    <Slider {...settings} className="h-[20vh]">
      {images.map((item, index) => {
        return <Image src={item} width={500} height={500} key={index} />;
      })}
    </Slider>
  );
};

export default CompanySlider;
