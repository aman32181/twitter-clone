// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Va8jccgGEpfny76OmW7q4pmrz052rS0",
  authDomain: "twitter-25e55.firebaseapp.com",
  projectId: "twitter-25e55",
  storageBucket: "twitter-25e55.firebasestorage.app",
  messagingSenderId: "399769007866",
  appId: "1:399769007866:web:ec7314c94c03bcf5047b43",
  measurementId: "G-LNZY0N1Y3J"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
