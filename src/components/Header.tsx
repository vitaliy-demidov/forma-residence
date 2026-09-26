import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, LayoutGrid, Compass, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenGrid: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  renderMode: 'ultra' | 'video';
  onToggleRenderMode: () => void;
  activeRoomIndex: number;
  totalRooms: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenGrid,
  isAudioPlaying,
  onToggleAudio,
  renderMode,
  onToggleRenderMode,
  activeRoomIndex,
  totalRooms
}) => {
  const [currentTimeNYC, setCurrentTimeNYC] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTimeNYC(new Intl.DateTimeFormat('en-US', options).format(now) + ' EST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo('#' + id, { duration: 1.5 });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 bg-[#0b0b0d]/85 backdrop-blur-xl border-b border-white/[0.08]'
          : 'py-6 bg-gradient-to-b from-[#0b0b0d]/80 via-[#0b0b0d]/40 to-transparent'
      }`}
    >
      <div className="max-w-[1780px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            <span className="font-sans text-xl sm:text-2xl font-light tracking-[0.28em] text-white group-hover:text-stone-300 transition-colors uppercase">
              FORMA
            </span>
            <span className="hidden lg:inline-block text-[10px] font-mono tracking-widest text-stone-400 uppercase border-l border-white/20 pl-3">
              ARCHITECTURAL STUDIO
            </span>
          </a>

          {/* Time & Telemetry */}
          <div className="hidden xl:flex items-center space-x-2 text-[10px] font-mono text-stone-400 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse"></span>
            <span>NYC {currentTimeNYC}</span>
            <span className="text-white/20">•</span>
            <span>36°08'N 115°08'W</span>
          </div>
        </div>

        {/* Center Nav Links (matching pin: PROJECTS, STUDIO, SERVICES, CONTACT) */}
        <nav className="hidden md:flex items-center space-x-9 text-[11px] font-mono tracking-[0.2em] text-stone-300">
          <button
            onClick={() => scrollToSection('walkthrough-section')}
            className="hover:text-white transition-colors uppercase tracking-widest relative group py-1"
          >
            RESIDENCE
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('blueprint-section')}
            className="hover:text-white transition-colors uppercase tracking-widest relative group py-1"
          >
            BLUEPRINT
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('materials-section')}
            className="hover:text-white transition-colors uppercase tracking-widest relative group py-1"
          >
            MATERIALS
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('studio-section')}
            className="hover:text-white transition-colors uppercase tracking-widest relative group py-1"
          >
            STUDIO
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('inquiry-section')}
            className="hover:text-white transition-colors uppercase tracking-widest relative group py-1"
          >
            CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        {/* Right Nav Utilities */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Mode Switcher: 4K Master vs Original Video Scrub */}
          <button
            onClick={onToggleRenderMode}
            title="Toggle between Ultra 4K Architectural Photography and 60fps Video Scrubber"
            className="hidden sm:flex items-center space-x-2 text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.04] backdrop-blur-md transition-all text-stone-300 hover:text-white"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                renderMode === 'ultra' ? 'bg-amber-300' : 'bg-blue-400'
              }`}
            ></span>
            <span>{renderMode === 'ultra' ? 'MODE: 4K CANVAS' : 'MODE: VIDEO SCRUB'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleAudio}
            className="flex items-center space-x-2 text-[10px] font-mono tracking-widest px-2.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.03] text-stone-300 hover:text-white transition-all"
            aria-label="Toggle ambient soundtrack"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-stone-200" />
                <div className="flex items-end space-x-[2px] h-3">
                  <span className="w-[2px] bg-white/80 animate-soundwave-1"></span>
                  <span className="w-[2px] bg-white/80 animate-soundwave-2"></span>
                  <span className="w-[2px] bg-white/80 animate-soundwave-3"></span>
                  <span className="w-[2px] bg-white/80 animate-soundwave-4"></span>
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline text-stone-400">SOUND: OFF</span>
              </>
            )}
          </button>

          {/* Pinterest Pin Match: "RESIDENTIAL INTERIORS" + Grid Icon 88 */}
          <button
            onClick={onOpenGrid}
            className="group flex items-center space-x-2.5 text-[11px] font-mono tracking-[0.2em] uppercase text-stone-200 hover:text-white transition-colors pl-2"
          >
            <span className="hidden sm:inline">RESIDENTIAL INTERIORS</span>
            <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/60 bg-white/[0.05] group-hover:bg-white/[0.12] flex items-center justify-center transition-all">
              <LayoutGrid className="w-3.5 h-3.5 text-stone-300 group-hover:text-white group-hover:rotate-90 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
