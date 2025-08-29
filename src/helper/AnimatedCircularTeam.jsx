import React, { useEffect, useRef } from "react";

const HorizontalCylindricalCarousel = ({ cards }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let frameId;
    let rotationY = 0;

    const rotate = () => {
      rotationY = (rotationY + 0.4) % 360; // rotation speed
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1000px) rotateY(${rotationY}deg)`;
      }
      frameId = requestAnimationFrame(rotate);
    };

    rotate();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  const cardCount = cards.length;
  const theta = 360 / cardCount;
  const radius = 220; // radius of cylinder

  return (
    <div className="w-96 h-56 mx-auto mt-40 perspective-1000 sm:perspective-1000 overflow-visible">
      <div
        ref={containerRef}
        className="relative w-full h-full origin-center transition-transform"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {cards.map((card, i) => {
          const rotateY = i * theta;
          const translateZ = radius;

          return (
            <div
              key={card.id}
              className="absolute top-1/2 left-1/2 w-56 h-90 rounded-xl shadow-lg border border-gray-300 overflow-hidden cursor-pointer hover:scale-[1.05] transition-transform duration-300"
              style={{
                transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) translateY(-50%)`,
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalCylindricalCarousel;
