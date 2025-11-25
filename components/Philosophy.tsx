import React from 'react';

interface PhilosophyProps {
  id: string;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 md:py-32 px-6 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative reveal-on-scroll">
            <div className="aspect-[3/4] overflow-hidden bg-stone-200 shadow-xl">
               <img 
                src="https://picsum.photos/800/1000?blur=1" 
                alt="Portrait" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8 reveal-on-scroll delay-100">
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              A personal dialogue <br/> with your environment.
            </h3>
            
            <div className="w-12 h-0.5 bg-stone-900"></div>
            
            {/* Darkened text colors for readability */}
            <p className="text-stone-800 text-lg leading-relaxed font-light">
              I am <span className="font-medium text-stone-900">Ventaoo</span>. My approach to interior design is deeply rooted in the belief that our surroundings shape our thoughts. I move away from the cluttered and the loud, finding solace in negative space and natural textures.
            </p>
            <p className="text-stone-800 text-lg leading-relaxed font-light">
               This is not a firm; it is a personal studio. Every line drawn and every fabric chosen passes through my hands. I treat each project not as a job, but as a curation of life's backdrop.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-stone-950 mb-3">Simplicity</h4>
                <p className="text-sm text-stone-800 font-medium leading-relaxed">Removing the non-essential to reveal the essential.</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-stone-950 mb-3">Texture</h4>
                <p className="text-sm text-stone-800 font-medium leading-relaxed">Engaging the senses through organic materials.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};