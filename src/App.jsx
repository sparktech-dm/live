import React, { useRef, useState, useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
import Top from "./components/Top";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";



const Home = () => (
  <>
    <section id="home" className="min-h-screen scroll-mt-24 px-4 py-10">
      <Hero />
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
        points: 6.0,
        maxDistance: 18.0,
        spacing: 20.0,
        color:   0xe1e0e0
, // Rocket orange-red       0xaaaaaa 0x0d0d0d
        backgroundColor: 	0x666666, // Gear navy blue     
      });

      setVantaEffect(effect);

      // ✅ Trigger resize to force canvas correction
      window.dispatchEvent(new Event("resize"));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
    <div
  ref={vantaRef}
  className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden"
/>
      

      {/* 🔵 Main Foreground Content */}
      <div className="relative z-10 text-white overflow-x-hidden">
        <Navbar />
        <ChatBot />
        <Top />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/services" element={<Services/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
