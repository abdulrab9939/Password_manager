import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from 'firebase/storage'
import firebase from 'firebase/compat/app';
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDglZUPKcdF9WLIb8kpVAB8BS1sbm58nmw",
  authDomain: "passwordmanagers-88b3a.firebaseapp.com",
  projectId: "passwordmanagers-88b3a",
  storageBucket: "passwordmanagers-88b3a.appspot.com",
  messagingSenderId: "74816695188",
  appId: "1:74816695188:web:09daa473cf5a0d2fa97d81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db=getFirestore(app)
export const database = getFirestore(app);
export const storage = getStorage(app)
