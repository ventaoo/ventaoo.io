import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll Reveal Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // Run once on mount

  return (
    <div className="bg-stone-50 min-h-screen flex flex-col font-sans">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        {/* Changed onExplore to point to Philosophy (Profile) instead of Works */}
        <Hero id={Section.HOME} onExplore={() => scrollToSection(Section.PHILOSOPHY)} />
        <Philosophy id={Section.PHILOSOPHY} />
        <Portfolio id={Section.WORKS} />
        <Contact id={Section.CONTACT} />
      </main>

      <Footer />
    </div>
  );
};

export default App;