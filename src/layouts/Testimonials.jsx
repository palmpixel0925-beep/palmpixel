import Slider from "react-slick";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

export default function Reviews() {
  const sliderRef = useRef(null);

  const reviews = [
    {
      name: "Aarav M.",
      date: "1 week ago",
      text: "“Palm & Pixel gave our Dubai brand a voice that speaks luxury. Fast, flawless, and culturally spot-on.”",
      rating: 5,
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Fatima A.",
      date: "10 days ago",
      text: "“Their bilingual design and ad strategy helped us scale across UAE in weeks.”",
      rating: 5,
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Aarav M.",
      date: "1 week ago",
      text: "“Palm & Pixel gave our Dubai brand a voice that speaks luxury. Fast, flawless, and culturally spot-on.”",
      rating: 5,
      avatar: "https://i.pravatar.cc/40?img=1",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="testimonials">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-white">
          Read reviews, <br /> ride with confidence.
        </h1>
        {/* <div className="flex items-center justify-center mt-4 space-x-2 text-gray-300">
          <span className="flex items-center text-lg font-medium">
            4.2/5
            <Star className="w-5 h-5 text-green-500 ml-1" />
          </span>
          <span className="font-semibold">Trustpilot</span>
          <span className="text-gray-400">Based on 5210 reviews</span>
        </div> */}
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Sidebar */}
        <div className="md:col-span-1 flex flex-col justify-between border bg-white border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-2xl font-semibold text-gray-800 leading-snug">
            What our <br /> customers say
          </p>

          {/* Custom Arrows */}
          <div className="flex space-x-3 mt-10">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-2 border border-gray-400 rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-2 border border-gray-400 rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="md:col-span-3">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review, i) => (
              <div key={i} className="px-3">
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 h-full flex flex-col">
                  <p className="text-gray-300 mb-6">{review.text}</p>

                  <div className="flex items-center space-x-1 mb-6">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-green-500 fill-green-500"
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 mt-auto">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full border border-gray-600"
                    />
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-sm text-gray-400">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
