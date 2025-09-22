export default function About() {
  return (
    <section className="flex justify-center items-center" id="about">
      <div className="w-full max-w-[1200px] text-white  py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left - Profile Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            {/* Green Circle Background */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 w-[320px] h-[320px] -z-10"></div>
            {/* Person Image */}
            <img
              src="https://res.cloudinary.com/dck3betif/image/upload/v1758346518/happy-young-woman-sitting-floor-using-laptop-gray-wall_llodbl.png"
              alt="Oliver Scott"
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-sm uppercase tracking-wide ">About Me</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-200">
            Who is <span className="text-yellow-400">Palm Pixel?</span>
          </h1>
          <p className=" max-w-lg">
            Palm Pixel is a results-driven digital marketing agency that
            transforms brands into memorable experiences online. We help
            businesses engage audiences, grow visibility, and achieve measurable
            success through creative and data-driven strategies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div>
              <p className="text-2xl font-bold text-yellow-400">600+</p>
              <p className="text-sm ">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">50+</p>
              <p className="text-sm ">Industry Covered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-400">18+</p>
              <p className="text-sm ">Years of Experience</p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-lime-500 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
