import { Mail, Phone, ArrowRight } from "lucide-react";

const services = [
  "Website Design",
  "Social Media Management",
  "Paid Ads",
  "Brand Identity & Logo Design"
];

export default function Contact() {
  return (
    <section className="flex justify-center items-center bg-black text-white" id="contact">
      <div className="w-full max-w-[1200px] py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <p className="text-sm text-gray-400 uppercase">We’re here to help you</p>
          <h1 className="text-3xl md:text-6xl font-bold">
            Discuss <span className="text-yellow-400">Your Digital Marketing Goals</span>
          </h1>
          <p className="text-gray-300 max-w-md">
            Looking to grow your online presence, attract more leads, and increase sales? Reach out to us for expert digital marketing solutions tailored to your brand.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-yellow-400" />
              <p>
                <span className="font-medium">E-mail:</span> contact@yourbrand.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-yellow-400" />
              <p>
                <span className="font-medium">Phone number:</span> +123 - 456 - 7890
              </p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="flex-1">
          <div className="rounded-2xl shadow-md p-8 bg-gray-900">
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Select Service</option>
                  {services.map((service, idx) => (
                    <option key={idx}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-400 text-black font-semibold py-3 rounded-lg transition"
              >
                Get a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
