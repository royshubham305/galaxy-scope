import type { PlanetData } from '../../types/planet';
import { PLANET_TEXTURES } from '../../config/planetTextures';

export const INNER_PLANETS: PlanetData[] = [
  {
    name: 'Mercury',
    size: 0.383,
    color: '#A5A5A5', // Gray with slight brown tint
    atmosphereColor: '#A89B91',
    orbitSpeed: 0.008,
    rotationSpeed: 0.0029,
    description: 'The smallest planet, with a heavily cratered surface resembling Earth\'s Moon',
    textureUrl: PLANET_TEXTURES.mercury.map,
    roughness: 0.8,
    metalness: 0.3,
    hasAtmosphere: false
  },
  {
    name: 'Venus',
    size: 0.949,
    color: '#FFD700', // Golden yellow
    atmosphereColor: '#FFE5B4', // Peach
    orbitSpeed: 0.006,
    rotationSpeed: 0.0024,
    description: 'A toxic world shrouded in thick, yellowish clouds of sulfuric acid',
    textureUrl: PLANET_TEXTURES.venus.map,
    roughness: 0.5,
    metalness: 0.2,
    hasAtmosphere: true
  },
  {
    name: 'Earth',
    size: 1,
    color: '#4B6CB7', // Deep blue
    atmosphereColor: '#87CEEB', // Sky blue
    orbitSpeed: 0.005,
    rotationSpeed: 0.002,
    description: 'Our blue marble, with vast oceans, green continents, and swirling white clouds',
    textureUrl: PLANET_TEXTURES.earth.map,
    normalMapUrl: PLANET_TEXTURES.earth.normal,
    specularMapUrl: PLANET_TEXTURES.earth.specular,
    cloudsUrl: PLANET_TEXTURES.earth.clouds,
    roughness: 0.3,
    metalness: 0.1,
    hasAtmosphere: true
  },
  {
    name: 'Mars',
    size: 0.532,
    color: '#CD5C5C', // Indian red
    atmosphereColor: '#FFB6C1', // Light pink
    orbitSpeed: 0.004,
    rotationSpeed: 0.0021,
    description: 'The Red Planet, featuring vast deserts, deep canyons, and polar ice caps',
    textureUrl: PLANET_TEXTURES.mars.map,
    roughness: 0.7,
    metalness: 0.1,
    hasAtmosphere: true
  }
];