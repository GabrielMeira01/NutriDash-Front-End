import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQvmg7owFDAUhjGAFygFHkmLT0BuB1JRA",
  authDomain: "nutridash-5afd7.firebaseapp.com",
  projectId: "nutridash-5afd7",
  storageBucket: "nutridash-5afd7.appspot.com",
  messagingSenderId: "977786341728",
  appId: "1:977786341728:web:1a0c72deba4ef409a87605"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };