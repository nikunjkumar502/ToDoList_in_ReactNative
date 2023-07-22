import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSc7jwBFtfuBPFSMLfFpP6wW1oZ7c21As",
  authDomain: "jarvis-5679d.firebaseapp.com",
  projectId: "jarvis-5679d",
  storageBucket: "jarvis-5679d.appspot.com",
  messagingSenderId: "583169482096",
  appId: "1:583169482096:web:63d96e6f612f949a0e83b5",
  measurementId: "G-YMBK1V9CXL",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
 