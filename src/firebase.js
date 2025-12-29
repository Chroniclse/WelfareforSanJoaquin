// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-_2UR9a6E0JfamIwKFvrkPtlFB020g-s",
  authDomain: "welfareforsanjoaquin-900ab.firebaseapp.com",
  projectId: "welfareforsanjoaquin-900ab",
  storageBucket: "welfareforsanjoaquin-900ab.firebasestorage.app",
  messagingSenderId: "289387849382",
  appId: "1:289387849382:web:04393af8eaeef81439b667",
  measurementId: "G-MJ873SZN3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
