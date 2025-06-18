// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "cliptok-fbd5f.firebaseapp.com",
  projectId: "cliptok-fbd5f",
  storageBucket: "cliptok-fbd5f.firebasestorage.app",
  messagingSenderId: "28879673438",
  appId: "1:28879673438:web:7f903e983d7ff4e35b7ccf",
  measurementId: "G-5JGDPB0KSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);