import { create } from 'zustand';

export type ZoomLevel = 'galaxy' | 'solar-system' | 'planets';

interface ZoomState {
  zoomLevel: ZoomLevel;
  setZoomLevel: (level: ZoomLevel) => void;
}

export const useZoomStore = create<ZoomState>((set) => ({
  zoomLevel: 'galaxy',
  setZoomLevel: (level) => set({ zoomLevel: level }),
}));