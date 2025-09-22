import { Megaphone, MonitorSmartphone, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Website Design (Arabic + English)",
    desc: "We build responsive Arabic and English websites optimized for performance and user experience, helping your brand engage a wider audience effectively.",
    icon: MonitorSmartphone,
    color: "text-blue-500",
  },
  {
    title: "Social Media Management",
    desc: "Grow your online presence with tailored social media strategies, consistent content, and audience engagement to boost brand awareness across platforms.",
    icon: Megaphone,
    color: "text-purple-500",
  },
  {
    title: "Paid Ads (Meta, Google, LinkedIn)",
    desc: "Run targeted ad campaigns on Meta, Google, and LinkedIn to maximize reach, engagement, and ROI through data-driven optimization.",
    icon: BarChart3,
    color: "text-orange-500",
  },
  {
    title: "Brand Identity & Logo Design",
    desc: "Create strong brand identities with professional logos and visual designs that reflect your business values and stand out in the market.",
    icon: Palette,
    color: "text-cyan-500",
  },
];

export default function Services() {
  return (
    <section className="w-full flex justify-center items-center text-white py-16 px-4 sm:px-6 md:px-16 bg-black" id="services">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <h1 className="text-center mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
          What We Offer
        </h1>
        <p className="text-center text-gray-300 max-w-xl mx-auto mb-10 text-sm sm:text-base md:text-lg">
          Transforming ideas into impactful digital experiences for your brand.
        </p>

        <div className="flex flex-wrap gap-6 sm:gap-8 justify-center items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border w-full sm:w-[300px] md:w-[350px] flex flex-col justify-start items-center text-center border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition relative bg-gray-900"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-4 ${service.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-lime-500 transition">
          Get A Quote
        </button>
      </div>
    </section>
  );
}
