import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Palm & Pixel AI</h2>
          <p className="text-gray-400 text-sm">
            A digital marketing company specializes in online strategies like
            SEO, social media, and ads to grow brand visibility and sales.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Website Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Social Media Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Paid Ads
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Brand Identity & Logo Design
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" /> Palm & Pixel
              AI***@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" /> +123 - 456 - 7890
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500" /> Raipur, India
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © Copyright {new Date().getFullYear()}   Palm & Pixel AI - All Rights Reserved.
      </div>
    </footer>
  );
}
