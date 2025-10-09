import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ShowcaseSection = () => {
  const showcaseImages = [
    {
      src: "https://res.cloudinary.com/dck3betif/image/upload/v1759988743/logo_kwbhhy.png",
      type: "website",
      links: "https://drchitraendocare.com/"
    },
    {
      src: "https://res.cloudinary.com/dck3betif/image/upload/v1759988744/sprn-logo_b8ylab.png",
      type: "website",
      links: "https://sprn.in/"
    },
    {
      src: "https://res.cloudinary.com/dck3betif/image/upload/v1759988743/logo_nvu9dn.jpg",
      type: "website",
      links: "https://irefraipur.in/"
    },
    {
      src: "https://res.cloudinary.com/dck3betif/image/upload/v1759988744/favicon_mwio6y.jpg",
      type: "website",
      links: "https://muraadconstruction.com/"
    },
    {
      src: "https://res.cloudinary.com/dck3betif/image/upload/v1759990431/WhatsApp_Image_2024-04-03_at_5.01.20_PM-removebg-preview-1-1_ocvazl.png",
      type: "website",
      links: "https://coldfistfitnessclub.in/"
    },
  ];

  // React Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-black">
      <h1 className="text-center mb-20 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold">
        Portfolio
      </h1>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {showcaseImages.map((item, i) => (
            <div key={i} className="px-4">
              <a href={item.links} className="relative rounded-xl shadow-md group flex justify-center items-center">
                <img
                  src={item.src}
                  alt={`showcase-${i}`}
                  className="transition-transform grayscale hover:grayscale-0 duration-500 group-hover:scale-110 w-40 mx-auto"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ShowcaseSection;
