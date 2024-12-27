import { ref, set } from 'firebase/database';
import { database } from '../config/firebase';
import { getIpAddress } from '../services/ipService';
import { captureDeviceFingerprint } from '../services/fingerprintService';

export async function trackVisitor() {
  try {
    const ipAddress = await getIpAddress();
    const visitorRef = ref(database, `visitors/${Date.now()}`);
    
    await Promise.all([
      set(visitorRef, {
        timestamp: new Date().toISOString(),
        ipAddress,
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }),
      captureDeviceFingerprint() // Capture detailed device fingerprint
    ]);
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
}