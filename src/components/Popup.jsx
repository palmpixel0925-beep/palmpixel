import React, { useState } from "react";

const Popup = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const [result, setResult] = useState(""); // success/error message

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "ad930d98-be46-47ce-8e19-120de12bffb0");
    formData.append("no_redirect", "true");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setResult("❌ Something went wrong. Please try again!");
      }
    } catch (error) {
      setResult("❌ Network error. Please try later!");
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[2000]"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="flex w-[92%] max-w-[1000px] bg-black text-white rounded-2xl overflow-hidden shadow-2xl 
                   flex-col md:flex-row animate-[fadeSlide_0.5s_ease_forwards] border border-gray-800"
      >
        {/* LEFT SIDE */}
        <div className="flex-1 max-lg:hidden bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center text-center p-8 md:p-12">
          <div className="max-w-sm flex flex-col items-center gap-6">
            {/* <img
              src="https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024528/aitemp_gowxrf.png"
              alt="AI Icon"
              className="w-48 md:w-52 rounded-2xl shadow-lg"
            /> */}

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              FREE AI BRAND AUDIT
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Unlock <span className="font-semibold text-yellow-400">AI-driven Digital Marketing </span> 
              strategies designed for luxury brands.
            </p>

            <ul className="text-left list-disc list-inside space-y-3 text-sm md:text-base text-gray-300">
              <li>Evaluate your brand's AI-readiness</li>
              <li>Identify opportunities for AI-driven growth</li>
              <li>Unlock personalization & automation strategies</li>
              <li>Get strategic recommendations for the AI era</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 bg-black p-8 md:p-12 relative flex flex-col justify-center border-l border-gray-800">
          {/* Close button */}
          <button
            aria-label="Close popup"
            onClick={() => {
              setOpen(false);
              onClose?.();
            }}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-900 border border-gray-700 
                       flex items-center justify-center font-bold text-gray-400 hover:bg-gray-800 hover:text-white cursor-pointer"
          >
            ✖
          </button>

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Contact Our Experts
          </h2>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full bg-black border border-gray-700 rounded-lg px-5 py-3 text-sm md:text-base text-white
                         focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 placeholder-gray-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full bg-black border border-gray-700 rounded-lg px-5 py-3 text-sm md:text-base text-white
                         focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 placeholder-gray-500"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your Phone"
              required
              className="w-full bg-black border border-gray-700 rounded-lg px-5 py-3 text-sm md:text-base text-white
                         focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 placeholder-gray-500"
            />

            {/* Message */}
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-black border border-gray-700 rounded-lg px-5 py-3 text-sm md:text-base text-white resize-none
                         focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400 placeholder-gray-500"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              disabled={result === "Sending..."}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 
                         text-black font-bold py-3 rounded-lg shadow-md transition disabled:opacity-60"
            >
              {result === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {result && <p className="text-sm mt-2 text-center text-gray-300">{result}</p>}
          </form>
        </div>
      </div>

      {/* Keyframes for animation */}
      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Popup;
