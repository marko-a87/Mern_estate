// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dde26.firebaseapp.com",
  projectId: "mern-estate-dde26",
  storageBucket: "mern-estate-dde26.appspot.com",
  messagingSenderId: "32760092049",
  appId: "1:32760092049:web:3a60b5257cd62429b6f630"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
