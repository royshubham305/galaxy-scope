import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Galaxy } from './Galaxy';
import { SolarSystem } from './SolarSystem';
import { usePlanetStore } from '../store/planetStore';

export function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const focusedPlanet = usePlanetStore(state => state.focusedPlanet);

  useFrame(() => {
    if (groupRef.current && !focusedPlanet) {
      groupRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Stars radius={300} depth={50} count={5000} factor={4} fade />
      
      <group ref={groupRef}>
        <Galaxy />
        <SolarSystem />
      </group>
    </>
  );
}