// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAstXnVdWlCa70JcNLhIxwaWZnP8cmjK1I",
  authDomain: "swapso.firebaseapp.com",
  projectId: "swapso",
  storageBucket: "swapso.appspot.com",
  messagingSenderId: "577575185785",
  appId: "1:577575185785:web:60468afdf6aff2447553a8",
  measurementId: "G-21492NPCH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence);
export { auth, db };
