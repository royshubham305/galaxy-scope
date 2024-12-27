const IP_API_URL = 'https://api.ipify.org?format=json';

export async function getIpAddress(): Promise<string> {
  try {
    const response = await fetch(IP_API_URL);
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return 'unknown';
  }
}