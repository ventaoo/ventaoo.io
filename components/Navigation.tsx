import React, { useState, useEffect } from 'react';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled ? 'bg-stone-50/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
  }`;

  const linkClasses = (section: Section) => `
    cursor-pointer text-sm uppercase tracking-[0.2em] transition-colors duration-300
    ${activeSection === section ? 'text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-800'}
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => scrollToSection(Section.HOME)}
          className="cursor-pointer z-50 group"
        >
          <h1 className="text-xl font-serif font-light tracking-widest group-hover:opacity-70 transition-opacity">
            VENTAOO
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <button onClick={() => scrollToSection(Section.PHILOSOPHY)} className={linkClasses(Section.PHILOSOPHY)}>Philosophy</button>
          <button onClick={() => scrollToSection(Section.WORKS)} className={linkClasses(Section.WORKS)}>Works</button>
          <button onClick={() => scrollToSection(Section.CONTACT)} className={linkClasses(Section.CONTACT)}>Contact</button>
        </div>

        {/* Mobile Menu Icon (Simplified for this demo) */}
        <div className="md:hidden">
          <button onClick={() => scrollToSection(Section.CONTACT)} className="text-xs uppercase tracking-widest border border-stone-800 px-4 py-2">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};