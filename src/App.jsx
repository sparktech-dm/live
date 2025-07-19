import React, { useEffect, useRef, useState } from "react";
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
    <div id="home"><Hero /></div>
    <div id="services"><Services /></div>
    <div id="faq"><Faq /></div>
    <div id="contact"><ContactForm /></div>
    <div id="footer"><Footer /></div>
  </>
);

const App = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.2, // slightly zoom for smaller screens
        points: window.innerWidth < 768 ? 8.0 : 14.0,
        spacing: window.innerWidth < 768 ? 18.0 : 14.0,
        color: 0xffffff,
        backgroundColor: 0x0d0d0d,
      }));
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="min-h-screen w-full text-white overflow-x-hidden"
      style={{
        padding: "0",
        margin: "0",
        position: "relative",
        zIndex: 0,
      }}
    >
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
  );
};

export default App;
