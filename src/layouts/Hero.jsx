import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaStarOfLife } from "react-icons/fa";

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const items = [
    { label: "Website Design" },
    { label: "Social Media Management" },
    { label: "Paid Ads" },
    { label: "Logo Design" },
    { label: "WhatsApp Automation" },
  ];

  return (
    <div className="" id="home">
      <div className="relative flex flex-col max-lg:h-screen max-lg:justify-center items-center max-lg:pt-10 gap-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img
          src="https://res.cloudinary.com/dck3betif/image/upload/v1758524024/2151339742_r36wjl.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Hero Section */}
      <section className="relative w-full max-w-[1220px] gap-10 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Background Grid Overlay */}
        <div className="absolute inset-0 opacity-40 -z-10">
          <div className="absolute inset-0 bg-repeat bg-[size:80px_80px] md:bg-[size:100px_100px] bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cline x1=%270%27 y1=%270%27 x2=%27100%27 y2=%270%27 stroke=%27%23ccc%27 stroke-width=%271%27 /%3e%3cline x1=%270%27 y1=%27100%27 x2=%27100%27 y2=%27100%27 stroke=%27%23ccc%27 stroke-width=%271%27 /%3e%3cline x1=%270%27 y1=%270%27 x2=%270%27 y2=%27100%27 stroke=%27%23ccc%27 stroke-width=%271%27 /%3e%3cline x1=%27100%27 y1=%270%27 x2=%27100%27 y2=%27100%27 stroke=%27%23ccc%27 stroke-width=%271%27 /%3e%3c/svg%3e')]"></div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex-1 max-lg:text-center flex flex-col text-white items-start max-lg:items-center py-5 space-y-6 text-left">
          <h1 className="text-4xl font-amiri sm:text-4xl md:text-[4.6rem] font-extrabold leading-tight">
            Luxury Digital Solutions for Dubai Visionaries
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-lg max-lg:text-center">
            From iconic websites to high-converting campaigns <br /> we build
            brands that shine.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="bg-gradient-to-r from-amber-600 to-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105">
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 max-lg:hidden flex-1 mt-8 md:mt-0 flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-full">
            <img
              src="https://res.cloudinary.com/dck3betif/image/upload/v1758525251/Gemini_Generated_Image_p0jzecp0jzecp0jz_1_bb9h9f.png"
              alt="Oliver Scott"
              className="w-full h-auto -scale-x-100 shadow-2xl transform transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      
    </div>
    {/* Skills Section */}
      <section className="bg-gray-300/20 w-full flex justify-center items-center px-2 sm:px-4 md:px-6 py-4 text-white text-center">
        <div className="w-full max-w-[1200px]">
          <Slider {...settings}>
            {items.map((item, i) => (
              <div key={i}>
                <div className="flex justify-center items-center space-x-6 sm:space-x-14">
                  <span className="max-lg:text-[10px] sm:text-lg md:text-2xl font-bold">
                    {item.label}
                  </span>
                  <span className="text-lg sm:text-xl md:text-3xl text-yellow-400">
                    <FaStarOfLife />
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
