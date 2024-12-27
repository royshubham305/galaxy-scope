import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SUN_SIZE } from '../../config/solarSystemConfig';

export function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sunRef.current) {
      sunRef.current.rotation.y = clock.getElapsedTime() * 0.002;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[SUN_SIZE, 64, 64]} />
      <meshPhongMaterial
        color="#FFD700"
        emissive="#FFE87C"
        emissiveIntensity={0.6}
        shininess={0}
      />
    </mesh>
  );
}