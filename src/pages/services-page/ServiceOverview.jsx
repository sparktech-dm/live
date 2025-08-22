import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const segments = [
    {
      number: "01",
      title: "Social Media Marketing",
      details:
        "Boost your brand presence across platforms with engaging strategies.",
      link: "/services/social-media-marketing",
    },
    {
      number: "02",
      title: "Content Creation",
      details:
        "Creative and high-quality content tailored to your audience.",
      link: "/services/content-creation",
    },
    {
      number: "03",
      title: "Website Development",
      details:
        "Modern, responsive, and scalable websites for your business.",
      link: "/services/website-development",
    },
    {
      number: "04",
      title: "Video Editing",
      details:
        "Professional video editing to tell your story effectively.",
      link: "/services/video-editing",
    },
    {
      number: "05",
      title: "Email Marketing",
      details:
        "Targeted campaigns that convert and nurture your audience.",
      link: "/services/email-marketing",
    },
    {
      number: "06",
      title: "Graphics Designing & SEO",
      details:
        "Visual designs that enhance your brand identity + SEO strategies to rank higher.",
      link: "/services/seo", // You can split into /services/graphics-designing if separate
    },
  ];

  return (
    <div className=" text-[#f5e1b8] font-sans">
      {segments.map((segment, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative px-8 py-24 group overflow-hidden border-b border-[#f5e1b8]"
        >
          {/* Bent Line Divider */}
          <div className="absolute top-0 left-0 w-full flex items-center">
            <div className="w-12 h-[2px] bg-[#f5e1b8]"></div>
            <div className="w-12 h-12 border-l-2 border-b-2 border-[#f5e1b8] rounded-bl-3xl"></div>
            <div className="flex-1 h-[2px] bg-[#f5e1b8]"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
            <span className="block text-white text-4xl font-extrabold mb-4">
              {segment.number}
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 group-hover:text-white transition duration-300">
              {segment.title}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-[#f5e1b8]/90 group-hover:text-white/90 transition duration-300">
              {segment.details}
            </p>
            <Link
              to={segment.link}
              className="inline-block px-6 py-3 bg-[#f5e1b8] text-black font-semibold rounded-full shadow-md hover:bg-white hover:scale-105 transform transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
