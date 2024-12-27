import { useZoomStore } from '../store/zoomStore';
import type { ZoomLevel } from '../store/zoomStore';

const titles: Record<ZoomLevel, { title: string; description: string }> = {
  galaxy: {
    title: 'Milky Way Explorer',
    description: 'Zoom in to explore our cosmic neighborhood'
  },
  'solar-system': {
    title: 'Solar System Explorer',
    description: 'Discover the planets orbiting our Sun'
  },
  planets: {
    title: 'Planetary Explorer',
    description: 'Examine the details of our solar system\'s planets'
  }
};

export function Header() {
  const zoomLevel = useZoomStore((state) => state.zoomLevel);
  const { title, description } = titles[zoomLevel];
  
  return (
    <div className="absolute top-5 left-5 text-white transition-opacity duration-500">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-sm opacity-75">{description}</p>
    </div>
  );
}