// src/components/Home.jsx
import Hero from './Hero';
import Faq from './Faq';
import ContactForm from './ContactForm';

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Faq />
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}


export default Home;
