import React, { useState } from 'react';
import Hero from '../components/Hero.jsx';
import Faq from '../components/Faq.jsx';
import ContactForm from '../components/ContactForm.jsx';
import RocketLaunch from '../helper/RocketLaunch.jsx';
import Wuc from './Wuc.jsx';


function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="overflow-hidden">
      {!showMainContent ? (
        <RocketLaunch onLaunchEnd={() => setShowMainContent(true)} />
      ) : (
        <>
        <div className='overflow-hidden'>
          <Hero />
          </div>
          <Faq />
          <Wuc/>
          <div id="contact">
            <ContactForm />
          </div>
          
        </>
      )}
    </div>
  );
}

export default Home;
