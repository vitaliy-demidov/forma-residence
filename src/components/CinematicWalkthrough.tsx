import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowDown, Maximize2, Info, Compass, ChevronRight, ChevronLeft, SlidersHorizontal } from 'lucide-react';
import { RESIDENCE_ROOMS } from '../data/residenceData';
import { RoomSpec } from '../types';

interface CinematicWalkthroughProps {
  renderMode: 'ultra' | 'video';
  onInspectRoom: (room: RoomSpec) => void;
  activeRoomIndex: number;
  setActiveRoomIndex: (index: number) => void;
  onJumpToRoom: (index: number) => void;
}

export const CinematicWalkthrough: React.FC<CinematicWalkthroughProps> = ({
  renderMode,
  onInspectRoom,
  activeRoomIndex,
  setActiveRoomIndex,
  onJumpToRoom
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Physics-based damped Lerp animation loop (as in cinematic-motion-sites skill)
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Lerp loop (60 FPS damping)
  useEffect(() => {
    const lerpFactor = 0.085; // smooth damping
    const video = videoRef.current;

    const render = () => {
      currentProgressRef.current +=
        (targetProgressRef.current - currentProgressRef.current) * lerpFactor;

      const progress = currentProgressRef.current;
      setScrollProgress(progress);

      // Determine active room based on progress
      const numRooms = RESIDENCE_ROOMS.length;
      const roomIndex = Math.min(
        numRooms - 1,
        Math.floor(progress * numRooms)
      );
      if (roomIndex !== activeRoomIndex) {
        setActiveRoomIndex(roomIndex);
      }

      // If video mode is active, scrub video
      if (renderMode === 'video' && video && video.duration) {
        const targetTime = progress * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.02 && !video.seeking) {
          video.currentTime = targetTime;
        }
      }

      rafIdRef.current = requestAnimationFrame(render);
    };

    rafIdRef.current = requestAnimationFrame(render);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [renderMode, activeRoomIndex, setActiveRoomIndex]);

  // Subtle mouse parallax
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const currentRoom = RESIDENCE_ROOMS[activeRoomIndex];

  // Calculate opacity & scale for 4K Canvas rooms based on progress
  const getRoomStyle = (index: number) => {
    const numRooms = RESIDENCE_ROOMS.length;
    const step = 1 / numRooms;
    const roomStart = index * step;
    const roomEnd = (index + 1) * step;
    const current = scrollProgress;

    // Transition crossfade window
    let opacity = 0;
    if (index === 0 && current < roomEnd) {
      opacity = 1 - Math.max(0, (current - (roomEnd - step * 0.4)) / (step * 0.4));
    } else if (index === numRooms - 1 && current >= roomStart - step * 0.4) {
      opacity = Math.min(1, (current - (roomStart - step * 0.4)) / (step * 0.4));
    } else {
      if (current >= roomStart - step * 0.4 && current <= roomEnd + step * 0.4) {
        if (current < roomStart + step * 0.3) {
          opacity = (current - (roomStart - step * 0.4)) / (step * 0.7);
        } else if (current > roomEnd - step * 0.3) {
          opacity = 1 - (current - (roomEnd - step * 0.3)) / (step * 0.7);
        } else {
          opacity = 1;
        }
      }
    }

    opacity = Math.max(0, Math.min(1, opacity));

    // Subtle forward dolly push
    const localProgress = Math.max(0, Math.min(1, (current - roomStart) / step));
    const scale = 1.0 + localProgress * 0.08;

    return {
      opacity,
      transform: `scale(${scale}) translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 0)`,
      zIndex: Math.round(opacity * 10)
    };
  };

  const handleSeek = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    const targetScrollY =
      window.scrollY + rect.top + (index / RESIDENCE_ROOMS.length) * totalScrollable;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  return (
    <div
      id="walkthrough-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[750vh] bg-[#09090b]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 w-full h-full bg-[#0a0a0c]">
          {/* Mode 1: Ultra 4K Architectural Photography Scenes */}
          {renderMode === 'ultra' ? (
            <div className="relative w-full h-full">
              {RESIDENCE_ROOMS.map((room, idx) => {
                const style = getRoomStyle(idx);
                return (
                  <div
                    key={room.id}
                    style={{
                      opacity: style.opacity,
                      transform: style.transform,
                      zIndex: style.zIndex,
                      transition: 'opacity 0.25s ease-out'
                    }}
                    className="absolute inset-0 w-full h-full will-change-transform will-change-opacity pointer-events-none"
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Architectural Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
                  </div>
                );
              })}
            </div>
          ) : (
            /* Mode 2: Original 60 FPS Video Scrubber */
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src="/assets/walkthrough_cropped.mp4"
                playsInline
                muted
                preload="auto"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45" />
            </div>
          )}

          {/* Film grain subtle overlay */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
        </div>

        {/* Content HUD Overlay: Exact Pinterest Pin Typography */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 max-w-[1780px] mx-auto w-full pointer-events-none">
          <div className="max-w-4xl">
            {/* Index & Section Subtitle (e.g. "01 / LIVING" or "FORMA — INTERIOR DESIGN") */}
            <div className="inline-flex items-center space-x-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="px-3 py-1 rounded bg-black/40 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#c9b99a] uppercase">
                {currentRoom.subtitle}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-stone-300 tracking-wider">
                COORD: 36.14° N, 115.15° W
              </span>
            </div>

            {/* Giant Architectural Headline:
                e.g. "FORMA", "THE LIVING SPACE", "THE DINING ROOM", "THE KITCHEN", "PRIMARY SUITE", "THE BATH", "THE GRAND VIEW" */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light tracking-[-0.03em] leading-[0.95] text-white text-cinema uppercase select-none transition-all duration-300">
              {currentRoom.title}
            </h1>

            {/* Poetic Subheading:
                e.g. "WHERE THE DAY GATHERS.", "MADE FOR LONG TABLES, LONG EVENINGS.", "HONEST MATERIALS, QUIET FUNCTION." */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl font-mono tracking-[0.16em] text-stone-200/90 uppercase max-w-2xl text-cinema">
              {currentRoom.tagline}
            </p>

            {/* Action Bar / Inspect Button */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
              <button
                onClick={() => onInspectRoom(currentRoom)}
                className="group flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-white transition-all duration-300 cursor-pointer hover:border-white/50"
              >
                <Info className="w-3.5 h-3.5 text-[#c9b99a]" />
                <span>INSPECT SPEC [{currentRoom.index}]</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="hidden md:flex items-center space-x-4 text-xs font-mono text-stone-400 border-l border-white/15 pl-4">
                <span>{currentRoom.specs.area}</span>
                <span>•</span>
                <span>{currentRoom.specs.exposure}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom HUD: Progress Scrub Line, Telemetry, Room Milestones */}
        <div className="relative z-30 pb-6 sm:pb-8 px-6 sm:px-12 md:px-20 max-w-[1780px] mx-auto w-full">
          {/* Progress Timeline Header */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-stone-300 uppercase mb-3">
            <div className="flex items-center space-x-3">
              <span className="text-[#c9b99a]">
                VOLUME {currentRoom.index} OF {String(RESIDENCE_ROOMS.length - 1).padStart(2, '0')}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-white">{currentRoom.title}</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-stone-400">
                SCROLL OR DRAG TO JOURNEY
              </span>
              <span className="text-white font-mono">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>
          </div>

          {/* Interactive Scrub Progress Bar (exact style of the white bottom bar in the pin) */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickRatio = (e.clientX - rect.left) / rect.width;
              const targetIndex = Math.min(
                RESIDENCE_ROOMS.length - 1,
                Math.floor(clickRatio * RESIDENCE_ROOMS.length)
              );
              handleSeek(targetIndex);
            }}
            className="w-full h-1 bg-white/20 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200"
          >
            {/* Active filled line */}
            <div
              style={{ width: `${scrollProgress * 100}%` }}
              className="h-full bg-white transition-all duration-75"
            />
          </div>

          {/* Clickable Room Milestone Buttons */}
          <div className="mt-3 flex items-center justify-between gap-1 overflow-x-auto py-1 scrollbar-none">
            {RESIDENCE_ROOMS.map((room, idx) => {
              const isActive = activeRoomIndex === idx;
              return (
                <button
                  key={room.id}
                  onClick={() => handleSeek(idx)}
                  className={`group flex items-center space-x-1.5 py-1 px-2 rounded text-[10px] font-mono tracking-widest transition-all cursor-pointer ${
                    isActive
                      ? 'text-white border-b-2 border-[#c9b99a] bg-white/[0.06]'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.02]'
                  }`}
                >
                  <span className={isActive ? 'text-[#c9b99a]' : 'text-stone-500'}>
                    {room.index}
                  </span>
                  <span className="hidden lg:inline">{room.title.replace('THE ', '')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scroll down prompt at bottom right */}
        {scrollProgress < 0.05 && (
          <div className="absolute bottom-24 right-8 sm:right-16 z-30 flex items-center space-x-3 text-stone-300 font-mono text-[10px] tracking-widest uppercase animate-bounce pointer-events-none">
            <span>SCROLL TO ENTER</span>
            <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
              <ArrowDown className="w-3 h-3 text-[#c9b99a]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
