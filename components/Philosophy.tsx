
import React from 'react';
import { Reveal } from './ui/Reveal';
import { SectionId } from '../types';
import { CONFIG } from '../data';
import { ArrowRight } from 'lucide-react';

interface PhilosophyProps {
  onNavigateToWork: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onNavigateToWork }) => {
  return (
    <section id={SectionId.PHILOSOPHY} className="py-24 bg-cream-50 text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           {/* Sticky Image Area */}
           <div className="relative h-[600px] hidden md:block sticky top-32">
              <div className="absolute top-0 right-10 w-3/4 h-3/4 z-10">
                <Reveal width="100%" delay={0.2}>
                   <img src={CONFIG.images.philosophy.light} className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" alt="Light" />
                </Reveal>
              </div>
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 z-20">
                 <Reveal width="100%" delay={0.4} direction="up">
                   <img src={CONFIG.images.philosophy.texture} className="w-full h-full object-cover rounded-sm border-4 border-cream-50 shadow-2xl" alt="Texture" />
                 </Reveal>
              </div>
           </div>

           {/* Content */}
           <div className="flex flex-col justify-center py-12">
              <Reveal>
                 <h2 className="font-serif text-5xl md:text-7xl mb-12 text-charcoal leading-tight">
                   Не студия. <br/>
                   <span className="text-avocado-dark italic">Философия.</span>
                 </h2>
              </Reveal>

              <div className="space-y-16">
                 <Reveal delay={0.1}>
                   <div className="group">
                     <h3 className="text-2xl font-serif italic text-avocado-dark mb-2 group-hover:text-avocado transition-colors">01. Совершенное Несовершенство</h3>
                     <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                       Я принимаю ваби-саби. Потертое дерево, старая латунь и текстурная глина рассказывают историю, которую полированный мрамор никогда не расскажет. Ваш дом должен жить вместе с вами.
                     </p>
                   </div>
                 </Reveal>

                 <Reveal delay={0.2}>
                   <div className="group">
                     <h3 className="text-2xl font-serif italic text-avocado-dark mb-2 group-hover:text-avocado transition-colors">02. Свет как Материал</h3>
                     <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                       Прежде чем нарисовать хоть одну стену, я изучаю солнце. Естественный свет — это основной материал; я лишь скульптурирую поверхности, чтобы поймать его.
                     </p>
                   </div>
                 </Reveal>

                 <Reveal delay={0.3}>
                   <div className="group">
                     <h3 className="text-2xl font-serif italic text-avocado-dark mb-2 group-hover:text-avocado transition-colors">03. Игривая Геометрия</h3>
                     <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                       Серьезный дизайн — это скучно. Я использую неожиданные изгибы, смелые цвета и нестандартные формы, чтобы нарушить жесткость современной жизни.
                     </p>
                   </div>
                 </Reveal>

                 <Reveal delay={0.4}>
                   <div className="pt-8">
                     <button 
                       onClick={onNavigateToWork}
                       className="group flex items-center gap-4 px-8 py-4 bg-charcoal text-cream-100 rounded-full hover:bg-avocado transition-all duration-300"
                     >
                        <span className="font-serif italic text-xl">Смотреть проекты</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </button>
                   </div>
                 </Reveal>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
