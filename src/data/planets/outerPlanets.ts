import type { PlanetData } from '../../types/planet';
import { PLANET_TEXTURES } from '../../config/planetTextures';

export const OUTER_PLANETS: PlanetData[] = [
  {
    name: 'Jupiter',
    size: 3.5,
    color: '#E8B882', // Sandy orange
    atmosphereColor: '#FFE4B5', // Moccasin
    orbitSpeed: 0.002,
    rotationSpeed: 0.004,
    description: 'The largest planet, with colorful bands and the Great Red Spot storm',
    textureUrl: PLANET_TEXTURES.jupiter.map,
    roughness: 0.4,
    metalness: 0.2,
    hasAtmosphere: true
  },
  {
    name: 'Saturn',
    size: 3.0,
    color: '#F4D03F', // Golden yellow
    atmosphereColor: '#D1C186', // Cornsilk
    orbitSpeed: 0.0015,
    rotationSpeed: 0.003,
    description: 'Known for its spectacular rings, with a pale golden-brown color',
    textureUrl: PLANET_TEXTURES.saturn.map,
    roughness: 0.4,
    metalness: 0.3,
    hasRings: true,
    ringColor: '#FFDE7A', // Lighter ring color
    ringTextureUrl: PLANET_TEXTURES.saturn.rings,
    hasAtmosphere: true,
    ringProperties: {
      innerRadius: 1.6,
      outerRadius: 3.0,
      tilt: 0.466
    }
  },
  {
    name: 'Uranus',
    size: 2.0,
    color: '#B2FFFF', // Light cyan
    atmosphereColor: '#E0FFFF', // Light cyan
    orbitSpeed: 0.001,
    rotationSpeed: 0.002,
    description: 'An ice giant with a distinctive blue-green color due to methane in its atmosphere',
    textureUrl: PLANET_TEXTURES.uranus.map,
    roughness: 0.3,
    metalness: 0.4,
    hasAtmosphere: true
  },
  {
    name: 'Neptune',
    size: 1.8,
    color: '#4169E1', // Royal blue
    atmosphereColor: '#87CEEB', // Sky blue
    orbitSpeed: 0.0008,
    rotationSpeed: 0.002,
    description: 'The windiest planet, with striking deep blue coloring and white cloud streaks',
    textureUrl: PLANET_TEXTURES.neptune.map,
    roughness: 0.3,
    metalness: 0.4,
    hasAtmosphere: true
  }
];