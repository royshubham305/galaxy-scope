import { OrbitControls } from '@react-three/drei';

export function SceneControls() {
  return (
    <OrbitControls
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={15}   // Closer minimum distance to see planets better
      maxDistance={200}  // Reduced maximum distance for better scale
      zoomSpeed={0.8}    // Slightly faster zoom
      rotateSpeed={0.5}  // Slower rotation for better control
      panSpeed={0.5}     // Slower panning for better control
    />
  );
}