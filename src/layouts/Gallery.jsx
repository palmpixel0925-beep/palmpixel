import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-[1200px] px-4 flex justify-center items-center">
        {/* Heading */}
        {/* <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
          Captivating Image Carousel
        </h1> */}
        {/* Description */}
        {/* <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Explore a collection of stunning photos in this automatic slider, featuring a landscape aspect ratio and elegant curved borders.
        </p> */}
        
        <div className="w-[768px]">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="p-2">
                {/* Adjusting aspect ratio for landscape and adding curved borders */}
                <div className="w-full aspect-video rounded-[30px] overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
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

export default App;