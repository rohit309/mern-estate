// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //to import in vite form .env
  authDomain: "mern-estate-cde90.firebaseapp.com",
  projectId: "mern-estate-cde90",
  storageBucket: "mern-estate-cde90.appspot.com",
  messagingSenderId: "1028244601780",
  appId: "1:1028244601780:web:30ecbb24a0bf648f2fd0e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);