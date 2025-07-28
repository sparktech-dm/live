import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import rocketLogo from "../assets/Logo.png";
import ShinyText from './ShinyText.jsx';
import { scroller } from 'react-scroll';

const Hero = () => {
  const controls = useAnimation();
  const textControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls
        .start({
          y: [400, 0, -100],
          scale: [0.3, 1, 1.1],
          opacity: [0, 1, 0.2],
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        })
        .then(() => {
          setHasAnimated(true);
          textControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          });
        });
    } else if (!inView) {
      setHasAnimated(false);
      controls.set({ y: 400, scale: 0.3, opacity: 0 });
      textControls.set({ opacity: 0, y: 50 });
    }
  }, [inView, controls, textControls, hasAnimated]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center h-screen relative overflow-hidden px-4"
    >
      <motion.img
        src={rocketLogo}
        alt="Rocket Logo"
        animate={controls}
        initial={{ y: 400, scale: 0.3, opacity: 0 }}
        className="w-40 md:w-56 lg:w-72 drop-shadow-2xl absolute z-0"
      />

      <motion.div
        animate={textControls}
        initial={{ opacity: 0, y: 50 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight tracking-tight">
          The Best <span className="inline-block bg-[#f0c417] text-black px-2 rotate-[-2deg]">Digital</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mt-2">
          Marketing <span className="text-[#f0c417]">Agency.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto pb-5">
          We believe in combining innovative design, sustainable practices, and exceptional craftsmanship to bring your vision to life.
        </p>
        <button
  onClick={() => scroller.scrollTo('contact', {
    duration: 600,
    smooth: 'easeInOutQuart',
  })}
  className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md animate-bounce"
>
  Explore
</button>
      </motion.div>
    </div>
  );
};

export default Hero;
