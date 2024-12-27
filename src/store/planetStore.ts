import { create } from 'zustand';
import type { PlanetData } from '../data/planetData';

interface PlanetState {
  focusedPlanet: PlanetData | null;
  setFocusedPlanet: (planet: PlanetData | null) => void;
}

export const usePlanetStore = create<PlanetState>((set) => ({
  focusedPlanet: null,
  setFocusedPlanet: (planet) => set({ focusedPlanet: planet }),
}));