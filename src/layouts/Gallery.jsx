import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const images = [
    "https://res.cloudinary.com/dck3betif/image/upload/v1758702881/change_the_text_back_12_m90pvp.png",
    "https://res.cloudinary.com/dck3betif/image/upload/v1758707645/90_ia4lwn.png",
    "https://res.cloudinary.com/dck3betif/image/upload/v1758707657/cover_this_image_to_98_imoe0u.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="w-full sm:w-[90%] md:w-[768px] lg:w-[900px]">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="p-2">
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
