
import React from 'react';
import { Reveal } from './ui/Reveal';
import { SectionId } from '../types';
import { CONFIG } from '../data';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex flex-col pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-cream-100">
      
      {/* Large Background Typography (Decor) - Translated */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none z-0">
         <div className="whitespace-nowrap animate-marquee font-serif text-[20vw] leading-none">
            ИНТЕРЬЕР АРХИТЕКТУРА ПРОСТРАНСТВО ФОРМА СВЕТ
         </div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
        
        {/* Main Visual */}
        <div className="lg:col-span-7 relative order-2 lg:order-1 z-10">
          <Reveal delay={0.2} width="100%">
            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm">
              <img 
                src={CONFIG.images.hero.main} 
                alt="Interior Mood" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2s] ease-in-out"
              />
            </div>
          </Reveal>
          
          {/* Overlapping Decorative Image */}
          <div className="absolute -bottom-12 -right-6 md:-right-12 w-48 md:w-64 aspect-[3/4] hidden md:block">
            <Reveal delay={0.4} direction="up">
               <div className="border-4 border-cream-100 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                 <img src={CONFIG.images.hero.portrait} alt="Portrait" className="w-full h-full object-cover" />
               </div>
            </Reveal>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full order-1 lg:order-2 pt-8 lg:pt-20 relative z-20">
          <Reveal>
             <div className="flex items-center gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-avocado animate-pulse"></div>
                <span className="font-mono text-sm uppercase tracking-widest text-avocado">
                  Открыт к проектам 2025
                </span>
             </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] text-charcoal mb-8 -ml-1">
              Дизайн <br/>
              <span className="italic text-avocado">ощущается</span> <br/>
              так.
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl font-light text-charcoal-light leading-relaxed max-w-md ml-1 border-l-2 border-avocado pl-6">
              Я {CONFIG.profile.name}. Я не просто заполняю комнаты мебелью, я создаю атмосферу. 
              Игривую, органичную и бескомпромиссно личную.
            </p>
          </Reveal>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-12 hidden md:block z-20">
        <Reveal delay={0.6}>
           <div className="flex flex-col gap-2 font-mono text-xs text-charcoal-light uppercase tracking-widest">
              <span>Локация</span>
              <span>Шанхай / Удаленно</span>
           </div>
        </Reveal>
      </div>
    </section>
  );
};
