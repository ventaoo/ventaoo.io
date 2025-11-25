
import React from 'react';
import { IMAGES } from '../constants/images';

interface ContactProps {
  id: string;
}

export const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-12 reveal-on-scroll">
            <div>
                <span className="text-xs uppercase tracking-[0.3em] text-stone-600 font-bold block mb-4">Inquiry</span>
                <h3 className="text-5xl md:text-6xl font-serif text-stone-900 leading-none">
                    Create space <br/>
                    <span className="italic text-stone-500">for life.</span>
                </h3>
            </div>
            
            <p className="text-lg text-stone-800 font-light leading-relaxed max-w-md">
                I take on a limited number of residential and commercial projects each year to ensure personal attention to detail. 
                <br/><br/>
                Currently accepting commissions for Q3/Q4 2025.
            </p>

            <div className="pt-8 border-t border-stone-300">
                 <div className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-stone-600 font-bold mb-2">Project Enquiries</p>
                    <a href="mailto:hello@ventaoo.design" className="text-2xl md:text-3xl font-serif text-stone-900 hover:text-stone-600 transition-colors">
                        hello@ventaoo.design
                    </a>
                 </div>
                 
                 <div className="flex gap-12">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-stone-600 font-bold mb-2">Studio</p>
                        <p className="text-stone-800 font-medium">123 Wukang Road,<br/>Shanghai, China</p>
                    </div>
                     <div>
                        <p className="text-xs uppercase tracking-widest text-stone-600 font-bold mb-2">Follow</p>
                        <div className="flex flex-col space-y-1">
                            <a href="#" className="text-stone-800 font-medium hover:underline">Instagram</a>
                            <a href="#" className="text-stone-800 font-medium hover:underline">RedBook</a>
                        </div>
                    </div>
                 </div>
            </div>
          </div>

          <div className="relative h-[600px] bg-stone-200 overflow-hidden hidden md:block reveal-on-scroll delay-100 shadow-xl">
            <img 
                src={IMAGES.CONTACT.FEATURE}
                alt="Interior Detail" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-6 shadow-sm">
                    <p className="font-serif italic text-stone-800 text-center text-lg">
                        "The details are not the details. They make the design."
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
