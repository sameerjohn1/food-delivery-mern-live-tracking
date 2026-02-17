// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-7c150.firebaseapp.com",
  projectId: "vingo-food-delivery-7c150",
  storageBucket: "vingo-food-delivery-7c150.firebasestorage.app",
  messagingSenderId: "114224879419",
  appId: "1:114224879419:web:26a77b297dabe857bf091e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
