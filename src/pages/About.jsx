import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import bannerImg from "../assets/banner.jpg"; // your banner image
import { Helmet } from 'react-helmet';
import Seo from "../components/Seo";
import Footer from "../components/Footer";

const About = () => {
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <>
     <Seo
        title="About | Spark Tech Digital"
        description="Explore our recent digital marketing, branding, and web development projects delivered to satisfied clients."
      />
    
    <div className=" min-h-screen p-2">
      {/* Banner Section */}
      <div className="relative rounded-3xl overflow-hidden w-full h-[300px] max-w-[1400px] mx-auto my-10 shadow-xl bg-[#111]">
        <img
          src={bannerImg}
          alt="Spark Tech Banner"
          className="w-full h-[300px] object-cover block"
        />
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{ boxShadow: "inset 0 -80px 80px -10px rgba(0,0,0,0.7)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center p-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.7) 100%)",
          }}
        >
          <h1 className="text-white text-4xl font-bold text-center leading-tight m-0">
            Hey There! Welcome<br />
            to <span className="text-[#f0c417]">Spark Tech!</span>
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
            <span
              className="text-[#f0c417] text-xs font-black uppercase tracking-wide"
              style={{ fontFamily: "Inter" }}
            >
              Who Are We
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-8 tracking-tight ml-6">
            About our Company
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Description */}
            <div className="flex-1">
              <p className="text-gray-300 text-2xl md:text-3xl leading-snug mb-0 pl-[20] ml-8">
                <span className="font-bold text-white">At SPARKTECH,</span> At SPARKTECH, we specialize in crafting innovative strategies that help brands connect with their audience and achieve measurable growth. Our expert team is dedicated to transforming ideas into results, turning clicks into loyal customers. Let us help you create a lasting digital presence and unlock your brand's full potential.
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Mission */}
              

                <div
                  onClick={() => setIsMissionOpen(!isMissionOpen)}
                  className={`group cursor-pointer bg-[#232323] hover:bg-[#1f1f1f] transition-all duration-300 ease-in-out rounded-2xl px-8 py-6 shadow-inner border border-[#333]`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-medium text-gray-200 group-hover:text-[#f0c417] transform transition-transform duration-300 group-hover:translate-x-2">
      <span className="text-gray-400 font-mono mr-2">01.</span> Our Mission
    </span>
    <div className="w-10 h-10 rounded-full  flex items-center justify-center text-2xl text-gray-400 group-hover:text-[#f0c417] transition">
      {isMissionOpen ? "-" : "+"}
    </div>
  </div>
  {isMissionOpen && (
    <p className="text-gray-400 mt-4">
      Our mission is to deliver top-tier software and digital solutions that
      empower businesses and enhance user experiences.
    </p>
  )}
</div>

              

              {/* Vision */}
              <div
  onClick={() => setIsVisionOpen(!isVisionOpen)}
  className={`group cursor-pointer bg-[#232323] hover:bg-[#1f1f1f] transition-all duration-300 ease-in-out rounded-2xl px-8 py-6 shadow-inner border border-[#333]`}
>
  <div className="flex items-center justify-between">
    <span className="text-xl font-medium text-gray-200 group-hover:text-[#f0c417] transform transition-transform duration-300 group-hover:translate-x-2">
      <span className="text-gray-400 font-mono mr-2">02.</span> Our Vision
    </span>
    <div className="w-10 h-10  flex items-center justify-center text-2xl text-gray-400 group-hover:text-[#f0c417] transition">
      {isVisionOpen ? "-" : "+"}
    </div>
  </div>
  {isVisionOpen && (
    <p className="text-gray-400 mt-4">
      We envision Spark Tech as a global leader in innovation, known for
      transforming ideas into impactful digital realities.
    </p>
  )}
</div>

           
        </div>
      </div>

      {/* Our Leader Section */}
<div className="px-6 py-20 ">
  <div className="max-w-6xl mx-auto md:px-5">
    {/* Top Heading Row */}
    <div className="flex items-center gap-4 mb-6">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
            <span
              className="text-[#f0c417] text-xs font-black uppercase tracking-wide"
              style={{ fontFamily: "Inter" }}
            >
              ABOUT FOUNDER
            </span>
          </div>
      <h2 className="text-white text-2xl md:text-5xl font-bold">Meet the Founder</h2>
    </div>

    {/* Paragraph intro */}
    <p className="text-gray-300 mb-30 text-2xl ">
      At Spark Tech, our leadership is driven by a passion for innovation and a deep understanding of digital transformation. Our founder leads by example, constantly pushing the boundaries to help clients thrive in a fast-evolving tech landscape.
    </p>

    {/* Image + Bio Row */}
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Left: Image Block */}
      <div className="relative w-[300px] h-[350px]">
        {/* Orange background circle */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#f0c417] rounded-t-full z-0" />
        {/* Leader image */}
        <img
          src=""
          alt="Leader"
          className="absolute top-[-83.5px]   rounded-t-full grayscale  border-[#f0c417] " 
        />
        {/* Name overlay */}
        <div className="absolute bottom-[-30px] left-0 w-full text-center z-20">
          <h3 className="text-2xl font-bold text-[#f0c417]">Name</h3>
          <h3 className="text-2xl font-bold text-white -mt-1">Here</h3>
        </div>
      </div>

      {/* Right: Paragraph about leader */}
      <div className="text-gray-300 max-w-xl text-2xl leading-relaxed">
        James Andrews is a visionary entrepreneur and the driving force behind Spark Tech. With a background in full-stack development and a knack for turning complex challenges into simple solutions, he has led the company to new heights. His leadership is built on innovation, integrity, and relentless focus on quality.
      </div>
    </div>
  </div>
</div>

      {/* Our Team Section */}
<div className=" py-20 px-4">
  <div className=" max-w-6xl mx-auto text-center">
    <div className=" inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
            <span
              className="text-[#f0c417] text-xs font-black uppercase tracking-wide"
              style={{ fontFamily: "Inter" }}
            >
              TEAM MEMBERS
            </span>
          </div>
    <h2 className="text-4xl font-bold text-white mb-12">Say Hello to Our Team</h2>
    
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          name: "Name",
          role: "Role",
          image: "",
          instagram: "https://instagram.com/your_profile_1",
    linkedin: "https://linkedin.com/in/your_profile_1",
  
        },
        {
          name: "Name",
          role: "Role",
          image: "",
          instagram: "https://instagram.com/your_profile_1",
          linkedin: "https://linkedin.com/in/your_profile_1",
        },
        {
          name: "Name",
          role: "Role",
          image: "",
          instagram: "https://instagram.com/your_profile_1",
          linkedin: "https://linkedin.com/in/your_profile_1",
        },
      ].map((member, i) => {
        const [clicked, setClicked] = useState(false); // Local click state per card

        return (
          <div
            key={i}
            className="relative group  rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
          >
            {/* Orange semi-circle animation */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-150 h-150 bg-[#f0c417] rounded-full z-0 transition-all duration-700 ${
                clickedIndex === i ? "-translate-y-16" : "translate-y-full"
              }`}
            />

            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-50 h-90  mx-auto mt-6 z-10 relative transition-transform duration-500 group-hover:scale-105"
            />

            {/* Name & Role */}
            <div className="relative z-10 transition-all duration-300 group-hover:-translate-y-1 text-white text-center mt-4 mb-2">
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-[#f0c417]">{member.role}</p>
            </div>

             {/* Social Buttons */}
    <div className="relative mt-4 z-20">
      <a
        href={member.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute bottom-14 left-3 w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center
        transition-all duration-500 ${
          clickedIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <FaInstagram size={16} />
      </a>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute bottom-24 left-3 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center
        transition-all duration-500 delay-100 ${
          clickedIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <FaLinkedinIn size={16} />
      </a>

            {/* Plus Button */}
            <button
              onClick={() => setClickedIndex(clickedIndex === i ? null : i)}
              className="absolute bottom-3 right-3 z-20 p-2 bg-white text-black rounded-full hover:scale-110 transition"
            >
              +
            </button>
          </div>
          </div>
        );
      })}
    </div>
  </div>
</div>


          </div>
              <section id="footer" className="px-4 py-10">
                <Footer />
              </section>
          </>
        
  );
};

export default About;
