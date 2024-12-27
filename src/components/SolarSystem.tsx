import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Planet } from './Planet';
import { Sun } from './celestial/Sun';
import { PLANET_DATA } from '../data/planetData';
import { 
  SUN_SIZE, 
  SCALE_FACTOR, 
  ORBIT_SCALE, 
  ORBIT_DISTANCES 
} from '../config/solarSystemConfig';

export function SolarSystem() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.0001;
    }
  });

  return (
    <group ref={groupRef}>
      <Sun />
      
      {PLANET_DATA.map((planet) => {
        const orbitDistance = ORBIT_DISTANCES[planet.name.toUpperCase() as keyof typeof ORBIT_DISTANCES] * ORBIT_SCALE;
        const scaledSize = planet.size * SCALE_FACTOR;
        
        return (
          <Planet
            key={planet.name}
            data={{ ...planet, size: scaledSize }}
            distance={orbitDistance}
          />
        );
      })}
    </group>
  );
}