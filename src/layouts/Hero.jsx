import React from "react";

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
      <div className="relative flex flex-col h-screen max-lg:justify-center items-center max-lg:pt-10 gap-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute z-10 max-lg:h-screen">
          <img
            src="https://res.cloudinary.com/dck3betif/image/upload/v1758524024/2151339742_r36wjl.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Hero Section */}
        <section className="relative w-full max-w-[1220px] py-18 gap-10 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 lg:px-12">
          {/* Background Grid Overlay */}
          <div className="absolute inset-0 opacity-40 -z-10">
            <div className="absolute inset-0 bg-repeat bg-[size:80px_80px] md:bg-[size:100px_100px] bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cline x1=%270%27 y1=%270%27 x2=%27100%27 y2=%270%27 stroke=%27%23ccc%27 stroke-width=%271%27 /%3e%3cline x1=%270%27 y1=%27100%27 x2=%27100%27 y2=%27100%27 stroke=%27%23ccc%27 stroke-width=%271%27 /%3e%3cline x1=%270%27 y1=%270%27 x2=%270%27 y2=%27100%27 stroke=%27%23ccc%27 stroke-width=%271%27 /%3e%3cline x1=%27100%27 y1=%270%27 x2=%27100%27 y2=%27100%27 stroke=%27%23ccc%27 stroke-width=%271%27 /%3e%3c/svg%3e')]"></div>
          </div>

          {/* Left Content */}
          <div className="relative z-10 flex-1 flex flex-col text-white items-center max-lg:items-center py-20 space-y-6 text-center">
            <h1
              className="text-4xl font-amiri sm:text-4xl xl:max-w-[1000px] md:text-[4rem] lg:text-[4.6rem] font-extrabold leading-tight 
               bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            >
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
        </section>
      </div>
    </div>
  );
}
