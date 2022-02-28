// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4uwuT4xEei04z4PGjHpTZNA8oVnse9iA",
  authDomain: "pokemon-wiki-537e3.firebaseapp.com",
  projectId: "pokemon-wiki-537e3",
  storageBucket: "pokemon-wiki-537e3.appspot.com",
  messagingSenderId: "1004009823618",
  appId: "1:1004009823618:web:9a6ede39fd09fadca0439b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };