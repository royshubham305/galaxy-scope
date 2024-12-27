import { memo, useEffect, useRef, useState } from 'react';
import { TextureLoader, Mesh, Vector3, DoubleSide, Texture } from 'three';

interface PlanetCloudsProps {
  cloudsUrl: string;
  size: number;
  position?: Vector3;
}

export const PlanetClouds = memo(function PlanetClouds({ cloudsUrl, size, position }: PlanetCloudsProps) {
  const cloudsRef = useRef<Mesh>(null);
  const [texture, setTexture] = useState<Texture | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      cloudsUrl,
      (loadedTexture) => setTexture(loadedTexture),
      undefined,
      (err) => {
        console.warn(`Failed to load clouds texture: ${err}`);
        setError(err);
      }
    );

    return () => {
      if (texture) {
        texture.dispose();
      }
    };
  }, [cloudsUrl]);

  if (error || !texture) {
    return null;
  }

  return (
    <mesh ref={cloudsRef} scale={[1.02, 1.02, 1.02]} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        opacity={0.4}
        depthWrite={false}
        side={DoubleSide}
      />
    </mesh>
  );
});