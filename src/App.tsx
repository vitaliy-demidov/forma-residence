import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { CinematicWalkthrough } from './components/CinematicWalkthrough';
import { FloorPlanNavigator } from './components/FloorPlanNavigator';
import { MaterialLibrary } from './components/MaterialLibrary';
import { ArchitecturalMonograph } from './components/ArchitecturalMonograph';
import { StudioWorks } from './components/StudioWorks';
import { InquiryForm } from './components/InquiryForm';
import { Footer } from './components/Footer';
import { RoomGridModal } from './components/RoomGridModal';
import { RoomSpecDrawer } from './components/RoomSpecDrawer';
import { RESIDENCE_ROOMS } from './data/residenceData';
import { RoomSpec } from './types';

export const App: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [isGridModalOpen, setIsGridModalOpen] = useState(false);
  const [inspectedRoom, setInspectedRoom] = useState<RoomSpec | null>(null);
  const [renderMode, setRenderMode] = useState<'ultra' | 'video'>('ultra');
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

  // Audio control
  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/ambient_sound.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.45;
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
      window.scrollY + rect.top + (index / RESIDENCE_ROOMS.length) * totalScrollable;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetScrollY, { duration: 1.5 });
    } else {
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
    setActiveRoomIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-[#e8e6e1] selection:bg-[#c9b99a] selection:text-black">
      {/* Global Header */}
      <Header
        onOpenGrid={() => setIsGridModalOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={toggleAudio}
        renderMode={renderMode}
        onToggleRenderMode={() =>
          setRenderMode((prev) => (prev === 'ultra' ? 'video' : 'ultra'))
        }
        activeRoomIndex={activeRoomIndex}
        totalRooms={RESIDENCE_ROOMS.length}
      />

      {/* Main Experience: Continuous Camera Walkthrough (Hero & Spatial Journey) */}
      <main>
        <CinematicWalkthrough
          renderMode={renderMode}
          onInspectRoom={(room) => setInspectedRoom(room)}
          activeRoomIndex={activeRoomIndex}
          setActiveRoomIndex={setActiveRoomIndex}
          onJumpToRoom={handleJumpToRoom}
        />

        {/* Architectural Monograph Philosophy */}
        <ArchitecturalMonograph />

        {/* Interactive Floor Plan Blueprint */}
        <FloorPlanNavigator
          onSelectRoom={handleJumpToRoom}
          activeRoomIndex={activeRoomIndex}
        />

        {/* Tactile Material Library */}
        <MaterialLibrary />

        {/* Selected Studio Portfolio Works */}
        <StudioWorks />

        {/* Commissions & Inquiry Form */}
        <InquiryForm />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Bento Grid Modal (triggered by 88 button in header) */}
      <RoomGridModal
        isOpen={isGridModalOpen}
        onClose={() => setIsGridModalOpen(false)}
        onSelectRoom={handleJumpToRoom}
        activeRoomIndex={activeRoomIndex}
      />

      {/* Architectural Specification Drawer */}
      <RoomSpecDrawer
        room={inspectedRoom}
        isOpen={Boolean(inspectedRoom)}
        onClose={() => setInspectedRoom(null)}
      />
    </div>
  );
};
