import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlanetAtmosphereProps {
  size: number;
  color: string;
  position?: THREE.Vector3;
}

export function PlanetAtmosphere({ size, color, position }: PlanetAtmosphereProps) {
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      if (position) {
        atmosphereRef.current.position.copy(position);
      }
    }
  });

  return (
    <mesh ref={atmosphereRef} scale={[1.05, 1.05, 1.05]}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.2}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}