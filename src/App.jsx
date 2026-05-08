import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Sidebar from './components/Sidebar';
import FloatingCTA from './components/FloatingCTA';
import Hero from './components/Hero';
import Toggle from './components/Toggle';
import MaterialGrid from './components/MaterialGrid';
import MaterialDetail from './components/MaterialDetail';
import Partners from './components/Partners';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { materialsData } from './utils/materialsData';

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [isWholesale, setIsWholesale] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen pb-24 md:pb-0">
      <Sidebar />
      <FloatingCTA />
      
      <main className="w-full">
        <Hero />
        
        <section id="materials-section" className="py-20 relative z-10">
          <Toggle isWholesale={isWholesale} setIsWholesale={setIsWholesale} />
          
          <MaterialGrid 
            materials={materialsData} 
            setSelectedMaterial={setSelectedMaterial} 
            isWholesale={isWholesale}
          />
        </section>
        
        <Partners />
        <About />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />

      {/* Shared Layout Transition For Detail View */}
      <AnimatePresence>
        {selectedMaterial && (
          <MaterialDetail 
            material={selectedMaterial} 
            setSelectedMaterial={setSelectedMaterial} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
