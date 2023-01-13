// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCypUKIg-CVCiVc5aAys1Qj07VPosmB7-w",
  authDomain: "chat-send-6e7bc.firebaseapp.com",
  projectId: "chat-send-6e7bc",
  storageBucket: "chat-send-6e7bc.appspot.com",
  messagingSenderId: "1054178138816",
  appId: "1:1054178138816:web:fb8b18d1cf71bae080ab25",
  measurementId: "G-4SFT78H2Y3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFireStore(app);
