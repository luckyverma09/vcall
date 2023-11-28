import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDaZp6oPkzgha0gK5Sr9OOrUjdrJryqC7g",
  authDomain: "v-call-2a7f9.firebaseapp.com",
  projectId: "v-call-2a7f9",
  storageBucket: "v-call-2a7f9.appspot.com",
  messagingSenderId: "474751813156",
  appId: "1:474751813156:web:7ee05270f819e2c9fcbab1",
  measurementId: "G-62JT61GS0K"
};



const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");