import React from "react";
import { color, motion } from "framer-motion";
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

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {services.map((service, i) => (
        <Card key={i} i={i} service={service} />
      ))}
    </div>
  );
}

function Card({ service, i }) {
  const { title, icon, desc } = service;

  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ twice: true, amount: 0.5 }}
      variants={{
        offscreen: {
          opacity: 0,
          y: 100,
        },
        onscreen: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
            delay: i * 0.15,
          },
        },
      }}
    >
      <motion.div style={card}>
        <div style={iconWrap}>{icon}</div>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descStyle}>{desc}</p>
      </motion.div>
    </motion.div>
  );
}

/* ========= Styles ========= */

const container = {
  margin: "100px auto",
  maxWidth: "1000px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "30px",
  background:"#1a1a1a"
};

const cardContainer = {
  width: "300px",
};

const card = {
  background: "#1a1a1a",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  minHeight: "300px",
  textAlign: "center",
};

const iconWrap = {
  fontSize: "40px",
  color: "#380B58",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
  color:"#fff"
};

const descStyle = {
  fontSize: "15px",
  color: "#fff",
};

/* ========= Data ========= */

const services = [
  {
    title: "Social Media Marketing",
    icon: <FaInstagram />,
    desc: "Boost your brand's online presence through targeted social campaigns and community engagement.",
  },
  {
    title: "Content Creation",
    icon: <FaPenNib />,
    desc: "Craft compelling blog posts, visuals, and videos that resonate with your audience.",
  },
  {
    title: "Web Site Development",
    icon: <FaLaptopCode />,
    desc: "Build fast, responsive, and attractive websites tailored to your business goals.",
  },
  {
    title: "Video Editing",
    icon: <FaVideo />,
    desc: "High‑quality editing for promotional, tutorial, and social media videos.",
  },
  {
    title: "E-mail Marketing",
    icon: <FaEnvelopeOpenText />,
    desc: "Reach and retain your customers through personalized, results‑driven email campaigns.",
  },
  {
    title: "Graphics Designing",
    icon: <FaPaintBrush />,
    desc: "Eye‑catching visuals and designs to communicate your brand message effectively.",
  },
  {
    title: "Branding and Promotion",
    icon: <FaBullhorn />,
    desc: "Develop a strong brand identity and promote it across various channels.",
  },
  {
    title: "Personal Branding",
    icon: <FaUserTie />,
    desc: "Grow your individual influence with a strategy tailored to your unique skills and goals.",
  },
  {
    title: "SEO",
    icon: <FaSearch />,
    desc: "Improve search‑engine rankings and drive organic traffic to your site with smart SEO practices.",
  },
];
