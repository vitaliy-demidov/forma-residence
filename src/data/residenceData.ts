import { RoomSpec, MaterialItem, StudioProject } from '../types';

export const RESIDENCE_ROOMS: RoomSpec[] = [
  {
    id: 'entrance',
    index: '00',
    number: '00 / ENTRANCE',
    title: 'FORMA',
    subtitle: 'FORMA — INTERIOR DESIGN',
    tagline: 'A RESIDENCE, UNFOLDING IN ONE CONTINUOUS TAKE.',
    image: '/assets/hero_portal.jpg',
    videoStartTime: 0.0,
    videoEndTime: 1.2,
    description: 'The entrance threshold establishes the dialogue between monolithic raw concrete and landscape. An oversized steel-framed pivot door opens directly into the gallery axis.',
    specs: {
      area: '420 sq ft (39 m²)',
      ceiling: '4.2m Cast Board Concrete',
      materials: ['Board-formed architectural concrete', 'Acid-etched low-iron glass', 'Cast bronze threshold'],
      furniture: ['Bespoke travertine entry bench', 'Ancient earthenware urn', 'Bespoke sculptural coat niche'],
      lighting: 'Concealed vertical wall wash (2700K)',
      exposure: 'East-facing morning illumination'
    },
    quote: 'Architecture begins when two bricks are put carefully together.'
  },
  {
    id: 'living',
    index: '01',
    number: '01 / LIVING',
    title: 'THE LIVING SPACE',
    subtitle: '01 / LIVING',
    tagline: 'WHERE THE DAY GATHERS.',
    image: '/assets/living_space.jpg',
    videoStartTime: 1.2,
    videoEndTime: 3.2,
    description: 'A soaring double-aspect living pavilion framed by massive floor-to-ceiling glass. The room balances raw concrete geometry with warm raw linen, patinated saddle leather, and the mountain horizon.',
    specs: {
      area: '1,180 sq ft (110 m²)',
      ceiling: '3.8m Exposed Textured Concrete',
      materials: ['Navona split-face travertine', 'Raw Belgian flax linen', 'Hand-stitched saddle leather', 'Cast concrete'],
      furniture: ['Custom De Padova modular linen sofa', 'Vintage Marcel Breuer Wassily chairs', 'Bespoke rough-hewn stone coffee table'],
      lighting: 'Flos architectural recessed optics + Ingo Maurer task luminaire',
      exposure: 'South-West panoramic mountain exposure'
    },
    quote: 'Space and light and order. Those are the things that men need just as much as they need bread or a place to sleep.'
  },
  {
    id: 'dining',
    index: '02',
    number: '02 / DINING',
    title: 'THE DINING ROOM',
    subtitle: '02 / DINING',
    tagline: 'MADE FOR LONG TABLES, LONG EVENINGS.',
    image: '/assets/dining_room.jpg',
    videoStartTime: 3.2,
    videoEndTime: 5.0,
    description: 'Conceived for intimate dinners that linger late into the night. An unbroken 3.6-meter timber table stands center-stage, framed by views of the valley and warm indirect cove light.',
    specs: {
      area: '620 sq ft (58 m²)',
      ceiling: '3.4m Acoustic Concrete Soffit',
      materials: ['Soap-treated French white oak', 'Woven natural Danish cord', 'Architectural glass', 'Limewash wall treatment'],
      furniture: ['3.6m solid white oak trestle table', 'Hans Wegner CH24 Wishbone chairs', 'Ceramic vessels by local potters'],
      lighting: 'Custom 2.8m blackened bronze linear suspension fixture',
      exposure: 'North-West sunset glow'
    },
    quote: 'The details are not the details. They make the design.'
  },
  {
    id: 'kitchen',
    index: '03',
    number: '03 / KITCHEN',
    title: 'THE KITCHEN',
    subtitle: '03 / KITCHEN',
    tagline: 'HONEST MATERIALS, QUIET FUNCTION.',
    image: '/assets/kitchen.jpg',
    videoStartTime: 5.0,
    videoEndTime: 7.0,
    description: 'Culinary mastery hidden behind monolithic stillness. A continuous poured concrete island commands the space, accented by smoked oak joinery and a direct vista into the verdant courtyard.',
    specs: {
      area: '580 sq ft (54 m²)',
      ceiling: '3.2m Seamless Concrete Ceiling',
      materials: ['Poured micro-cement countertop', 'Smoked European fumed oak', 'Matte black architectural steel', 'Honed basalt'],
      furniture: ['Minimalist solid oak barstools', 'Custom floating concrete stair volume', 'Chemex craft coffee station'],
      lighting: 'Concealed LED light channels & magnetic spotlights',
      exposure: 'Direct connection to protected internal atrium'
    },
    quote: 'Simplicity is about subtracting the obvious and adding the meaningful.'
  },
  {
    id: 'suite',
    index: '04',
    number: '04 / SUITE',
    title: 'PRIMARY SUITE',
    subtitle: '04 / SUITE',
    tagline: 'A ROOM THAT HOLDS THE LIGHT.',
    image: '/assets/primary_suite.jpg',
    videoStartTime: 7.0,
    videoEndTime: 9.2,
    description: 'A sanctuary of quiet contemplation. The low oak platform bed extends horizontally across the room, grounding the space beneath acoustic concrete and facing private foliage.',
    specs: {
      area: '740 sq ft (69 m²)',
      ceiling: '3.0m Natural Formwork Concrete',
      materials: ['Rift-sawn white oak timber', 'Pure washed linen', 'Knotted undyed wool rug', 'Sound-dampening acoustic plaster'],
      furniture: ['Japanese low platform bed with integrated cantilever nightstands', 'Minimalist solid oak day-bench', 'Haiku silent matte fan'],
      lighting: 'Recessed warm backboard glow (2400K) + low-glare reading wands',
      exposure: 'East-facing garden sunrise light'
    },
    quote: 'The home should be the treasure chest of living.'
  },
  {
    id: 'garden',
    index: '05',
    number: '05 / GARDEN',
    title: 'THE GARDEN ROOM',
    subtitle: '05 / GARDEN',
    tagline: 'WHERE THE INTERIOR MEETS THE GREEN.',
    image: '/assets/garden_room.jpg',
    videoStartTime: 9.2,
    videoEndTime: 10.8,
    description: 'An open-air Zen courtyard embedded at the heart of the residence. Kyoto moss, Japanese maples, and basalt stones bring living nature directly into every adjacent room.',
    specs: {
      area: '480 sq ft internal open-air atrium',
      ceiling: 'Open to the Sky & Stars',
      materials: ['Ancient weathered granite', 'Living Kyoto velvet moss', 'Natural bamboo water spout', 'Basalt gravel'],
      furniture: ['Carved stone meditation block', 'Aged granite lantern', 'Weathered cedar deck boundary'],
      lighting: 'Low-voltage moonlighting mounted in maple canopies',
      exposure: 'Direct zenith sky light'
    },
    quote: 'In nature, light creates color. In the picture, color creates the light.'
  },
  {
    id: 'bath',
    index: '06',
    number: '06 / BATH',
    title: 'THE BATH',
    subtitle: '06 / BATH',
    tagline: 'STONE, WATER, STILLNESS.',
    image: '/assets/bath.jpg',
    videoStartTime: 10.8,
    videoEndTime: 12.0,
    description: 'A private spa carved from stone. A massive rough-hewn limestone vanity floats above polished concrete, while a freestanding composite oval tub looks out over misty valleys.',
    specs: {
      area: '340 sq ft (32 m²)',
      ceiling: '3.2m Moisture-treated Board Concrete',
      materials: ['Split-face French limestone', 'Matte black solid brass fixtures', 'Tadelakt lime plaster shower walls', 'Low-iron glass'],
      furniture: ['Custom solid basalt composite oval tub', 'Blackened steel towel easel', 'Hand-loomed waffle linen towels'],
      lighting: 'Full-perimeter frameless backlit mirror + dimmable starry-night spots',
      exposure: 'Misty mountain orientation'
    },
    quote: 'Water does not resist. Water flows. When you plunge your hand into it, you feel only a caress.'
  },
  {
    id: 'grandview',
    index: '07',
    number: '07 / PANORAMA',
    title: 'THE GRAND VIEW',
    subtitle: '07 / PANORAMA',
    tagline: 'FULLY FURNISHED. KEEP SCROLLING TO MEET THE STUDIO.',
    image: '/assets/grand_view.jpg',
    videoStartTime: 12.0,
    videoEndTime: 13.4,
    description: 'The dramatic finale of the continuous walkthrough. Glass walls slide entirely into pocket walls, uniting the deep indoor lounge with a cantilevered horizon terrace and infinity pool.',
    specs: {
      area: '1,600 sq ft pavilion & terrace',
      ceiling: '3.6m Timber-slat soffit with recessed heaters',
      materials: ['Brushed concrete pavers', 'Weathered marine teak', 'Charred Japanese cedar', 'Structural black steel'],
      furniture: ['Deep modular outdoor linen sectional', 'Low timber fire table', 'Century-old olive tree in terracotta amphora'],
      lighting: 'Step-level concealed LED pathlights & warm pool waterline glow',
      exposure: '180° uninterrupted coastal horizon'
    },
    quote: 'Architecture is the learned game, correct and magnificent, of forms assembled in the light.'
  }
];

export const MATERIALS_COLLECTION: MaterialItem[] = [
  {
    name: 'Board-Formed Concrete',
    origin: 'Poured in-situ, Douglas Fir Timber Formwork',
    texture: 'Wood grain embossment with subtle aggregate voids',
    finish: 'Natural matte silane hydrophobic sealer',
    application: 'Load-bearing shear walls, external monoliths, portal',
    colorHex: '#9c9993',
    description: 'Raw tactile strength imprinted with the memory of timber grain. Left unpainted to absorb and celebrate natural changes in daylight.'
  },
  {
    name: 'French White Oak',
    origin: 'Burgundy, France — Sustainable Managed Forests',
    texture: 'Deep wire-brushed natural grain',
    finish: 'Traditional Scandinavian white soap & beeswax',
    application: 'Flooring, custom dining table, primary suite platform',
    colorHex: '#c7b69c',
    description: 'Quarter-sawn boards selected for tight grain and stability. Soap treatment retains the raw tactile warmth of natural wood without yellowing.'
  },
  {
    name: 'Navona Travertine',
    origin: 'Tivoli Quarry, Rome, Italy',
    texture: 'Open-vein natural split-face & honed surfaces',
    finish: 'Unfilled honed tactile polish',
    application: 'Living room hearth, low coffee table, terrace pavers',
    colorHex: '#dfd8cc',
    description: 'Classic Roman architectural stone with warm beige undertones and delicate linear sedimentary striations that soften the concrete envelope.'
  },
  {
    name: 'Matte Black Architectural Steel',
    origin: 'Custom Fabricated, Milan, Italy',
    texture: 'Micro-textured satin feel',
    finish: 'Electrostatically bonded matte carbon fluoropolymer',
    application: 'Door frames, structural columns, slim glazing mullions',
    colorHex: '#1e1e21',
    description: 'Razor-sharp graphic lines that frame views like living paintings. High thermal-break performance with slender structural sightlines.'
  },
  {
    name: 'Washed Belgian Linen',
    origin: 'Flanders, Belgium',
    texture: 'Tactile slubbed natural weave',
    finish: 'Pre-washed with river stones for relaxed drape',
    application: 'Upholstery, drapery, bed textiles, acoustic wall panels',
    colorHex: '#ece7dd',
    description: 'Heavyweight organic linen that breathes with seasonal humidity, creating soft acoustic absorption within monolithic spaces.'
  },
  {
    name: 'Rough-Hewn Basalt Stone',
    origin: 'Volcanic Rift, Central Plateau',
    texture: 'Chiseled thermal finish',
    finish: 'Honed volcanic composite',
    application: 'Bath vanity sink troughs, garden water elements, terrace edge',
    colorHex: '#3c3c40',
    description: 'Deep mineral grey stone with dense volcanic composition. Highly resistant to water wear while providing striking contrast against pale plaster.'
  }
];

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    title: 'The Monolith Ridge',
    year: '2026',
    location: 'Big Sur, California',
    type: 'Private Residence',
    sqft: '6,800 sq ft',
    image: '/assets/grand_view.jpg',
    description: 'A cast-in-place concrete pavilion suspended above the Pacific coastline, designed around a continuous spatial progression.'
  },
  {
    title: 'Villa Kado',
    year: '2025',
    location: 'Kyoto, Japan',
    type: 'Modernist Sanctuary',
    sqft: '5,200 sq ft',
    image: '/assets/garden_room.jpg',
    description: 'An exploration of shadow and courtyard gardens combining traditional sukiya carpentry with brutalist thermal mass.'
  },
  {
    title: 'Casa Bruma',
    year: '2024',
    location: 'Engadin Valley, Switzerland',
    type: 'Alpine Residence',
    sqft: '8,400 sq ft',
    image: '/assets/living_space.jpg',
    description: 'Framing high-altitude glaciated peaks through thermal triple-glazed structural walls of local Valser quartzite.'
  }
];

export const STUDIO_STATS = [
  { label: 'Founded', value: '2016' },
  { label: 'Studios', value: 'New York & Zurich' },
  { label: 'AD100 Award', value: '2024 — 2026' },
  { label: 'Completed Works', value: '38 Residences' }
];
