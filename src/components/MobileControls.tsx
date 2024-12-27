import { useState } from 'react';
import { Menu, X, ZoomIn, ZoomOut, RotateCcw, Home } from 'lucide-react';
import { usePlanetStore } from '../store/planetStore';
import { dispatchCanvasEvent } from '../utils/sceneControls';

export function MobileControls() {
  const [isOpen, setIsOpen] = useState(false);
  const setFocusedPlanet = usePlanetStore(state => state.setFocusedPlanet);

  const resetView = () => {
    setFocusedPlanet(null);
    dispatchCanvasEvent('reset');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-sm rounded-full md:hidden"
        aria-label="Toggle controls"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      <div 
        className={`fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 
                    transition-transform duration-300 ease-in-out md:hidden
                    ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex justify-around">
          <ControlButton
            icon={ZoomIn}
            onClick={() => dispatchCanvasEvent('zoom', -100)}
            label="Zoom in"
          />
          <ControlButton
            icon={ZoomOut}
            onClick={() => dispatchCanvasEvent('zoom', 100)}
            label="Zoom out"
          />
          <ControlButton
            icon={RotateCcw}
            onClick={() => dispatchCanvasEvent('reset')}
            label="Reset view"
          />
          <ControlButton
            icon={Home}
            onClick={resetView}
            label="Reset to galaxy view"
          />
        </div>
      </div>
    </>
  );
}

function ControlButton({ icon: Icon, onClick, label }: {
  icon: any;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-white" />
    </button>
  );
}