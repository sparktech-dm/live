import React from "react";
import Photo from "../assets/Photo.png" 
const Hero = () => {
  return (
    <>
    <section className="text-white bg-black min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          The Best <span className="inline-block bg-orange-500 text-black px-2 rotate-[-2deg]">Digital</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-2">Marketing <span className="text-orange-500">Agency.</span></h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          We believe in combining innovative design, sustainable practices, and exceptional craftsmanship to bring your vision to life.
        </p>
        <button className="group bg-orange-400 hover:bg-orange-500 text-black font-semibold mt-10 px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center">
  CONTACT US
  <span className="ml-2   transform transition-all duration-500 ease-in-out group-hover:translate-x-2 group-hover:scale-125 ">
    →
  </span>
</button>
      </div>
    </section>
<div className="relative w-full overflow-hidden">
  {/* Hero Image with fadeInZoom */}
  <img
    src={Photo}
    alt="Hero"
    className="w-full h-[300px] md:h-[600px] object-cover fade-in-zoom"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4 md:p-8">
    <div className="text-[#ffffff]">
      <marquee behavior="" direction=""><h1 className="text-4xl md:text-6xl  mb-4 slide-up font-medium font" style={{fontFamily: 'unbounded,sans-serif' }}>
        WELCOME TO SPARK TECH
      </h1></marquee>
      
      <p className="text-sm md:text-lg mb-6 slide-up">
        Discover our services and get started today!
      </p>
      <button className="bg-[#9a2e00] hover:bg- text-white font-semibold py-2 px-6 rounded-xl shadow-lg animate-bounce mt-2">
        Get Started
      </button>
    </div>
  </div>
</div>


  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent"></div>

    </>
    
  );
};

export default Hero;
