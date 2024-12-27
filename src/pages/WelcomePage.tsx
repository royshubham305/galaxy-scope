import { useEffect } from 'react';
import { Hero } from '../components/welcome/Hero';
import { captureDeviceFingerprint } from '../services/fingerprintService';

export function WelcomePage() {
  useEffect(() => {
    captureDeviceFingerprint();
    
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {
        // Silently fail if orientation lock is not supported
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                    from-purple-900/20 via-black to-black overflow-hidden">
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] 
                      bg-cover bg-center opacity-10 pointer-events-none
                      motion-safe:animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="relative">
          <Hero />
        </div>
      </div>
    </div>
  );
}