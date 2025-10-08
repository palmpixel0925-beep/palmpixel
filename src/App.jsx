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
import Popup from "./components/Popup";

export default function App() {
  return (
    <div className="bg-black">
      <Popup/>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery/>
      <Testimonials />
      <Contact />
      <Footer />
      <Whatsapp/>
      <ScrollTop/>

    </div>
  );
}
