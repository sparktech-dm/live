import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCard = ({ svc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-6 shadow-lg flex flex-col justify-between bg-[#5a5656] hover:scale-[1.03] transition duration-300 hover:bg-[#1A1A1A] hover:shadow-[0_4px_10px_orange]"
      style={{
        cursor: `url('/mouse/${svc.cursor}.svg') 4 4, auto`,
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
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

export default AnimatedCard;
