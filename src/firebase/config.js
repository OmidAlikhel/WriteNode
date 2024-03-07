import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVMuToH9vlrJ0ezzgHgk21-pSSck4md1s",
  authDomain: "writenode-2e7d2.firebaseapp.com",
  projectId: "writenode-2e7d2",
  storageBucket: "writenode-2e7d2.appspot.com",
  messagingSenderId: "864340360409",
  appId: "1:864340360409:web:b68add12bf64b9bdb852c8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
