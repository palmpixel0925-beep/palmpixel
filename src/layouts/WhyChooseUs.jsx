export default function WhyChooseUs() {
  const features = [
    { icon: "🌐", text: "Cultural Fluency" },
    { icon: "🎨", text: "Premium Design Standards" },
    { icon: "💰", text: "Transparent Pricing in AED" },
    { icon: "⚡", text: "Fast Turnaround & Dedicated Support" },
  ];

  return (
    <div className="flex justify-center items-center bg-black px-4 sm:px-6 lg:px-8" id="why-choose-us">
      <div className="w-full max-w-[1200px] text-white py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Content */}
        <div className="flex-1 space-y-6">
          <p className="font-semibold uppercase ">Why Choose Us</p>
          <h1 className="text-3xl bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent sm:text-4xl md:text-5xl font-bold leading-tight">
            Why Choose Us
          </h1>
          <p className="text-white max-w-lg text-sm sm:text-base md:text-lg">
            We combine cultural fluency, premium design standards, transparent
            pricing in AED, and fast, dedicated support to deliver innovative
            solutions that drive business growth and create meaningful impact
            for your brand.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl text-yellow-400 text-xl">
                  {feature.icon}
                </div>
                <span className="font-semibold text-sm sm:text-base">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Founder"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm sm:text-base">Eason Edward</p>
                <p className="text-xs sm:text-sm text-gray-300">Co-Founder</p>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-300">Call Us Now</p>
              <p className="font-semibold text-sm sm:text-base">+123-456-789</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <div className="relative w-full max-w-[400px] sm:max-w-[450px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500 to-blue-500 scale-105 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 -z-10"></div>
            <img
              src="https://res.cloudinary.com/dck3betif/image/upload/v1758346749/pensive-customer-thinking-special-offer_wby39z.png"
              alt="Business Woman"
              className="rounded-3xl w-full object-cover grayscale shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
