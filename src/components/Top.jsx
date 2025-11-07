
import React, { useState, useEffect } from 'react';
import top from "../assets/arrowhead-up.png"
const Top = () => {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          zIndex:1,
          bottom: '40px',
          left: '10px',
          padding: '10px 15px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
          <img 
      src = {top}   // 👈 replace with your image path
      alt="Back to top"
      style={{ width: '24px', height: '24px' }}
    />
      </button>
    )
  );
};

export default Top;