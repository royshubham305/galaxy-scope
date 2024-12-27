import { GalaxyCore } from './galaxy/GalaxyCore';
import { GalaxyDust } from './galaxy/GalaxyDust';

export function Galaxy() {
  return (
    <group>
      <GalaxyCore />
      <GalaxyDust />
    </group>
  );
}