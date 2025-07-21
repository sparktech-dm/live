import React, { useLayoutEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import BlogsPage from "./components/BlogsPage";
import BlogDetail from "./components/BlogDetail";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { Faq } from "./components/Faq";
import ChatBot from "./components/Chat";

const Home = () => (
  <>
    <section id="home" className="min-h-screen scroll-mt-24 px-4 py-10">
      <Hero />
    </section>
    <section id="services" className="min-h-screen scroll-mt-24 px-4 py-10">
      <Services />
    </section>
    <section id="faq" className="min-h-screen scroll-mt-24 px-4 py-10">
      <Faq />
    </section>
    <section id="contact" className="min-h-screen scroll-mt-24 px-4 py-10">
      <ContactForm />
    </section>
    <section id="footer" className="px-4 py-10">
      <Footer />
    </section>
  </>
);

const App = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useLayoutEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1,
        points: 7.0,
        maxDistance: 18.0,
        spacing: 20.0,
        color:  0xaaaaaa, // Rocket orange-red       0xaaaaaa 0x0d0d0d
        backgroundColor: "#777b7e", // Gear navy blue     
      });

      setVantaEffect(effect);

      // ✅ Trigger resize to force canvas correction
      window.dispatchEvent(new Event("resize"));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* Vanta Background */}
      <div
  ref={vantaRef}
  className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden"
/>


      {/* Main Content */}
      <div className="relative z-10 text-white overflow-x-hidden">
        <Navbar />
        <ChatBot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
