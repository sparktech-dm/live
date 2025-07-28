import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import rocketImg from '../assets/Logo.png';
import './RocketLaunch.css';

const RocketLaunch = ({ onLaunchEnd }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [-100, 0, -3000], // Lift off
      scale: [0.3, 1, 1.2],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        times: [0, 0.3, 1],
        ease: 'easeInOut',
      },
    });

    const timeout = setTimeout(() => {
      onLaunchEnd(); // Callback to show the main site
    }, 3000);

    return () => clearTimeout(timeout);
  }, [controls, onLaunchEnd]);

  return (
    <div className="rocket-launch-container">
      <motion.img
        src={rocketImg}
        alt="Rocket"
        className="rocket-launch-img"
        animate={controls}
        initial={{ y: 400, scale: 0.3, opacity: 0 }}
      />
      <div className="flames">
        <div className="flame orange" />
        <div className="flame yellow" />
      </div>
    </div>
  );
};

export default RocketLaunch;
