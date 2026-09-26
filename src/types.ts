export interface CurtainRoomVolume {
  id: string;
  index: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  videoSrc?: string;
  videoStartTime: number;
  videoEndTime: number;
  description: string;
  curtainSpec: {
    fabricName: string;
    pleatType: string;
    fullnessRatio: string;
    headingTape: string;
    motorization: string;
    acousticAbsorption: string;
    lightBlockage: string;
    recommendedRoom: string;
  };
  quote: string;
  designer: string;
}

export interface FabricOption {
  id: string;
  name: string;
  pricePerMeter: number;
  origin: string;
  density: string;
  composition: string;
  image: string;
  tag: string;
  description: string;
}

export interface CalculatorState {
  product: 'curtains' | 'roman' | 'bedspread';
  width: number;
  height: number;
  fabricId: string;
  includeTulle: boolean;
  includeSomfy: boolean;
}

export interface B2BDirection {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  specs: string[];
  description: string;
  badge: string;
}

export interface TopStrength {
  number: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  videoSrc?: string;
  poster?: string;
}

export interface OrderStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface RoomSpec {
  id: string;
  index: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  videoStartTime: number;
  videoEndTime: number;
  description: string;
  specs: {
    area: string;
    ceiling: string;
    materials: string[];
    furniture: string[];
    lighting: string;
    exposure: string;
  };
  quote: string;
}

export interface MaterialItem {
  name: string;
  origin: string;
  texture: string;
  finish: string;
  application: string;
  colorHex: string;
  description: string;
}

export interface StudioProject {
  title: string;
  year: string;
  location: string;
  type: string;
  sqft: string;
  image: string;
  description: string;
}
