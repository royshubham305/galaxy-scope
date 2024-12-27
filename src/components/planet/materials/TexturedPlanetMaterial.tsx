import { memo, useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, Color, Texture } from 'three';
import { BasicPlanetMaterial } from './BasicPlanetMaterial';

interface TexturedPlanetMaterialProps {
  textureUrl: string;
  normalMapUrl?: string;
  specularMapUrl?: string;
  baseColor: string;
  roughness?: number;
  metalness?: number;
}

export const TexturedPlanetMaterial = memo(function TexturedPlanetMaterial(props: TexturedPlanetMaterialProps) {
  const { textureUrl, normalMapUrl, specularMapUrl, baseColor, roughness = 0.7, metalness = 0.1 } = props;
  const [error, setError] = useState<Error | null>(null);
  const [textures, setTextures] = useState<{
    map?: Texture;
    normalMap?: Texture;
    specularMap?: Texture;
  }>({});

  useEffect(() => {
    const loader = new TextureLoader();
    const loadTexture = async (url: string) => {
      try {
        return await new Promise<Texture>((resolve, reject) => {
          loader.load(url, resolve, undefined, reject);
        });
      } catch (err) {
        console.warn(`Failed to load texture ${url}:`, err);
        throw err;
      }
    };

    const loadAllTextures = async () => {
      try {
        const map = await loadTexture(textureUrl);
        const loadedTextures: typeof textures = { map };

        if (normalMapUrl) {
          loadedTextures.normalMap = await loadTexture(normalMapUrl);
        }
        if (specularMapUrl) {
          loadedTextures.specularMap = await loadTexture(specularMapUrl);
        }

        setTextures(loadedTextures);
        setError(null);
      } catch (err) {
        setError(err as Error);
      }
    };

    loadAllTextures();

    return () => {
      Object.values(textures).forEach(texture => texture?.dispose());
    };
  }, [textureUrl, normalMapUrl, specularMapUrl]);

  if (error || !textures.map) {
    return <BasicPlanetMaterial baseColor={baseColor} roughness={roughness} metalness={metalness} />;
  }

  return (
    <meshStandardMaterial
      map={textures.map}
      normalMap={textures.normalMap}
      metalnessMap={textures.specularMap}
      color={new Color(baseColor)}
      roughness={roughness}
      metalness={metalness}
      envMapIntensity={1}
    />
  );
});