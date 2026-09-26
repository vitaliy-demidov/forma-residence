import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowDown, Info, ChevronRight, Sparkles } from 'lucide-react';
import { CURTAIN_VOLUMES } from '../data/muarData';
import { CurtainRoomVolume } from '../types';
import { SilkKoiHeroCanvas } from './SilkKoiHeroCanvas';

interface CinematicWalkthroughProps {
  renderMode: 'ultra' | 'video';
  onInspectRoom: (room: CurtainRoomVolume) => void;
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

  // Damped Lerp animation loop (cinematic motion sites standard)
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
    const lerpFactor = 0.085;
    const video = videoRef.current;

    const render = () => {
      currentProgressRef.current +=
        (targetProgressRef.current - currentProgressRef.current) * lerpFactor;

      const progress = currentProgressRef.current;
      setScrollProgress(progress);

      const numRooms = CURTAIN_VOLUMES.length;
      const roomIndex = Math.min(
        numRooms - 1,
        Math.floor(progress * numRooms)
      );
      if (roomIndex !== activeRoomIndex) {
        setActiveRoomIndex(roomIndex);
      }

      // If video scrub mode is active
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

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const currentRoom = CURTAIN_VOLUMES[activeRoomIndex];

  // Calculate opacity & forward dolly scale
  const getRoomStyle = (index: number) => {
    const numRooms = CURTAIN_VOLUMES.length;
    const step = 1 / numRooms;
    const roomStart = index * step;
    const roomEnd = (index + 1) * step;
    const current = scrollProgress;

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

    const localProgress = Math.max(0, Math.min(1, (current - roomStart) / step));
    const scale = 1.0 + localProgress * 0.07;

    return {
      opacity,
      transform: `scale(${scale}) translate3d(${mousePos.x * -7}px, ${mousePos.y * -7}px, 0)`,
      zIndex: Math.round(opacity * 10)
    };
  };

  const handleSeek = (index: number) => {
    onJumpToRoom(index);
  };

  return (
    <div
      id="walkthrough-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[750vh] bg-[#160B1C]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Visual Layer */}
        <div className="absolute inset-0 w-full h-full bg-[#160B1C]">
          {/* Silk & Koi procedural canvas visible in Hero phase */}
          {scrollProgress < 0.25 && <SilkKoiHeroCanvas />}

          {/* Mode 1: High-Res Master Photography Scenes */}
          {renderMode === 'ultra' ? (
            <div className="relative w-full h-full">
              {CURTAIN_VOLUMES.map((room, idx) => {
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
                      className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08]"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Haute-Couture Plum & Dark Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160B1C] via-transparent to-[#160B1C]/60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#160B1C]/70 via-transparent to-[#160B1C]/40" />
                  </div>
                );
              })}
            </div>
          ) : (
            /* Mode 2: 60 FPS Fast-Seek Video Scrubber */
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src="/assets/muar/curtain-motion.mp4"
                playsInline
                muted
                preload="auto"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160B1C] via-transparent to-[#160B1C]/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#160B1C]/60 via-transparent to-[#160B1C]/40" />
            </div>
          )}

          {/* Film grain overlay */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />
        </div>

        {/* Content HUD Overlay: Editorial Luxury Typography */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 max-w-[1780px] mx-auto w-full pointer-events-none">
          <div className="max-w-4xl">
            {/* Subtitle & Studio Location */}
            <div className="inline-flex items-center space-x-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="px-3.5 py-1.5 rounded-full bg-[#23122B]/90 backdrop-blur-md border border-[#C5A069]/40 text-[11px] sm:text-xs font-mono tracking-[0.2em] text-[#D9BC8B] uppercase">
                {currentRoom.subtitle}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#F7F4EF]/60 tracking-wider">
                АСТАНА · 51°08'N 71°26'E
              </span>
            </div>

            {/* Giant Title: e.g. "ПАРАДНАЯ ГОСТИНАЯ", "ВИЛЛА: ВТОРОЙ СВЕТ", "МАСТЕР-СПАЛЬНЯ" */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[1.05] text-[#F7F4EF] uppercase select-none transition-all duration-300 drop-shadow-2xl">
              {currentRoom.title.includes('MUAR') ? (
                <span>
                  АТЕЛЬЕ <span className="muar-a">MUAR&nbsp;A</span>
                </span>
              ) : (
                currentRoom.title
              )}
            </h1>

            {/* Tagline / Architectural description */}
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base font-sans tracking-wide text-[#F7F4EF]/80 uppercase max-w-2xl leading-relaxed">
              {currentRoom.tagline}
            </p>

            {/* Action Bar / Inspect Button */}
            <div className="mt-7 flex flex-wrap items-center gap-4 pointer-events-auto">
              <button
                onClick={() => onInspectRoom(currentRoom)}
                className="group flex items-center space-x-2.5 px-6 py-3 rounded-full bg-[#C5A069] hover:bg-[#d9bc8b] text-[#160B1C] font-sans font-semibold text-xs tracking-wider transition-all duration-300 shadow-xl cursor-pointer"
              >
                <Info className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>ОСМОТРЕТЬ ТЕКСТИЛЬ [{currentRoom.index}]</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="hidden md:flex items-center space-x-3 text-xs font-mono text-[#D9BC8B] border-l border-[#C5A069]/30 pl-4">
                <span>{currentRoom.curtainSpec.fabricName}</span>
                <span>•</span>
                <span>{currentRoom.curtainSpec.fullnessRatio}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom HUD: Progress Scrub Line, Telemetry, Room Milestones */}
        <div className="relative z-30 pb-6 sm:pb-8 px-6 sm:px-12 md:px-20 max-w-[1780px] mx-auto w-full">
          {/* Progress Timeline Header */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#F7F4EF]/75 uppercase mb-3">
            <div className="flex items-center space-x-3">
              <span className="text-[#C5A069]">
                ПРОСТРАНСТВО {currentRoom.index} ИЗ {String(CURTAIN_VOLUMES.length - 1).padStart(2, '0')}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[#F7F4EF]">{currentRoom.title}</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-[#F7F4EF]/50">
                ПРОКРУТИТЕ ДЛЯ ПУТЕШЕСТВИЯ ПО АТЕЛЬЕ
              </span>
              <span className="text-[#D9BC8B] font-mono font-semibold tabular-nums">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>
          </div>

          {/* Interactive Scrub Progress Bar */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickRatio = (e.clientX - rect.left) / rect.width;
              const targetIndex = Math.min(
                CURTAIN_VOLUMES.length - 1,
                Math.floor(clickRatio * CURTAIN_VOLUMES.length)
              );
              handleSeek(targetIndex);
            }}
            className="w-full h-1.5 bg-white/10 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200"
          >
            <div
              style={{ width: `${scrollProgress * 100}%` }}
              className="h-full bg-[#C5A069] transition-all duration-75"
            />
          </div>

          {/* Clickable Room Milestone Buttons */}
          <div className="mt-3 flex items-center justify-between gap-1 overflow-x-auto py-1 scrollbar-none">
            {CURTAIN_VOLUMES.map((room, idx) => {
              const isActive = activeRoomIndex === idx;
              return (
                <button
                  key={room.id}
                  onClick={() => handleSeek(idx)}
                  className={`group flex items-center space-x-1.5 py-1 px-2.5 rounded text-[10px] font-mono tracking-widest transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#F7F4EF] border-b-2 border-[#C5A069] bg-[#23122B]/80 font-bold'
                      : 'text-[#F7F4EF]/60 hover:text-[#F7F4EF] hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={isActive ? 'text-[#C5A069]' : 'text-[#F7F4EF]/40'}>
                    {room.index}
                  </span>
                  <span className="hidden lg:inline">{room.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scroll prompt on hero */}
        {scrollProgress < 0.05 && (
          <div className="absolute bottom-24 right-8 sm:right-16 z-30 flex items-center space-x-3 text-[#D9BC8B] font-mono text-[10px] tracking-widest uppercase animate-bounce pointer-events-none">
            <span>ПРОКРУТИТЕ ДЛЯ ВХОДА</span>
            <div className="w-6 h-6 rounded-full border border-[#C5A069]/40 flex items-center justify-center">
              <ArrowDown className="w-3 h-3 text-[#C5A069]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
