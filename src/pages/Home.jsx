import React, { useState } from 'react';
import Hero from '../components/Hero.jsx';
import Faq from '../components/Faq.jsx';
import ContactForm from '../components/ContactForm.jsx';
import RocketLaunch from '../helper/RocketLaunch.jsx';

function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="overflow-hidden">
      {!showMainContent ? (
        <RocketLaunch onLaunchEnd={() => setShowMainContent(true)} />
      ) : (
        <>
          <Hero />
          <Faq />
          <div id="contact">
            <ContactForm />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
