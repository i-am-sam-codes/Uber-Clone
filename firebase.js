// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWbY3Iqeus_99Bi09JN17AXOFi_Io55Rs",
  authDomain: "uberx-clone.firebaseapp.com",
  projectId: "uberx-clone",
  storageBucket: "uberx-clone.appspot.com",
  messagingSenderId: "949860712698",
  appId: "1:949860712698:web:1f4878e8590b39b6d94943",
  measurementId: "G-JN8TV6MCGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, analytics, provider, auth }