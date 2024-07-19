import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-kHk5wSGBE_xSrzFcN7r2CBsyqbwZgbg",
  authDomain: "stormbreaker-production.firebaseapp.com",
  projectId: "stormbreaker-production",
  storageBucket: "stormbreaker-production.appspot.com",
  messagingSenderId: "950453210042",
  appId: "1:950453210042:web:9f10f40eda32dd4ba1eb83",
  measurementId: "G-EKVQK9Y9YS",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };

/**
 * Development environment Firebase configuration:
 *
 * apiKey: "AIzaSyBAT-4udAr2QE26h6ZPu5I5hYGgCONJGko",
 * authDomain: "stormbreaker-65f27.firebaseapp.com",
 * projectId: "stormbreaker-65f27",
 * storageBucket: "stormbreaker-65f27.appspot.com",
 * messagingSenderId: "237663406495",
 * appId: "1:237663406495:web:e59721232feed1bb9055aa",
 * measurementId: "G-BR86DK6KDS",
 */
