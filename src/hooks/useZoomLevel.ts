import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';

export type ZoomLevel = 'galaxy' | 'solar-system' | 'planets';

export function useZoomLevel() {
  const { camera } = useThree();
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>('galaxy');

  useEffect(() => {
    const updateZoomLevel = () => {
      const distance = camera.position.length();
      
      if (distance > 200) {
        setZoomLevel('galaxy');
      } else if (distance > 50) {
        setZoomLevel('solar-system');
      } else {
        setZoomLevel('planets');
      }
    };

    // Update initially
    updateZoomLevel();

    // Add listener for camera changes
    const controls = document.querySelector('canvas');
    if (controls) {
      controls.addEventListener('wheel', updateZoomLevel);
    }

    return () => {
      if (controls) {
        controls.removeEventListener('wheel', updateZoomLevel);
      }
    };
  }, [camera]);

  return zoomLevel;
}