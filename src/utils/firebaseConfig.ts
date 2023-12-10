import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "vcall-8ede6.firebaseapp.com",
  projectId: "vcall-8ede6",
  storageBucket: "vcall-8ede6.appspot.com",
  messagingSenderId: "xxx",
  appId: "1:10804337258:web:82e0b1ecdfbcda15284813",
  measurementId: "xxx"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
