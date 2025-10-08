import { Megaphone, MonitorSmartphone, Palette, BarChart3 } from "lucide-react";
import { FaRobot } from "react-icons/fa";

const services = [
  {
    title: "AI Powered Marketing Services",
    description:
      "Harness the power of artificial intelligence to create data-driven marketing campaigns that optimize performance and deliver measurable business growth.",
    points: [
      "Leverage AI for smarter campaign optimization",
      "Boost engagement with predictive targeting",
      "Deliver measurable growth using real-time analytics",
    ],
    icon: FaRobot,
    color: "text-cyan-500",
  },
  {
    title: "Website Design (Arabic + English)",
    description:
      "Build stunning bilingual websites in Arabic and English that are responsive, SEO-optimized, and crafted for exceptional user experiences.",
    points: [
      "Responsive bilingual website design",
      "Optimized for performance and SEO",
      "Engage wider audience with modern UI/UX",
    ],
    icon: MonitorSmartphone,
    color: "text-blue-500",
  },
  {
    title: "Social Media Management",
    description:
      "Enhance your online presence with expert content creation, audience engagement, and consistent brand storytelling across all social platforms.",
    points: [
      "Tailored content strategies for each platform",
      "Consistent posting & audience engagement",
      "Grow brand awareness and community trust",
    ],
    icon: Megaphone,
    color: "text-purple-500",
  },
  {
    title: "Paid Ads (Meta, Google, LinkedIn)",
    description:
      "Run high-performance paid ad campaigns across major networks with precise targeting, continuous optimization, and a focus on maximizing ROI.",
    points: [
      "Data-driven ad optimization",
      "Increase conversions with precise targeting",
      "Maximize ROI across ad networks",
    ],
    icon: BarChart3,
    color: "text-orange-500",
  },
  {
    title: "Brand Identity & Logo Design",
    description:
      "Create a memorable and cohesive brand identity with professional logo design and visuals that communicate your company’s core values.",
    points: [
      "Professional logo and visual identity creation",
      "Designs that reflect business values",
      "Stand out in a competitive market",
    ],
    icon: Palette,
    color: "text-cyan-500",
  },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  setIsMobileMenuOpen(false);
};

export default function Services() {
  return (
    <section
      className="w-full flex justify-center items-center text-white py-16 px-4 sm:px-6 md:px-16 bg-black"
      id="services"
    >
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <h1 className="text-center mb-4 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold">
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
                className="border w-full sm:w-[300px] md:w-[350px] flex flex-col justify-between items-center text-center border-yellow-500 rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-gray-950"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-lg bg-gray-900 mb-4 ${service.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 text-center list-disc space-y-1 mb-4">
                  {" "}
                  {service.description}
                </p>

                {/* Points */}
                <ul className="text-sm sm:text-base text-gray-400 text-left list-disc space-y-1 mb-4 px-4">
                  {service.points.map((point, i) => (
                    <div className="">
                      <li key={i}>{point}</li>
                    </div>
                  ))}
                </ul>

                {/* Get Quote Button */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-auto px-5 py-2 bg-gradient-to-r from-amber-600 to-yellow-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition"
                >
                  Get Quote
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
