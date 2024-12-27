import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { SUN_SIZE } from '../../../config/solarSystemConfig';

export function SunGlow() {
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (glowRef.current) {
      glowRef.current.rotation.y = -clock.getElapsedTime() * 0.001;
    }
  });

  return (
    <mesh ref={glowRef}>
      <sphereGeometry args={[SUN_SIZE * 1.2, 32, 32]} />
      <meshBasicMaterial
        color="#FFFF00"
        transparent
        opacity={0.15}
        depthWrite={false}
      />
    </mesh>
  );
}