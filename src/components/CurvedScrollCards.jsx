import React, { useEffect, useState, useRef } from "react";
import "../flip-cards.css";

const CurvedScrollCards = () => {
  const [position, setPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const cardData = [
    {
      id: 1,
      title: "SEO",
      description: "Strategic SEO that aligns with how your audience thinks, searches, and acts.",
      icon: "🔍",
      frontColor: "#1b222b",
      backColor: "#16213E",
    },
    {
      id: 2,
      title: "Performance Marketing",
      description: "Data-led campaigns that convert curiosity into consistent revenue.",
      icon: "📈",
       frontColor: "#1b222b",
      backColor: "#16213E",
    
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "We balance story and strategy to build engagement and community.",
      icon: "📱",
      frontColor: "#1b222b",
      backColor: "#16213E",
    },
    {
      id: 4,
      title: "Content Marketing",
      description: "Intentional storytelling that earns trust and drives growth.",
      icon: "✍️",
       frontColor: "#1b222b",
      backColor: "#16213E",
    },
    {
      id: 5,
      title: "Branding",
      description: "We shape identities that are consistent, credible, and unmistakably you.",
      icon: "🎨",
       frontColor: "#1b222b",
      backColor: "#16213E",
    },
    {
      id: 6,
      title: "Website Development",
      description: "Digital foundations that support your story, scale, and success.",
      icon: "💻",
       frontColor: "#1b222b",
      backColor: "#16213E",
    }
  ];

  const allCards = [...cardData, ...cardData]; // Duplicate for seamless loop
  const cardWidth = 240 + 16; // Card width + margin
  const totalWidth = cardWidth * cardData.length;

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev - 1;
        if (Math.abs(newPos) >= totalWidth) {
          return 0;
        }
        return newPos;
      });
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, [totalWidth]);

  // Detect center card
  useEffect(() => {
    if (!containerRef.current) return;
    const containerCenter = window.innerWidth / 2;
    const children = containerRef.current.children;
    let closestIndex = null;
    let minDistance = Infinity;

    Array.from(children).forEach((child, index) => {
      const rect = child.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, [position]);

  return (
    <div className="w-full py-20 bg-transparent overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">
          Our <span className="text-yellow-400">Services</span>
        </h2>
        <p className="text-gray-300 mt-2">Explore what we offer</p>
      </div>

      <div className="relative w-full h-[420px]">
        <div
          ref={containerRef}
          className="absolute flex gap-4"
          style={{
            transform: `translateX(${position}px)`,
            willChange: "transform",
            transition: "transform 0.02s linear"
          }}
        >
          {allCards.map((card, i) => (
  <div
    key={i}
    className={`card w-60 h-[400px] rounded-2xl flex-shrink-0 transition-all duration-300 ${
      i === activeIndex
        ? "scale-105 brightness-110 shadow-xl z-10"
        : "scale-95 opacity-80"
    }`}
  >
              <div className="card-inner">
                {/* FRONT */}
                <div className="card-front flex items-center justify-center bg-green-300 text-white rounded-2xl"
                style={{ backgroundColor: card.frontColor }}
                >
                  <h2 className="text-xl font-bold text-center px-4">{card.title}</h2>
                </div>

                {/* BACK */}
                <div className="card-back flex flex-col items-center justify-center p-4 bg-white   text-white rounded-2xl"
                style={{ backgroundColor: card.backColor, color: "#fff" }}
                >
                  <p className="text-sm mb-4 text-center">{card.description}</p>
                  <button className="bg-[#f0c417] text-black px-4 py-2 rounded-lg text-sm">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurvedScrollCards;