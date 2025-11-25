
import React from 'react';
import { SectionId } from '../types';
import { Reveal } from './ui/Reveal';
import { CONFIG } from '../data';

export const Portfolio: React.FC = () => {
  return (
    <section id={SectionId.WORK} className="pt-40 pb-32 px-6 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-avocado mb-4 block">Избранные проекты</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-6xl md:text-8xl text-charcoal">Визуальный Дневник</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-charcoal/60 font-light max-w-lg leading-relaxed">
              Коллекция пространств, созданных для жизни, а не только для глаз. 
              Каждый проект — это диалог между архитектурой и жителем.
            </p>
          </Reveal>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-y-24">
          {CONFIG.images.portfolio.map((project, i) => {
            // Layout Logic: Alternating spans for a more organic feel
            const colSpan = project.size === 'wide' ? 'lg:col-span-8' 
                          : project.size === 'tall' ? 'lg:col-span-5' 
                          : 'lg:col-span-6';
            
            // Offset logic for "scattered" look
            const offset = (i % 2 !== 0) ? 'lg:mt-24' : '';

            return (
              <div key={project.id} className={`${colSpan} ${offset} group`}>
                <Reveal delay={i * 0.1} width="100%">
                  <div className="relative overflow-hidden">
                    <div className="overflow-hidden mb-6">
                      <img 
                        src={project.src} 
                        alt={project.title} 
                        className={`w-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out
                          ${project.size === 'tall' ? 'aspect-[3/4]' : project.size === 'wide' ? 'aspect-[16/9]' : 'aspect-square'}
                        `}
                      />
                    </div>
                    
                    <div className="flex justify-between items-end border-b border-charcoal/20 pb-4 group-hover:border-avocado transition-colors duration-500">
                      <div>
                         <span className="block font-mono text-xs text-charcoal/60 mb-1">{project.category} — {project.year}</span>
                         <h3 className="font-serif text-3xl md:text-4xl text-charcoal group-hover:text-avocado transition-colors duration-300">
                           {project.title}
                         </h3>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
