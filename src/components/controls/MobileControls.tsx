import { useState } from 'react';
import { Menu, X, ZoomIn, ZoomOut, RotateCcw, Home } from 'lucide-react';
import { ControlButton } from './ControlButton';
import { dispatchCanvasEvent } from '../../utils/sceneControls';
import { usePlanetStore } from '../../store/planetStore';

export function MobileControls() {
  const [isOpen, setIsOpen] = useState(false);
  const setFocusedPlanet = usePlanetStore(state => state.setFocusedPlanet);

  const resetView = () => {
    setFocusedPlanet(null);
    dispatchCanvasEvent('reset');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-sm rounded-full md:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Controls Panel */}
      <div className={`fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 transition-transform duration-300 md:hidden
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
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