import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZbtUJ1jF0wyytk2OBmGzkt1F7pFrrl4I",
  authDomain: "reactproyects.firebaseapp.com",
  projectId: "reactproyects",
  storageBucket: "reactproyects.appspot.com",
  messagingSenderId: "788936723026",
  appId: "1:788936723026:web:8e6eade0143f3924c0ed8b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);