import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { createGalaxyParticles } from './galaxyUtils';

export function GalaxyDust() {
  const dustRef = useRef<THREE.Points>(null);
  const { positions, colors } = createGalaxyParticles({
    count: 20000,
    radius: 30,
    branches: 5,
    spin: 0.8,
    randomness: 0.5,
    randomnessPower: 2,
    insideColor: '#ff9040',
    outsideColor: '#1b3984',
    size: 0.1
  });

  useFrame(({ clock }) => {
    if (dustRef.current) {
      dustRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={dustRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.8}
      />
    </points>
  );
}