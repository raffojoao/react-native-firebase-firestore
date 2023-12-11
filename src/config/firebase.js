import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeFirestore } from 'firebase/firestore';

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyD8Be9q63FFSSJAH9VEGIgGy9LjhguwtSM',
//   authDomain: 'alura-esporte-raffo.firebaseapp.com',
//   projectId: 'alura-esporte-raffo',
//   storageBucket: 'alura-esporte-raffo.appspot.com,',
//   messagingSenderId: '321003597495',
//   appId: '1:321003597495:web:84c4d64e835f72e81fa732',
//   measurementId: 'G-QTVENTVTKN',
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { auth, db };
