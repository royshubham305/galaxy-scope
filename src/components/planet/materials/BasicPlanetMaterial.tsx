import { memo } from 'react';
import { Color } from 'three';

interface BasicPlanetMaterialProps {
  baseColor: string;
  roughness?: number;
  metalness?: number;
}

export const BasicPlanetMaterial = memo(function BasicPlanetMaterial({
  baseColor,
  roughness = 0.7,
  metalness = 0.1
}: BasicPlanetMaterialProps) {
  return (
    <meshStandardMaterial
      color={new Color(baseColor)}
      roughness={roughness}
      metalness={metalness}
    />
  );
});