import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../services-page/lokeshwaran_copy.webp";

const TeamCard = ({ name, role, img }) => (
  <motion.div
    className="w-[300px] h-[475px] bg-white rounded-2xl shadow-xl overflow-hidden relative"
  >
    {/* Full image */}
    <img
      src={img}
      alt={name}
      className="w-full h-full object-cover"
    />

    {/* Overlay for text */}
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-sm text-gray-200">{role}</p>
    </div>
  </motion.div>
);

const TeamHoverGroup = () => {
  const [hovered, setHovered] = useState(false);

  const extraMembers = [
    { name: "Alice", role: "Designer", img: img1 },
    { name: "Bob", role: "Backend Dev", img: "https://via.placeholder.com/300x475" },
    { name: "Charlie", role: "ML Engineer", img: "https://via.placeholder.com/300x475" },
    { name: "Daisy", role: "Frontend Dev", img: "https://via.placeholder.com/300x475" },
  ].slice(0, 4);

  // Spread positions evenly left/right
  const positions = [
    { x: -525, y: 0 }, // far left
    { x: -175, y: 0 }, // left-center
    { x: 175, y: 0 },  // right-center
    { x: 525, y: 0 },  // far right
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div
        className="relative flex justify-center items-center perspective-1000"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Main Card (appears only if not hovered) */}
        <AnimatePresence>
          {!hovered && (
            <motion.div
              key="main"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, zIndex: 10 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <TeamCard
                name="Main Lead"
                role="Team Lead"
                img="https://via.placeholder.com/300x475"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Extra Cards fly in from back */}
        <AnimatePresence>
          {hovered &&
            extraMembers.map((member, idx) => (
              <motion.div
                key={member.name + idx}
                initial={{ opacity: 0, scale: 0.2, y: 200, zIndex: -1 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: positions[idx].x,
                  y: positions[idx].y,
                  zIndex: 5,
                }}
                exit={{ opacity: 0, scale: 0.2, y: 200, zIndex: -1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute"
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeamHoverGroup;
