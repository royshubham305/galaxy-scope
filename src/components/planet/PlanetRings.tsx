import { memo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import type { RingProperties } from '../../types/planet';

interface PlanetRingsProps {
  ringTextureUrl: string;
  ringColor: string;
  size: number;
  position?: THREE.Vector3;
  ringProperties?: RingProperties;
}

export const PlanetRings = memo(function PlanetRings({ 
  ringTextureUrl, 
  ringColor, 
  size, 
  position,
  ringProperties = { innerRadius: 1.2, outerRadius: 2.0, tilt: 0.4 }
}: PlanetRingsProps) {
  const ringsRef = useRef<THREE.Mesh>(null);
  const [textureError, setTextureError] = useState(false);
  
  // Handle texture loading with error fallback
  let texture;
  try {
    texture = useTexture(ringTextureUrl);
  } catch (error) {
    if (!textureError) {
      console.warn('Failed to load ring texture, using fallback');
      setTextureError(true);
    }
  }

  const { innerRadius, outerRadius, tilt } = ringProperties;

  useFrame(() => {
    if (ringsRef.current && position) {
      ringsRef.current.position.copy(position);
    }
  });

  return (
    <mesh 
      ref={ringsRef} 
      rotation={[tilt, 0, 0]}
      position={position}
    >
      <ringGeometry 
        args={[
          size * innerRadius, 
          size * outerRadius, 
          128
        ]} 
      />
      <meshStandardMaterial
        map={texture}
        color={ringColor}
        transparent={true}
        opacity={0.8}
        side={THREE.DoubleSide}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
});