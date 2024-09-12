// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJZ0809XdQQs_-M8MKSLzc5yB61CGc73A",
  authDomain: "first-website-23d28.firebaseapp.com",
  projectId: "first-website-23d28",
  storageBucket: "first-website-23d28.appspot.com",
  messagingSenderId: "11596632927",
  appId: "1:11596632927:web:e0af70b8914368f4abdcea",
  measurementId: "G-LGLYNCQ2ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);
