'use client'; // if using app directory in Next.js 13+

import { useState, useEffect } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed border border-gray-100 bottom-6 max-lg:bottom-10 text-3xl right-6 z-50 bg-gradient-to-r from-amber-600 to-yellow-400 text-black px-2 py-2 
        rounded-lg shadow-lg hover:bg-yellow-600 transition"
        aria-label="Scroll to top"
      >
        <IoIosArrowRoundUp/>
      </button>
    )
  );
}
