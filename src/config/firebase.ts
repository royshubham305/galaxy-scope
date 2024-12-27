import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDJhOBXV-3N0seBSH-coFd0CzNtERX0E5A",
  authDomain: "galaxyscope-77511.firebaseapp.com",
  databaseURL: "https://galaxyscope-77511-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "galaxyscope-77511",
  storageBucket: "galaxyscope-77511.applestorage.app",
  messagingSenderId: "339266282693",
  appId: "1:339266282693:web:4677d1d036e2bf0a453cac"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);