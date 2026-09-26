import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { TextileHeader } from './components/TextileHeader';
import { EditorialTextileHero } from './components/EditorialTextileHero';
import { FeaturedShowcaseSplit } from './components/FeaturedShowcaseSplit';
import { PopularFabricsPalette } from './components/PopularFabricsPalette';
import { CurtainCalculator } from './components/CurtainCalculator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { B2BCommercialSection } from './components/B2BCommercialSection';
import { Top7Strengths } from './components/Top7Strengths';
import { OrderJourney } from './components/OrderJourney';
import { VoiceConciergeAndInquiry } from './components/VoiceConciergeAndInquiry';
import { Footer } from './components/Footer';
import { FabricOption } from './types';

export const App: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Ambient soundtrack toggle
  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/ambient_sound.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsAudioPlaying(true);
      }).catch((err) => {
        console.warn('Audio autoplay prevented:', err);
      });
    }
  };

  const scrollTo = (id: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo('#' + id, { duration: 1.2 });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFabricFromPalette = (fabric: FabricOption) => {
    // Scroll down to calculator
    scrollTo('calculator-section');
  };

  const handleCategorySelect = (category: 'curtains' | 'bedding' | 'b2b') => {
    if (category === 'b2b') {
      scrollTo('b2b-section');
    } else {
      scrollTo('calculator-section');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221C16] selection:bg-[#B88E52] selection:text-white">
      {/* 1. Header with Brand Emblem & Direct Contacts */}
      <TextileHeader
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={toggleAudio}
        onOpenCalculator={() => scrollTo('calculator-section')}
        onOpenFabrics={() => scrollTo('fabrics-section')}
        onOpenBeforeAfter={() => scrollTo('before-after-section')}
        onOpenB2B={() => scrollTo('b2b-section')}
        onOpenStrengths={() => scrollTo('strengths-section')}
        onOpenOrder={() => scrollTo('order-journey-section')}
        onOpenContacts={() => scrollTo('contact-section')}
      />

      <main>
        {/* 2. Editorial Textile Hero (Exact Pinterest Pin Layout: Left typography & pill CTAs, Right large photo, 3 Floating Category Cards) */}
        <EditorialTextileHero
          onBrowseFabrics={() => scrollTo('fabrics-section')}
          onSelectCategory={handleCategorySelect}
        />

        {/* 3. Featured Showcase Split (Exact 2 Large Side-by-Side Cards: Luxury Draperies & Premium Bedding) */}
        <FeaturedShowcaseSplit
          onCalculateDraperies={() => scrollTo('calculator-section')}
          onCalculateBedding={() => scrollTo('calculator-section')}
        />

        {/* 4. Centered Divider & Popular Fabrics Palette (Exact: —— POPULAR FABRICS —— with swatches & loupe) */}
        <PopularFabricsPalette onSelectFabric={handleSelectFabricFromPalette} />

        {/* 5. Curtain & Textile Calculator (Strict 1:2.0 Coefficient, SVG Wave Profile, 6 Fabrics, French Tulle, Somfy) */}
        <CurtainCalculator />

        {/* 6. Before / After Interactive Split Comparison Slider */}
        <BeforeAfterSlider />

        {/* 7. B2B Corporate Systems & 12% VAT Calculator */}
        <B2BCommercialSection />

        {/* 8. Top-7 Strengths of MUAR A (With Video Reels of Somfy motorized lift & Maral) */}
        <Top7Strengths />

        {/* 9. 5-Step Order Journey (Online Selection, Master Measurement, 7,000 ₸ Deposit Note) */}
        <OrderJourney />

        {/* 10. Voice AI Concierge & Direct WhatsApp Inquiry */}
        <VoiceConciergeAndInquiry />
      </main>

      {/* 11. Luxury Colophon & Footer */}
      <Footer />
    </div>
  );
};
