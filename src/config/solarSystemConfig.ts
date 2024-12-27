// Base configuration
export const SUN_SIZE = 5;           // Reduced sun size
export const SCALE_FACTOR = 0.5;     // Increased scale factor for better visibility
export const ORBIT_SCALE = 8;        // Reduced orbit scale for closer planets

// Orbit distances (in AU - Astronomical Units, scaled down)
export const ORBIT_DISTANCES = {
  MERCURY: 1.2,
  VENUS: 1.8,
  EARTH: 2.5,
  MARS: 3.2,
  JUPITER: 4.2,
  SATURN: 5.5,
  URANUS: 7.0,
  NEPTUNE: 8.5
} as const;

// Planet size multipliers (relative to Earth = 1)
export const PLANET_SCALES = {
  MERCURY: 0.383,
  VENUS: 0.949,
  EARTH: 1,
  MARS: 0.532,
  JUPITER: 3.5,  // Reduced from actual 11.209 for better visualization
  SATURN: 3.0,   // Reduced from actual 9.449
  URANUS: 2.0,   // Reduced from actual 4.007
  NEPTUNE: 1.8   // Reduced from actual 3.883
} as const;