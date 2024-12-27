import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

// Separate the 3D controls from the UI controls
export function SceneControls() {
  return (
    <OrbitControls
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={5}
      maxDistance={500}
    />
  );
}

// UI controls as a separate component
export function UIControls() {
  return (
    <div className="absolute bottom-5 right-5 flex gap-2">
      <button
        onClick={() => {
          const controls = document.querySelector('canvas');
          if (controls) {
            controls.dispatchEvent(new WheelEvent('wheel', { deltaY: -100 }));
          }
        }}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
      >
        <ZoomIn className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => {
          const controls = document.querySelector('canvas');
          if (controls) {
            controls.dispatchEvent(new WheelEvent('wheel', { deltaY: 100 }));
          }
        }}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
      >
        <ZoomOut className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => {
          const controls = document.querySelector('canvas');
          if (controls) {
            controls.dispatchEvent(new CustomEvent('reset'));
          }
        }}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
      >
        <RotateCcw className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}