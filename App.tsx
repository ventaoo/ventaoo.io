
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { SectionId } from './types';

type Page = 'home' | 'work';

function App() {
  const [page, setPage] = useState<Page>('home');

  // smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const handleNavigate = (targetPage: Page, sectionId?: string) => {
    setPage(targetPage);
    
    // If navigating to a specific section on the home page (like #philosophy)
    if (targetPage === 'home' && sectionId) {
      // Small timeout to allow render
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <main className="w-full overflow-hidden min-h-screen bg-cream-100">
      <Navigation currentPage={page} onNavigate={handleNavigate} />
      
      {page === 'home' ? (
        <>
          <Hero />
          <Philosophy onNavigateToWork={() => handleNavigate('work')} />
          <Footer />
        </>
      ) : (
        <Portfolio />
      )}
      
    </main>
  );
}

export default App;
