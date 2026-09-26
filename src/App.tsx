import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { CinematicWalkthrough } from './components/CinematicWalkthrough';
import { CurtainCalculator } from './components/CurtainCalculator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { B2BCommercialSection } from './components/B2BCommercialSection';
import { Top7Strengths } from './components/Top7Strengths';
import { OrderJourney } from './components/OrderJourney';
import { VoiceConciergeAndInquiry } from './components/VoiceConciergeAndInquiry';
import { Footer } from './components/Footer';
import { RoomGridModal } from './components/RoomGridModal';
import { RoomSpecDrawer } from './components/RoomSpecDrawer';
import { CURTAIN_VOLUMES } from './data/muarData';
import { CurtainRoomVolume } from './types';

export const App: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [isGridModalOpen, setIsGridModalOpen] = useState(false);
  const [inspectedRoom, setInspectedRoom] = useState<CurtainRoomVolume | null>(null);
  const [renderMode, setRenderMode] = useState<'ultra' | 'video'>('ultra');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeDoor, setActiveDoor] = useState<'b2c' | 'b2b'>('b2c');

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

  // Ambient soundtrack
  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/ambient_sound.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
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

  const handleJumpToRoom = (index: number) => {
    const walkthrough = document.getElementById('walkthrough-section');
    if (!walkthrough) return;

    const rect = walkthrough.getBoundingClientRect();
    const totalScrollable = walkthrough.offsetHeight - window.innerHeight;
    const targetScrollY =
      window.scrollY + rect.top + (index / CURTAIN_VOLUMES.length) * totalScrollable;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetScrollY, { duration: 1.4 });
    } else {
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
    setActiveRoomIndex(index);
  };

  const handleSwitchDoor = (door: 'b2c' | 'b2b') => {
    setActiveDoor(door);
    if (door === 'b2b') {
      const b2bEl = document.getElementById('b2b-section');
      if (b2bEl && lenisRef.current) {
        lenisRef.current.scrollTo('#b2b-section', { duration: 1.2 });
      }
    } else {
      const calcEl = document.getElementById('calculator-section');
      if (calcEl && lenisRef.current) {
        lenisRef.current.scrollTo('#calculator-section', { duration: 1.2 });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#160B1C] text-[#F7F4EF] selection:bg-[#C5A069] selection:text-[#160B1C]">
      {/* Top Header Navigation */}
      <Header
        onOpenGrid={() => setIsGridModalOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={toggleAudio}
        renderMode={renderMode}
        onToggleRenderMode={() =>
          setRenderMode((prev) => (prev === 'ultra' ? 'video' : 'ultra'))
        }
        activeDoor={activeDoor}
        onSwitchDoor={handleSwitchDoor}
      />

      <main>
        {/* Continuous Spatial Walkthrough: Hero & 8 Curtain Volumes */}
        <CinematicWalkthrough
          renderMode={renderMode}
          onInspectRoom={(room) => setInspectedRoom(room)}
          activeRoomIndex={activeRoomIndex}
          setActiveRoomIndex={setActiveRoomIndex}
          onJumpToRoom={handleJumpToRoom}
        />

        {/* 1. Curtain & Textile Calculator (Strict 1:2 Coefficient, 3 Products, 6 Fabrics) */}
        <CurtainCalculator />

        {/* 2. Before / After Interactive Split Comparison Slider */}
        <BeforeAfterSlider />

        {/* 3. B2B Corporate Systems & 12% VAT Calculator */}
        <B2BCommercialSection />

        {/* 4. Top-7 Strengths of MUAR A (With Video Reels) */}
        <Top7Strengths />

        {/* 5. 5-Step Order Journey (Online Selection & 7,000 ₸ Deposit Note) */}
        <OrderJourney />

        {/* 6. Voice Concierge & Direct WhatsApp Inquiry */}
        <VoiceConciergeAndInquiry />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Bento Grid Modal (88 button) */}
      <RoomGridModal
        isOpen={isGridModalOpen}
        onClose={() => setIsGridModalOpen(false)}
        onSelectRoom={handleJumpToRoom}
        activeRoomIndex={activeRoomIndex}
      />

      {/* Slide-out Textile Specification Drawer */}
      <RoomSpecDrawer
        room={inspectedRoom}
        isOpen={Boolean(inspectedRoom)}
        onClose={() => setInspectedRoom(null)}
      />
    </div>
  );
};
