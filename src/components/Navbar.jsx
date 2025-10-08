import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes, FaEllipsisV } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Services', link: 'services' },
    { name: 'Why Choose Us', link: 'why-choose-us' },
    { name: 'Contact', link: 'contact' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav className="fixed top-0 z-50 w-full flex justify-center items-center shadow shadow-white/40 bg-black">
      <div className="max-w-[1200px] w-full  mx-auto flex justify-between items-center p-4  text-white rounded-b-lg">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-8 w-8 bg-green-500 rounded-lg text-white font-bold overflow-hidden">
            <img
              src="https://res.cloudinary.com/dck3betif/image/upload/v1758270896/Screenshot_2025-09-19_133918_dty5m1.png"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className=" text-xl bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 bg-clip-text text-transparent">Palm & Pixel AI</span>
        </div>

        {/* Desktop and Tablet Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
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

        {/* Right Section and Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {/* <div className="hidden md:flex">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-6 py-2 rounded-full font-bold shadow-lg hover:bg-green-600 transition-colors"
            >
              Contact Us
            </button>
          </div> */}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (outside the main navbar div) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white transition-transform duration-300 ease-in-out transform md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 pt-10">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.link)}
              className="w-full text-center py-4 text-xl hover:bg-gray-800 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-6 py-2 rounded-full font-bold shadow-lg mt-4"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}