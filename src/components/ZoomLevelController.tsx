import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useZoomStore } from '../store/zoomStore';

export function ZoomLevelController() {
  const { camera } = useThree();
  const setZoomLevel = useZoomStore((state) => state.setZoomLevel);

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
  }, [camera, setZoomLevel]);

  return null;
}