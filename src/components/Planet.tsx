import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { PlanetData } from '../types/planet';
import { usePlanetStore } from '../store/planetStore';
import { PlanetMaterial } from './planet/PlanetMaterial';
import { PlanetAtmosphere } from './planet/PlanetAtmosphere';
import { PlanetClouds } from './planet/PlanetClouds';
import { PlanetRings } from './planet/PlanetRings';

interface PlanetProps {
  data: PlanetData;
  distance: number;
}

export function Planet({ data, distance }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { camera } = useThree();
  const focusedPlanet = usePlanetStore(state => state.focusedPlanet);
  const setFocusedPlanet = usePlanetStore(state => state.setFocusedPlanet);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      // Orbital movement
      const angle = clock.getElapsedTime() * data.orbitSpeed;
      planetRef.current.position.x = Math.cos(angle) * distance;
      planetRef.current.position.z = Math.sin(angle) * distance;
      
      // Rotation
      planetRef.current.rotation.y += data.rotationSpeed;

      // Camera focus with smooth transition
      if (focusedPlanet?.name === data.name) {
        const position = new THREE.Vector3();
        planetRef.current.getWorldPosition(position);
        
        const isMobile = window.innerWidth < 768;
        const viewDistance = isMobile ? data.size * 6 : data.size * 8;
        const height = isMobile ? data.size * 3 : data.size * 4;
        
        const targetPosition = position.clone().add(
          new THREE.Vector3(viewDistance, height, viewDistance)
        );
        
        camera.position.lerp(targetPosition, 0.05);
        camera.lookAt(position);
      }
    }
  });

  const handlePlanetClick = () => {
    if (planetRef.current) {
      if (focusedPlanet?.name === data.name) {
        setFocusedPlanet(null);
        const isMobile = window.innerWidth < 768;
        camera.position.set(0, isMobile ? 20 : 30, isMobile ? 200 : 300);
        camera.lookAt(0, 0, 0);
      } else {
        setFocusedPlanet(data);
      }
    }
  };

  return (
    <group>
      {/* Planet */}
      <mesh
        ref={planetRef}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        onClick={handlePlanetClick}
      >
        <sphereGeometry args={[data.size, 64, 64]} />
        <PlanetMaterial
          textureUrl={data.textureUrl}
          normalMapUrl={data.normalMapUrl}
          specularMapUrl={data.specularMapUrl}
          baseColor={data.color}
          roughness={data.roughness}
          metalness={data.metalness}
        />
      </mesh>

      {/* Atmosphere */}
      {data.hasAtmosphere && planetRef.current && (
        <PlanetAtmosphere
          size={data.size}
          color={data.atmosphereColor}
          position={planetRef.current.position}
        />
      )}

      {/* Clouds */}
      {data.cloudsUrl && planetRef.current && (
        <PlanetClouds
          cloudsUrl={data.cloudsUrl}
          size={data.size}
          position={planetRef.current.position}
        />
      )}

      {/* Rings */}
      {data.hasRings && data.ringTextureUrl && data.ringColor && planetRef.current && (
        <PlanetRings
          ringTextureUrl={data.ringTextureUrl}
          ringColor={data.ringColor}
          size={data.size}
          position={planetRef.current.position}
        />
      )}

      {/* Planet Label */}
      {isHovered && planetRef.current && (
        <Html
          position={[
            planetRef.current.position.x,
            planetRef.current.position.y + data.size * 1.5,
            planetRef.current.position.z
          ]}
          center
        >
          <div className="bg-black/80 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm">
            <h3 className="font-bold">{data.name}</h3>
            <p className="text-xs opacity-75">Click to explore</p>
          </div>
        </Html>
      )}
    </group>
  );
}