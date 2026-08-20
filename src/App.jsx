import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [introDone, setIntroDone] = useState(() => {
    return sessionStorage.getItem('portfolioIntroShown') === 'true';
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('portfolioIntroShown', 'true');
    setIntroDone(true);
  };

  return (
    <>
      <AnimatePresence>
        {!introDone && <IntroScreen onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
