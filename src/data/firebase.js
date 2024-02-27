import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
  refFromUrl,
} from "firebase/storage";

//import { getFirestore } from "firebase/firestore";,
const firebaseConfig = {
  apiKey: "AIzaSyCj6ik21LZLvpCKvGm5Ym79bYSE0cpoofY",
  authDomain: "event-app-5d176.firebaseapp.com",
  projectId: "event-app-5d176",
  storageBucket: "event-app-5d176.appspot.com",
  messagingSenderId: "435741062632",
  appId: "1:435741062632:web:22dd47b565dc22d697a05d",
  measurementId: "G-B82XTSWEX6",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app);
const storage = getStorage(app, "gs://event-app-5d176.appspot.com");
const db = getFirestore(app);
export {
  firebaseAuth,
  signInWithEmailAndPassword,
  storage,
  sRef,
  uploadBytesResumable,
  getDownloadURL,
  db,
  collection,
  getDocs,
  refFromUrl,
  getAuth,
};
