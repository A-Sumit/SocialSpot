// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "SocialSpot.firebaseapp.com",
  projectId: "SocialSpot",
  storageBucket: "SocialSpot.appspot.com",
  messagingSenderId: "709070286140",
  appId: "1:709070286140:web:3dcb14fd72029657498239"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);