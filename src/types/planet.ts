export interface RingProperties {
  innerRadius: number;
  outerRadius: number;
  tilt: number;
}

export interface PlanetData {
  name: string;
  size: number;
  color: string;
  atmosphereColor: string;
  orbitSpeed: number;
  rotationSpeed: number;
  description: string;
  textureUrl?: string;
  normalMapUrl?: string;
  specularMapUrl?: string;
  cloudsUrl?: string;
  hasRings?: boolean;
  ringColor?: string;
  ringTextureUrl?: string;
  ringProperties?: RingProperties;
  roughness?: number;
  metalness?: number;
  hasAtmosphere?: boolean;
}