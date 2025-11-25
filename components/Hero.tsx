
import React from 'react';
import { Section } from '../types';
import { IMAGES } from '../constants/images';

interface HeroProps {
  id: string;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ id, onExplore }) => {
  return (
    <section id={id} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.HERO.BACKGROUND}
          alt="Ventaoo Interior Design" 
          className="w-full h-full object-cover opacity-90 scale-105 animate-[kenburns_20s_infinite_alternate]"
        />
        {/* Slightly darker overlay for text contrast */}
        <div className="absolute inset-0 bg-stone-950/20 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <div className="reveal-on-scroll">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 text-stone-900 font-bold bg-white/70 backdrop-blur-md inline-block px-6 py-3 rounded-sm shadow-sm">
            Ventaoo Interiors
            </p>
        </div>
        
        <h2 className="reveal-on-scroll delay-100 text-5xl md:text-7xl lg:text-9xl font-serif text-stone-900 mb-8 leading-[0.9] drop-shadow-sm">
          Sculpting <br />
          <span className="italic font-light opacity-90 ml-12">Silence</span>
        </h2>
        
        <div className="flex flex-col items-center mt-12 reveal-on-scroll delay-200">
          <p className="max-w-md text-stone-900 font-normal text-lg mb-10 leading-relaxed drop-shadow-sm">
            Crafting residential and commercial sanctuaries in Shanghai since 2020.
          </p>
          <button 
            onClick={onExplore}
            className="group relative px-10 py-4 bg-stone-900 text-stone-50 text-xs uppercase tracking-[0.25em] overflow-hidden transition-all hover:bg-stone-800 shadow-lg"
          >
            <span className="relative z-10">Profile & Philosophy</span>
          </button>
        </div>
      </div>
    </section>
  );
};
