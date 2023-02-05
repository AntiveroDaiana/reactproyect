// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBgvUSHhuZLgqLj1BPHexFySdgdufWZWpE",
  authDomain: "dev-work-22.firebaseapp.com",
  projectId: "dev-work-22",
  storageBucket: "dev-work-22.appspot.com",
  messagingSenderId: "69686847592",
  appId: "1:69686847592:web:9c1d930f475f596aefb3dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// obtain firestore from firebase
export const db = getFirestore(app);
