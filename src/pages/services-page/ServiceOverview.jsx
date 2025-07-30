import React from "react";
import { Route } from "react-router-dom";
import PixelCard from "../../components/PixelCard";
import { TbDeviceAnalytics } from "react-icons/tb";
import { PiPencilCircleBold } from "react-icons/pi";
import { MdEmail, MdOutlineVideoLibrary, MdOutlineWeb } from "react-icons/md";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { FaChess, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import  {Link}  from "react-router-dom";
import Content from "./Content";
import Email from "./Email";
import Graph from "./Graph";
import Seo from "./Seo";
import Social from "./Social";
import  Video  from "./Video";
import Web from "./Web";
import { path } from "framer-motion/client";
const services = [
  {
    icon: <TbDeviceAnalytics size={40} />,
    title: "Social Media Marketing",
    desc: "Boost your online presence and engagement through targeted social media strategies.",
    variant: "default",
    cursor: "insta",
    path : "social-media-marketing",
  },
  {
    icon: <PiPencilCircleBold size={40} />,
    title: "Content Creation",
    desc: "High-quality content tailored to your brand’s voice and audience.",
    variant: "default",
    cursor: "pen",
    path : "content-creation",
  },
  {
    icon: <MdOutlineWeb size={40} />,
    title: "Website Development",
    desc: "Responsive, modern websites to elevate your online identity.",
    variant: "default",
    cursor: "dev",
    path : "website-development",
  },
  {
    icon: <MdOutlineVideoLibrary size={40} />,
    title: "Video Editing",
    desc: "Professional editing that communicates your message clearly.",
    variant: "default",
    cursor: "vdo",
    path : "video-editing",
  },
  {
    icon: <MdEmail size={40} />,
    title: "Email Marketing",
    desc: "Engage through compelling, conversion-driven email campaigns.",
    variant: "default",
    cursor: "mail",
    path : "email-marketing",
  },
  {
    icon: <LiaPhotoVideoSolid size={40} />,
    title: "Graphic Designing",
    desc: "Stunning visuals to enhance your brand’s image.",
    variant: "default",
    cursor: "graph",
    path : "graphics-designing",
  },
  {
    icon: <FaChess size={40} />,
    title: "Branding & Promotion",
    desc: "Strategic promotions to amplify your reach.",
    variant: "default",
    cursor: "brand",
    path : "/",
    
  },
  {
    icon: <CgProfile size={40} />,
    title: "Personal Branding",
    desc: "Build a strong, authentic personal brand.",
    variant: "default",
    cursor: "person",
    path : "/",
  },
  {
    icon: <FaSearch size={40} />,
    title: "SEO",
    desc: "Improve your search engine rankings organically.",
    variant: "default",
    cursor: "seo",
    path : "seo",
  },
];

const ServiceOverview = () => {
  return (
    <section className="py-30 px-6 text-white " id="services">
      <h2 className="text-4xl font-bold text-[#f0c417] text-center mb-12">
        Our Services
      </h2>
      <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((svc, idx) => (
         <Link
        key={idx}
        to={`/services/${svc.path}`}
        className="group"
        style={{ width: "300px", height: "400px" }}
      >
          <PixelCard key={idx} variant={svc.variant} className="h-[400px] w-[300px] bg-[#252525]">
  <div
    className="text-center flex flex-col justify-between h-full px-4 py-6"
    style={{ cursor: `url('/mouse/${svc.cursor}.svg') 4 4, auto` }}
  >
    <div>
      <div className="mb-4 text-[#f0c417]">{svc.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
      <p className="text-sm text-gray-300">{svc.desc}</p>
                    <div className="mt-4 text-white font-semibold underline">
                LEARN MORE
              </div>

               
    </div>
  </div>
</PixelCard>
   </Link>

        ))}
      </div>
    </section>
    
  );
};

export default ServiceOverview; 