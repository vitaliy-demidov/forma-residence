# FORMA — Spatial Architecture & Continuous Cinematography Website

A production-grade, award-winning architectural website inspired by the viral one-take continuous residence walkthrough prototype ([Pinterest Reference](https://de.pinterest.com/pin/190980840445922306/)).

Built according to the `cinematic-motion-sites`, `design-taste-frontend`, and `gsap-scrolltrigger` engineering skills.

---

## 🏛️ Spatial Architecture & Narrative Sequence

The website presents a luxury residential commission unfolding in one continuous spatial take:

1. **Volume 00 — Entrance Portal (`FORMA`)**: Monolithic cast board-formed concrete threshold with a pivot glass door looking out toward the mountains.
   > *"A RESIDENCE, UNFOLDING IN ONE CONTINUOUS TAKE. SCROLL TO ENTER."*
2. **Volume 01 — The Living Space**: Soaring double-aspect living pavilion with vintage Wassily chairs, travertine coffee table, and floor-to-ceiling mountain vista.
   > *"WHERE THE DAY GATHERS."*
3. **Volume 02 — The Dining Room**: 3.6m solid French White Oak dining table with Hans Wegner wishbone chairs and suspended bronze linear luminaire.
   > *"MADE FOR LONG TABLES, LONG EVENINGS."*
4. **Volume 03 — The Kitchen**: Monolithic poured concrete island, smoked fumed oak joinery, and floating concrete staircase with direct courtyard access.
   > *"HONEST MATERIALS, QUIET FUNCTION."*
5. **Volume 04 — Primary Suite**: Japanese low platform bed with integrated warm headboard lighting and private garden view.
   > *"A ROOM THAT HOLDS THE LIGHT."*
6. **Volume 05 — The Garden Room**: Internal Zen moss garden with Japanese maples, stepping stones, and natural water basin.
   > *"WHERE THE INTERIOR MEETS THE GREEN."*
7. **Volume 06 — The Bath**: Monolithic rough-hewn limestone vanity, matte black fixtures, and freestanding oval tub overlooking misty mountain ridges.
   > *"STONE, WATER, STILLNESS."*
8. **Volume 07 — The Grand View**: Panoramic living room opening entirely onto an infinity terrace with heated horizon pool and coastal sunset view.
   > *"FULLY FURNISHED. KEEP SCROLLING TO MEET THE STUDIO."*

---

## ⚡ Technical Features

- **Dual-Mode Rendering Engine**:
  - **Ultra 4K Canvas Mode**: High-definition architectural imagery with subtle depth parallax, mouse-follow breathing, and smooth cross-dissolving transitions.
  - **Video Scrub Mode**: 60fps damped Lerp video scrubbing powered by GOP=5 fast-seek keyframe encoded MP4 (`walkthrough_cropped.mp4`).
- **Interactive HUD Overlay**:
  - Exact typography, coordinates (`36°08'N 115°08'W`), and dynamic time in New York studio.
  - Interactive bottom scrub bar with room milestones (`00` to `07`).
- **Residential Interiors Bento Grid (`88` Button)**:
  - Accessible via header button to inspect and teleport directly to any volume.
- **Architectural Spec Sheet Drawer**:
  - Slide-out inspection drawer detailing square footage, ceiling volume, lighting architecture, custom furniture, and solar exposure.
- **Interactive SVG Blueprint Navigator**:
  - Architectural 1:100 scale floor plan with interactive hotspots and teleportation.
- **Tactile Material Library**:
  - Swatch palette for Board-Formed Concrete, French Oak, Navona Travertine, Blackened Steel, Belgian Linen, and Basalt.
- **Spatial Audio Experience**:
  - Atmospheric soundtrack with animated soundwave visualizer and mute/unmute control.
- **Client Commissioning Form**:
  - Editorial inquiry form with budget tiers and project scope selection.

---

## 🚀 Running Locally

```bash
# Navigate to project
cd /Users/vitalij/.gemini/antigravity/scratch/forma-residence

# Install dependencies (if not already installed)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

Dev server default URL: `http://localhost:3000/`
