import React, { useRef, useEffect, useState } from 'react';
import Seo from './Seo';
const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  const projects = [
    {
      title: "Marcuss Kellii Website",
      description: "A fashion e-commerce site built with React and Firebase.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      rating: "★★★★★",
      traffic: "80%",
      client: "Marcus",
    },
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
  ];

  useEffect(() => {
    const container = containerRef.current;

    const updateScroll = () => {
      const scrollTop = container.scrollTop;
      setScrollY(scrollTop);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
    };

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
  className="h-screen w-screen overflow-y-scroll overflow-x-hidden  text-white font-[Inter] relative pt-28"
>

      {/* Fake scroll area */}
      <div style={{ height: `${projects.length * 100}vh` }} />

      {/* Fixed layout container */}
      <div className="fixed top-[60%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto pointer-events-none">

        
        {/* Text Block */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Check Our Works<br />With Real Results
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Each project we deliver is proof of our ability to bring real outcomes. Scroll through our success stories, one card at a time.
          </p>
        </div>

        {/* Card Stack */}
        <div className="relative w-[90vw] sm:w-[340px] md:w-[400px] h-[500px] sm:h-[540px]">
          {projects.map((project, index) => {
            const progress = scrollY / (window.innerHeight * 0.7);
            const visible = index <= progress;
            const offset = visible ? (index - progress) * 14 : 1000;

            return (
              <div
                key={index}
                className="absolute w-full h-full bg-[#1e1e1e] rounded-3xl shadow-2xl p-5 flex flex-col justify-between rotate-3 transition-transform duration-300 ease-out"
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
                  <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                </div>
                <div>
                  <p className="text-sm text-orange-400 font-semibold mt-2">{project.rating}</p>
                  <p className="text-xs text-gray-500">Traffic Boost: {project.traffic}</p>
                  <p className="text-xs text-gray-500">Client: {project.client}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectsSection;
