import { Canvas } from '@react-three/fiber';
import { Scene } from '../components/Scene';
import { SceneControls } from '../components/controls';
import { MobileControls } from '../components/MobileControls';
import { Header } from '../components/Header';
import { ZoomLevelController } from '../components/ZoomLevelController';
import { PlanetInfo } from '../components/PlanetInfo';
import { useEffect, useState } from 'react';

export function ExplorePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{
          position: [0, isMobile ? 20 : 30, isMobile ? 50 : 100],
          fov: isMobile ? 75 : 60,
          near: 0.1,
          far: 1000,
        }}
        dpr={[1, 2]} // Optimize for mobile devices
        performance={{ min: 0.5 }} // Better performance on low-end devices
      >
        <Scene />
        <SceneControls />
        <ZoomLevelController />
      </Canvas>

      <Header />
      <MobileControls />
      <PlanetInfo />
    </div>
  );
}