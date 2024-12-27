import { memo } from 'react';
import { BasicPlanetMaterial } from './materials/BasicPlanetMaterial';
import { TexturedPlanetMaterial } from './materials/TexturedPlanetMaterial';

interface PlanetMaterialProps {
  textureUrl?: string;
  normalMapUrl?: string;
  specularMapUrl?: string;
  baseColor: string;
  roughness?: number;
  metalness?: number;
}

export const PlanetMaterial = memo(function PlanetMaterial(props: PlanetMaterialProps) {
  const { textureUrl } = props;

  if (!textureUrl) {
    return <BasicPlanetMaterial {...props} />;
  }

  try {
    return <TexturedPlanetMaterial {...props} textureUrl={textureUrl} />;
  } catch (error) {
    console.warn(`Failed to load texture for planet: ${error}`);
    return <BasicPlanetMaterial {...props} />;
  }
});