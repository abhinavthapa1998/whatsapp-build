import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkHJRwStarCMIG395-L52K3mSaYcFmXTg",
  authDomain: "whatsapp-build-627c3.firebaseapp.com",
  projectId: "whatsapp-build-627c3",
  storageBucket: "whatsapp-build-627c3.appspot.com",
  messagingSenderId: "1095134652191",
  appId: "1:1095134652191:web:b94c1d58a2edab41d2322a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
