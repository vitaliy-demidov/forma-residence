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
