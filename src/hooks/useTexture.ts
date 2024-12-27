import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useState, useEffect } from 'react';

export function useSafeTexture(url: string | undefined) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) return;

    const loader = new TextureLoader();
    loader.load(
      url,
      (loadedTexture) => setTexture(loadedTexture),
      undefined,
      (err) => {
        console.warn(`Failed to load texture: ${url}`, err);
        setError(err);
      }
    );

    return () => {
      if (texture) {
        texture.dispose();
      }
    };
  }, [url]);

  return { texture, error };
}