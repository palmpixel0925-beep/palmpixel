import React from "react";

const ShowcaseSection = () => {
  const showcaseImages = [
    // Creative Designs (normal size)
    {
      src: "https://res.cloudinary.com/dck3betif/image/upload/v1759927688/37748939_05feb5_cvnmvv.jpg",
      type: "creative",
    },

    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486656/creative-design5_fpvzco.jpg",
      type: "creative",
    },
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489624/homepage3_vrgmhb.png",
      type: "website",
    },
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489632/homepage4_k86dtk.png",
      type: "website",
    },
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489607/homepage1_stn9hh.png",
      type: "website",
    },
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489615/homepage2_k5twkz.png",
      type: "website",
    },
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486661/creative-design6_a2izof.jpg",
      type: "creative",
    },
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486666/creative-design7_nallsd.jpg",
      type: "creative",
    },

    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486671/creative-design8_rcyoqf.jpg",
      type: "creative",
    },

    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486690/creative-design10_uamygi.jpg",
      type: "creative",
    },

    // Website Development (larger)

    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489642/homepage5_o0ofjn.png",
      type: "website",
    },
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489656/homepage6_xgdexz.png",
      type: "website",
    },
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489684/homepage7_egs0ov.png",
      type: "website",
    },
    {
      src: "https://res.cloudinary.com/dck3betif/image/upload/v1759927607/36783710_14jan7_nzmlyz.jpg",
      type: "creative",
    },

    
    {
      src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486651/creative-design4_gpleok.jpg",
      type: "creative",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <h1 className="text-center mb-8 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold">Portfolio</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {showcaseImages.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl shadow-md group bg-white ${
                item.type === "website"
                  ? "col-span-2 md:col-span-3 lg:col-span-2"
                  : ""
              }`}
            >
              <img
                src={item.src}
                alt={`showcase-${i}`}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  item.type === "website" ? "h-56 sm:h-64" : "h-44 sm:h-48"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
