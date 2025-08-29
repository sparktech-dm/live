import React, { useRef, useEffect, useState } from 'react';
import Seo from '../components/Seo';
import Footer from "../components/Footer";
import ProfileCard from '../helper/ProfileCard';
import AnimatedCircularTeam from "../helper/AnimatedCircularTeam";

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const projects = [
    {
      title: "SparkTech Marketing",
      description: "A sleek digital presence for SparkTech using React + Tailwind.",
      image: "https://images.unsplash.com/photo-1604210740327-dfd2dc1b2dc8?auto=format&fit=crop&w=800&q=80",
      rating: "★★★★☆",
      traffic: "65%",
      client: "Sanjay Kumar",
    },
    {
      title: "PECTeam2K25 Conference",
      description: "Official conference portal with registration and schedule.",
      image: "https://images.unsplash.com/photo-1522199873713-4f1117c1a9f8?auto=format&fit=crop&w=800&q=80",
      rating: "★★★★★",
      traffic: "90%",
      client: "Panimalar College",
    },
    {
      title: "Marcuss Kellii Website",
      description: "A fashion e-commerce site built with React and Firebase.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      rating: "★★★★★",
      traffic: "80%",
      client: "Marcus",
    }
  ];

  const cards = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Card ${i + 1}`,
    image: "/sanjay.png",
  }));

  useEffect(() => {
    const container = containerRef.current;
    const updateScroll = () => setScrollY(container.scrollTop);
    const onScroll = () => window.requestAnimationFrame(updateScroll);

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Seo
        title="Projects | Spark Tech Digital"
        description="Explore our recent digital marketing, branding, and web development projects delivered to satisfied clients."
      />
 
      <div
        ref={containerRef}
        className="h-screen w-screen overflow-y-scroll overflow-x-hidden text-[#f0c417] font-[Inter] relative pt-28  "
      >
        {/* Sticky Card Section */}
        <div
  className="sticky top-1/2 -translate-y-1/2 w-full px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto text-center"
  style={{ zIndex: 10, height: '540px' }}
>
          {/* Text Block */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              We’re not here to follow the digital crowd. We’re here to build things that matter.
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              Spark Tech began with a simple idea — that good marketing isn’t just about algorithms or aesthetics. It’s about clarity, intention, and the courage to do things differently.
              As a digital marketing agency in Chennai, we’re a small team of creatives, strategists, and problem-solvers working with brands that want to grow with purpose, not pressure.
            </p>
          </div>

          {/* Card Stack */}
          <div className="relative w-[90vw] sm:w-[340px] md:w-[400px] h-[500px] sm:h-[540px]">
            {projects.map((project, index) => {
              const progress = scrollY / (window.innerHeight * 0.7);
              const visible = index <= progress;
              const offset = visible ? (index - progress) * 14 : 100;

              return (
                <div
                  key={index}
                  className="absolute w-full h-full bg-[#1b222b] rounded-3xl shadow-2xl p-5 flex flex-col justify-between rotate-3 ease-out "
                  style={{
                    transform: `translateY(${offset}px)`,
                    zIndex: index,
                    opacity: visible ? 1 : 0,
                    willChange: 'transform, opacity',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl h-[200px] sm:h-[240px] w-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mt-4">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#f0c417] font-semibold mt-2">{project.rating}</p>
                    <p className="text-xs text-gray-300">Traffic Boost: {project.traffic}</p>
                    <p className="text-xs text-gray-300">Client: {project.client}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Spacer to allow scrolling */}
        <div style={{ height: `${projects.length * 100}vh` }} />
      </div>

      {/* Founder Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto md:px-5">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
              <span className="text-[#f0c417] text-xs font-black uppercase tracking-wide" style={{ fontFamily: "Inter" }}>
                ABOUT FOUNDER
              </span>
            </div>
            <h2 className="text-white text-2xl md:text-5xl font-bold">Meet the Founder</h2>
          </div>

          <p className="text-gray-300 mb-30 text-2xl">
            At Spark Tech, our leadership is driven by a passion for innovation and a deep understanding of digital transformation. Our founder leads by example, constantly pushing the boundaries to help clients thrive in a fast-evolving tech landscape.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative w-[300px] h-[350px]">
              <ProfileCard
                name="Ram"
                title="Bro"
                handle="ram"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/rambro.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>

            <div className="text-gray-300 max-w-xl text-2xl ml-25 leading-relaxed sm:mt-20">
              James Andrews is a visionary entrepreneur and the driving force behind Spark Tech. With a background in full-stack development and a knack for turning complex challenges into simple solutions, he has led the company to new heights. His leadership is built on innovation, integrity, and relentless focus on quality.
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center mt-20 px-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
          <span className="text-[#f0c417] text-xs font-black uppercase tracking-wide" style={{ fontFamily: "Inter" }}>
            TEAM MEMBERS
          </span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-12">Say Hello to Our Team</h2>
        <div className="min-h-screen flex items-center justify-center p-8">
          <AnimatedCircularTeam cards={cards} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectsSection