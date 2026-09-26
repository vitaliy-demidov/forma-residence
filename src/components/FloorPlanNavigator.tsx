import React, { useState } from 'react';
import { Compass, Eye, ArrowUpRight } from 'lucide-react';
import { RESIDENCE_ROOMS } from '../data/residenceData';

interface FloorPlanNavigatorProps {
  onSelectRoom: (index: number) => void;
  activeRoomIndex: number;
}

export const FloorPlanNavigator: React.FC<FloorPlanNavigatorProps> = ({
  onSelectRoom,
  activeRoomIndex
}) => {
  const [hoveredRoomIndex, setHoveredRoomIndex] = useState<number | null>(null);

  const roomsPlan = [
    { idx: 0, id: 'portal', name: '00 Entrance Portal', x: 80, y: 320, w: 90, h: 80 },
    { idx: 1, id: 'living', name: '01 Living Pavilion', x: 200, y: 220, w: 220, h: 160 },
    { idx: 2, id: 'dining', name: '02 Dining Hall', x: 440, y: 220, w: 150, h: 160 },
    { idx: 3, id: 'kitchen', name: '03 Culinary Studio', x: 610, y: 220, w: 160, h: 160 },
    { idx: 4, id: 'suite', name: '04 Primary Suite', x: 440, y: 60, w: 170, h: 140 },
    { idx: 5, id: 'garden', name: '05 Zen Courtyard', x: 260, y: 60, w: 160, h: 140 },
    { idx: 6, id: 'bath', name: '06 Stone Spa & Bath', x: 630, y: 60, w: 140, h: 140 },
    { idx: 7, id: 'grandview', name: '07 Horizon Terrace & Pool', x: 120, y: 400, w: 650, h: 130 },
  ];

  const currentDisplayRoom =
    hoveredRoomIndex !== null
      ? RESIDENCE_ROOMS[hoveredRoomIndex]
      : RESIDENCE_ROOMS[activeRoomIndex];

  return (
    <section id="blueprint-section" className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 max-w-[1780px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#c9b99a] uppercase">
            ARCHITECTURAL SCHEMATICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
            The Residence Blueprint
          </h2>
        </div>
        <p className="max-w-md text-stone-400 text-sm font-light leading-relaxed">
          6,800 square feet organized around a central light well and linear sightline extending through the mountain vista. Click any zone to teleport directly into the space.
        </p>
      </div>

      {/* Blueprint & Info Interactive Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SVG Blueprint Canvas (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#101014] relative overflow-hidden group">
          {/* Blueprint Grid Lines Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* Compass Rose */}
          <div className="absolute top-6 right-6 flex items-center space-x-2 text-[10px] font-mono text-stone-400">
            <Compass className="w-4 h-4 text-[#c9b99a]" />
            <span>N 45° TRUE</span>
          </div>

          <div className="text-[11px] font-mono text-stone-400 mb-6 uppercase tracking-widest">
            LEVEL 01 / GROUND HORIZON • 1:100 SCALE
          </div>

          {/* Blueprint SVG */}
          <div className="w-full aspect-[16/10] relative flex items-center justify-center">
            <svg
              viewBox="0 0 850 560"
              className="w-full h-full select-none"
              style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}
            >
              {/* Outer boundary wall */}
              <rect
                x="60"
                y="40"
                width="730"
                height="500"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Pool outline */}
              <rect
                x="200"
                y="480"
                width="400"
                height="45"
                fill="rgba(56, 189, 248, 0.08)"
                stroke="rgba(56, 189, 248, 0.4)"
                strokeWidth="1.5"
              />
              <text
                x="400"
                y="508"
                textAnchor="middle"
                fill="rgba(56, 189, 248, 0.7)"
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="2"
              >
                16M HORIZON POOL
              </text>

              {/* Rooms polygons */}
              {roomsPlan.map((r) => {
                const isActive = activeRoomIndex === r.idx;
                const isHovered = hoveredRoomIndex === r.idx;

                return (
                  <g
                    key={r.id}
                    onClick={() => onSelectRoom(r.idx)}
                    onMouseEnter={() => setHoveredRoomIndex(r.idx)}
                    onMouseLeave={() => setHoveredRoomIndex(null)}
                    className="cursor-pointer transition-all duration-300"
                  >
                    {/* Room Box */}
                    <rect
                      x={r.x}
                      y={r.y}
                      width={r.w}
                      height={r.h}
                      fill={
                        isActive
                          ? 'rgba(201, 185, 154, 0.25)'
                          : isHovered
                          ? 'rgba(255, 255, 255, 0.12)'
                          : 'rgba(255, 255, 255, 0.03)'
                      }
                      stroke={
                        isActive
                          ? '#c9b99a'
                          : isHovered
                          ? 'rgba(255, 255, 255, 0.6)'
                          : 'rgba(255, 255, 255, 0.25)'
                      }
                      strokeWidth={isActive ? '2' : '1'}
                      className="transition-colors duration-200"
                    />

                    {/* Room Label */}
                    <text
                      x={r.x + r.w / 2}
                      y={r.y + r.h / 2 - 4}
                      textAnchor="middle"
                      fill={isActive ? '#ffffff' : '#d7d5d0'}
                      fontSize="10"
                      fontFamily="JetBrains Mono, monospace"
                      fontWeight="500"
                    >
                      {r.name}
                    </text>

                    <text
                      x={r.x + r.w / 2}
                      y={r.y + r.h / 2 + 14}
                      textAnchor="middle"
                      fill={isActive ? '#c9b99a' : '#8e8e99'}
                      fontSize="8"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      CLICK TO VIEW
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Selected Room Preview Card (4 cols) */}
        <div className="lg:col-span-4 p-8 rounded-2xl border border-white/10 bg-[#101014] flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-mono tracking-widest text-[#c9b99a] uppercase">
                ACTIVE FOCUS
              </span>
              <span className="text-[11px] font-mono text-stone-400">
                {currentDisplayRoom.index} / 07
              </span>
            </div>

            <div className="mt-6 aspect-[16/10] rounded-lg overflow-hidden border border-white/10 relative">
              <img
                src={currentDisplayRoom.image}
                alt={currentDisplayRoom.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <h3 className="text-2xl font-light text-white mt-6">
              {currentDisplayRoom.title}
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mt-2">
              {currentDisplayRoom.description}
            </p>

            <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs font-mono">
              <div className="flex justify-between text-stone-400">
                <span>Floor Area:</span>
                <span className="text-white">{currentDisplayRoom.specs.area}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Ceiling Height:</span>
                <span className="text-white">{currentDisplayRoom.specs.ceiling}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Exposure:</span>
                <span className="text-white">{currentDisplayRoom.specs.exposure}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectRoom(parseInt(currentDisplayRoom.index))}
            className="mt-8 w-full py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-[#c9b99a] transition-colors flex items-center justify-center space-x-2"
          >
            <span>TELEPORT TO ROOM [{currentDisplayRoom.index}]</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
