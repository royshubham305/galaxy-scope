import { ref, set } from 'firebase/database';
import { database } from '../config/firebase';
import { getIpAddress } from './ipService';
import { getIndianTimestamp } from '../utils/dateUtils';

interface DeviceFingerprint {
  userAgent: string;
  language: string;
  platform: string;
  screen: {
    resolution: string;
    colorDepth: number;
  };
  hardware: {
    deviceMemory?: number;
    hardwareConcurrency?: number;
    touchSupport: boolean;
  };
  browser: {
    cookiesEnabled: boolean;
    plugins: string[];
  };
  canvas: string;
  webgl: string;
}

function generateCanvasFingerprint(): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return 'canvas-not-supported';

  canvas.width = 200;
  canvas.height = 50;
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillStyle = '#f60';
  ctx.fillRect(125,1,62,20);
  ctx.fillStyle = '#069';
  ctx.fillText('Fingerprint', 2, 15);
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
  ctx.fillText('Canvas', 4, 17);

  return canvas.toDataURL().split(',')[1].slice(0, 32);
}

function getWebGLFingerprint(): string {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');
  if (!gl) return 'webgl-not-supported';

  return [
    gl.getParameter(gl.VENDOR),
    gl.getParameter(gl.RENDERER),
    gl.getParameter(gl.VERSION)
  ].join('::');
}

function getBrowserPlugins(): string[] {
  if (!navigator.plugins) return [];
  return Array.from(navigator.plugins).map(p => p.name);
}

export async function captureDeviceFingerprint(): Promise<void> {
  try {
    const ipAddress = await getIpAddress();
    const indianTimestamp = getIndianTimestamp();
    const fingerprintId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    const fingerprint: DeviceFingerprint = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screen: {
        resolution: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth
      },
      hardware: {
        deviceMemory: (navigator as any).deviceMemory,
        hardwareConcurrency: navigator.hardwareConcurrency,
        touchSupport: 'ontouchstart' in window
      },
      browser: {
        cookiesEnabled: navigator.cookieEnabled,
        plugins: getBrowserPlugins()
      },
      canvas: generateCanvasFingerprint(),
      webgl: getWebGLFingerprint()
    };

    const fingerprintRef = ref(database, `fingerprints/${fingerprintId}`);
    await set(fingerprintRef, {
      timestamp: indianTimestamp,
      ipAddress,
      ...fingerprint
    });

  } catch (error) {
    console.error('Error capturing device fingerprint:', error);
  }
}