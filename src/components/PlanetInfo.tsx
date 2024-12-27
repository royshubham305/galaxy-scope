import { X } from 'lucide-react';
import { usePlanetStore } from '../store/planetStore';

export function PlanetInfo() {
  const focusedPlanet = usePlanetStore(state => state.focusedPlanet);
  const setFocusedPlanet = usePlanetStore(state => state.setFocusedPlanet);

  if (!focusedPlanet) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-20 md:left-1/2 md:right-auto 
                    md:transform md:-translate-x-1/2 
                    bg-black/80 backdrop-blur-md text-white p-6 
                    rounded-t-xl md:rounded-xl max-w-md mx-auto
                    safe-bottom">
      <button 
        onClick={() => setFocusedPlanet(null)}
        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Close info panel"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h2 className="text-2xl font-bold mb-2">{focusedPlanet.name}</h2>
      <p className="text-gray-300 mb-4 text-sm md:text-base">
        {focusedPlanet.description}
      </p>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-400 block">Orbit Speed</span>
          <span className="font-mono">{focusedPlanet.orbitSpeed.toFixed(4)} rad/s</span>
        </div>
        <div>
          <span className="text-gray-400 block">Size</span>
          <span className="font-mono">{focusedPlanet.size} units</span>
        </div>
      </div>
    </div>
  );
}