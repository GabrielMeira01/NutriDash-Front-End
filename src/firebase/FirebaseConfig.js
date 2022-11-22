import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDW3kj6W0QLeiGRs9UKuk-7TqNTOzWDIQE",
  authDomain: "nutridashapp.firebaseapp.com",
  projectId: "nutridashapp",
  storageBucket: "nutridashapp.appspot.com",
  messagingSenderId: "727041058165",
  appId: "1:727041058165:web:67077adaa4567f27c49f3c",
  measurementId: "G-Q2SDYQQGYL"
};

const app= initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);