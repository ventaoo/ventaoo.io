
import React, { useState, useEffect, useMemo } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';
import { CONFIG } from '../data';

interface NavigationProps {
  currentPage: 'home' | 'work';
  onNavigate: (page: 'home' | 'work', sectionId?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [active, setActive] = useState<string>(SectionId.HERO);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Removed 'Hello' as per request, relying on Logo for home navigation
  // Translated labels to Russian
  const links = useMemo(() => [
    { label: 'Философия', id: SectionId.PHILOSOPHY },
    { label: 'Контакты', id: SectionId.CONTACT },
  ], []);

  // Handle scroll appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlight on scroll
  useEffect(() => {
    if (currentPage === 'work') {
      setActive(''); // clear active state on work page
      return; 
    }

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [links, currentPage]);

  const handleNavClick = (id: string) => {
     setMobileOpen(false);
     
     // Special case: Contact is common to both, but usually at bottom
     if (id === SectionId.CONTACT) {
        // Just scroll to footer if on home page
        if (currentPage === 'home') {
            const footer = document.getElementById(SectionId.CONTACT);
            if (footer) footer.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If on work page, navigate home then scroll
            onNavigate('home', SectionId.CONTACT);
        }
        return;
     }

     // Navigate to Home sections
     onNavigate('home', id);
  };

  return (
    <>
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto transition-transform duration-300"
      >
        <div className={`
          flex items-center justify-between px-8 py-3 rounded-full
          ${scrolled 
            ? 'bg-cream-100/90 backdrop-blur-md shadow-sm border border-charcoal/5' 
            : 'bg-cream-100/50 backdrop-blur-sm border border-transparent'}
          transition-all duration-500 ease-out
        `}>
          {/* Logo / Name */}
          <button 
            onClick={() => onNavigate('home', SectionId.HERO)}
            className="font-serif italic text-xl md:text-2xl font-bold tracking-tight mr-8 md:mr-12 transition-colors text-charcoal hover:text-avocado"
          >
            {CONFIG.profile.name}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className={`
                  relative px-5 py-2 text-sm rounded-full transition-all duration-300
                  ${active === link.id && currentPage === 'home'
                    ? 'bg-avocado text-cream-100 shadow-sm'
                    : 'text-charcoal opacity-70 hover:opacity-100 hover:text-avocado'}
                `}
              >
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-1 ml-4 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-avocado z-40 flex flex-col items-center justify-center gap-8
        transition-all duration-500 ease-in-out
        ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        {links.map((link, idx) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.id)}
            className="font-serif text-5xl italic text-cream-100 hover:text-charcoal transition-colors"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
};
