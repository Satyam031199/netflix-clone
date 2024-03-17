import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCS32mt6xo83qhi4LItIftwOpXG9Hq-a2k",
  authDomain: "react-netflix-50966.firebaseapp.com",
  projectId: "react-netflix-50966",
  storageBucket: "react-netflix-50966.appspot.com",
  messagingSenderId: "27329917916",
  appId: "1:27329917916:web:67faecfb1c42ae26831519"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);