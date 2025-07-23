import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Seo from "./Seo";

import {
  FaInstagram,
  FaPenNib,
  FaLaptopCode,
  FaVideo,
  FaEnvelopeOpenText,
  FaPaintBrush,
  FaBullhorn,
  FaUserTie,
  FaSearch,
} from "react-icons/fa";

// Service data
const services = [
  {
    title: "Social Media Marketing",
    icon: <FaInstagram />,
    desc: "Boost your brand's online presence through targeted social campaigns and community engagement.",
    cursor: "insta",
  },
  {
    title: "Content Creation",
    icon: <FaPenNib />,
    desc: "Craft compelling blog posts, visuals, and videos that resonate with your audience.",
    cursor: "pen",
  },
  {
    title: "Web Site Development",
    icon: <FaLaptopCode />,
    desc: "Build fast, responsive, and attractive websites tailored to your business goals.",
    cursor: "dev",
  },
  {
    title: "Video Editing",
    icon: <FaVideo />,
    desc: "High‑quality editing for promotional, tutorial, and social media videos.",
    cursor: "vdo",
  },
  {
    title: "E-mail Marketing",
    icon: <FaEnvelopeOpenText />,
    desc: "Reach and retain your customers through personalized, results‑driven email campaigns.",
    cursor: "mail",
  },
  {
    title: "Graphics Designing",
    icon: <FaPaintBrush />,
    desc: "Eye‑catching visuals and designs to communicate your brand message effectively.",
    cursor: "graph",
  },
  {
    title: "Branding and Promotion",
    icon: <FaBullhorn />,
    desc: "Develop a strong brand identity and promote it across various channels.",
    cursor: "brand",
  },
  {
    title: "Personal Branding",
    icon: <FaUserTie />,
    desc: "Grow your individual influence with a strategy tailored to your unique skills and goals.",
    cursor: "person",
  },
  {
    title: "SEO",
    icon: <FaSearch />,
    desc: "Improve search‑engine rankings and drive organic traffic to your site with smart SEO practices.",
    cursor: "seo",
  },
];

// Desktop animation
const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: 30,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {

      stiffness: 120,
      damping: 15,
    },
  },
};

// Mobile fade only
const fadeVariants = {
  hidden: { opacity: 0.6 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const AnimatedCard = ({ svc, direction }) => {
  const ref = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const inViewRaw = useInView(ref, {
    amount: isMobile ? 0.7 : 0.3,
    once: true,
  });

  // Prevent repeat animation/flicker:
  const [played, setPlayed] = useState(false);
  useEffect(() => {
    if (inViewRaw && !played) setPlayed(true);
  }, [inViewRaw, played]);
  const isVisible = played;

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-6 shadow-lg flex flex-col justify-between bg-[#5a5656] transition duration-300 hover:bg-[#1A1A1A] hover:shadow-[0_4px_10px_orange]"
      style={{
        cursor: `url('/mouse/${svc.cursor}.svg') 4 4, auto`,
      }}
      custom={direction}
      variants={isMobile ? fadeVariants : cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={!isMobile ? { scale: 1.07 } : {}}
    >
      <div>
        <div className="text-2xl mb-4 text-orange-400">{svc.icon}</div>
        <h3 className="text-2xl font-semibold mb-2">{svc.title}</h3>
        <p className="text-gray-300 text-sm">{svc.desc}</p>
      </div>
      <button className="mt-6 text-white font-semibold flex items-center gap-1 hover:underline">
        LEARN&nbsp;MORE
      </button>
    </motion.div>
  );
};

const Services = () => (
  <>
    <Seo
      title="Services | Spark Tech Digital"
      description="Explore our digital marketing, branding, and web development services."
    />
    <section className="text-white py-16 px-6">
      <div className="text-center mb-12">
        <span className="text-[#F58327] text-xs font-black uppercase tracking-wide inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
          Services
        </span>
        <h2
          className="text-4xl sm:text-6xl font-bold"
          style={{ fontFamily: "Unbounded Placeholder, sans-serif" }}
        >
          What we are Offering
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((svc, i) => {
          const direction = i % 2 === 0 ? "left" : "right";
          return <AnimatedCard key={svc.title} svc={svc} direction={direction} />;
        })}
      </div>
    </section>
  </>
);

export default Services;
