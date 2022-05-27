import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkHJRwStarCMIG395-L52K3mSaYcFmXTg",
  authDomain: "whatsapp-build-627c3.firebaseapp.com",
  projectId: "whatsapp-build-627c3",
  storageBucket: "whatsapp-build-627c3.appspot.com",
  messagingSenderId: "1095134652191",
  appId: "1:1095134652191:web:b94c1d58a2edab41d2322a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
