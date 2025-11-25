import React, { useState } from 'react';
import { Project } from '../types';

interface PortfolioProps {
  id: string;
}

const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'Maison de Silence', 
    category: 'Residential • Jing\'an', 
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1200', 
    description: 'A wabi-sabi inspired apartment emphasizing raw travertine and natural light.' 
  },
  { 
    id: '2', 
    title: 'Atelier 52', 
    category: 'Commercial • Xuhui', 
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200', 
    description: 'A minimalist workspace designed for clarity and collaboration.' 
  },
  { 
    id: '3', 
    title: 'The Clay House', 
    category: 'Residential • French Concession', 
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1200', 
    description: 'Restoration of a historic lane house using organic clay plasters.' 
  },
  { 
    id: '4', 
    title: 'Kyoto Echo', 
    category: 'Hospitality • Huangpu', 
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200', 
    description: 'A modern tea house blending traditional Japanese joinery with brutalist elements.' 
  },
  { 
    id: '5', 
    title: 'Gallery Void', 
    category: 'Cultural • West Bund', 
    image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1200', 
    description: 'Art exhibition space designed to disappear behind the artwork.' 
  },
  { 
    id: '6', 
    title: 'Obsidian Penthouse', 
    category: 'Residential • Lujiazui', 
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200', 
    description: 'Dark tones and walnut wood creating a moody, intimate atmosphere.' 
  },
];

export const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-200 pb-8 reveal-on-scroll">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-600 font-bold">Selected Works</span>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4">Spatial Narratives</h3>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-stone-600 font-normal text-sm tracking-wide leading-relaxed">
               Interiors / Architecture / Styling <br/> 
               <span className="opacity-70">2020 — Present</span>
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`relative group cursor-pointer reveal-on-scroll ${index === 1 || index === 4 ? 'md:translate-y-16' : ''}`} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden aspect-[4/5] bg-stone-200 relative shadow-md">
                
                {/* Description Overlay - Appears on Hover without shifting layout */}
                <div className="absolute inset-0 bg-stone-900/80 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center backdrop-blur-[2px]">
                    <p className="text-stone-50 font-serif text-lg italic leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        "{project.description}"
                    </p>
                </div>

                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Static Text Below */}
              <div className="mt-6">
                <div className="flex justify-between items-baseline">
                   <h4 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors">{project.title}</h4>
                   <span className="text-[10px] uppercase tracking-widest border border-stone-300 px-2 py-1 text-stone-600 font-medium">{project.category.split('•')[0].trim()}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mt-2 font-medium">{project.category.split('•')[1]?.trim()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center reveal-on-scroll">
            <button className="px-8 py-3 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-colors duration-300">
                Full Archive
            </button>
        </div>
      </div>
    </section>
  );
};