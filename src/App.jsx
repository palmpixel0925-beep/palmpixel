import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./layouts/Hero";
import WhyChooseUs from "./layouts/WhyChooseUs";
import About from "./layouts/About";
import Services from "./layouts/Services";
import Contact from "./layouts/Contact";
import Footer from "./components/Footer";
import Testimonials from "./layouts/Testimonials";
import Whatsapp from "./components/Whatsapp";
import Gallery from "./layouts/Gallery";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Gallery/>
      <Contact />
      <Footer />
      <Whatsapp/>
      <ScrollTop/>
    </div>
  );
}
