
import React from 'react';
import { SectionId } from '../types';
import { CONFIG } from '../data';
import { Reveal } from './ui/Reveal';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-avocado-dark text-cream-100 pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <Reveal>
          <div className="flex items-center gap-2 mb-8 opacity-70">
            <span className="w-2 h-2 rounded-full bg-cream-100"></span>
            <span className="font-mono text-xs tracking-widest uppercase">Открыт для новых идей</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-6xl md:text-9xl mb-12 cursor-pointer group leading-tight">
            <span className="group-hover:text-avocado-light transition-colors duration-500">Обсудим</span>
            <br/>
            <span className="italic font-light opacity-50 group-hover:opacity-100 transition-opacity duration-500">пространство.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <a 
            href={`mailto:${CONFIG.profile.email}`}
            className="text-xl md:text-xl font-light hover:text-avocado-light transition-colors"
          >
            {CONFIG.profile.email}
          </a>
        </Reveal>

        <div className="w-full h-px bg-white/10 mt-24 mb-8" />

        <div className="flex flex-col md:flex-row justify-between w-full text-white/40 text-xs font-mono uppercase tracking-widest">
          <p>© 2024 {CONFIG.profile.name}.</p>
          <p>Портфолио Интерьерного Дизайна</p>
        </div>
      </div>
    </footer>
  );
};
