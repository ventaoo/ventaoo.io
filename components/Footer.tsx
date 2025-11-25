import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 px-6 border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            <div className="md:col-span-1">
                <h4 className="text-stone-100 font-serif text-2xl tracking-wider mb-6">VENTAOO</h4>
                <p className="text-xs leading-loose max-w-[200px] text-stone-400">
                    Interior Design Studio<br/>
                    Shanghai, China<br/>
                    Est. 2020
                </p>
            </div>

            <div className="md:col-span-1">
                <h5 className="text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">Sitemap</h5>
                <ul className="space-y-4 text-sm font-medium text-stone-400">
                    <li><a href="#home" className="hover:text-stone-200 transition-colors">Home</a></li>
                    <li><a href="#philosophy" className="hover:text-stone-200 transition-colors">Philosophy</a></li>
                    <li><a href="#works" className="hover:text-stone-200 transition-colors">Selected Works</a></li>
                    <li><a href="#contact" className="hover:text-stone-200 transition-colors">Contact</a></li>
                </ul>
            </div>

            <div className="md:col-span-1">
                <h5 className="text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">Social</h5>
                <ul className="space-y-4 text-sm font-medium text-stone-400">
                    <li><a href="#" className="hover:text-stone-200 transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-stone-200 transition-colors">Pinterest</a></li>
                    <li><a href="#" className="hover:text-stone-200 transition-colors">Xiaohongshu</a></li>
                    <li><a href="#" className="hover:text-stone-200 transition-colors">LinkedIn</a></li>
                </ul>
            </div>

            <div className="md:col-span-1">
                 <h5 className="text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">Newsletter</h5>
                 <div className="border-b border-stone-800 pb-2 flex justify-between">
                     <span className="text-sm italic text-stone-500">Enter your email</span>
                     <span className="text-xs uppercase cursor-pointer hover:text-white font-bold text-stone-400">Join</span>
                 </div>
            </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-600 font-medium">
            <p>&copy; {new Date().getFullYear()} Ventaoo Interiors. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
      </div>
    </footer>
  );
};