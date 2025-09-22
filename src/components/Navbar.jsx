import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes, FaEllipsisV } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Services', link: 'services' },
    { name: 'Why Choose Us', link: 'why-choose-us' },
    { name: 'Testimonials', link: 'testimonials' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // close mobile menu
  };

  return (
    <nav className="sticky top-0 z-50 w-full shadow shadow-white/40 bg-black">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center p-4  text-white rounded-b-lg ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-8 w-8 bg-green-500 rounded-lg text-white font-bold overflow-hidden">
            <img
              src="https://res.cloudinary.com/dck3betif/image/upload/v1758270896/Screenshot_2025-09-19_133918_dty5m1.png"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg">Palm Pixel</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.link)}
              className="hover:text-yellow-500 font-medium text-md transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
           <button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-6 py-2 rounded-full font-bold shadow-lg hover:bg-green-600 transition-colors">
  Contact Us
</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-4 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.link)}
              className="block py-2 px-2 rounded-md hover:bg-gray-800 transition-colors text-left"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
