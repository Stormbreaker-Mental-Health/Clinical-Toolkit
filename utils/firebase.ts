import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAT-4udAr2QE26h6ZPu5I5hYGgCONJGko",
  authDomain: "stormbreaker-65f27.firebaseapp.com",
  projectId: "stormbreaker-65f27",
  storageBucket: "stormbreaker-65f27.appspot.com",
  messagingSenderId: "237663406495",
  appId: "1:237663406495:web:e59721232feed1bb9055aa",
  measurementId: "G-BR86DK6KDS",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
