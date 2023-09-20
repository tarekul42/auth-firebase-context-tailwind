// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZspOcVhyI-oh_4TBN39bQasxaKYpe6ls",
  authDomain: "auth-firebase-context-ta-97f4c.firebaseapp.com",
  projectId: "auth-firebase-context-ta-97f4c",
  storageBucket: "auth-firebase-context-ta-97f4c.appspot.com",
  messagingSenderId: "237828686983",
  appId: "1:237828686983:web:d02aaa9b4bb9fa909b2422",
  measurementId: "G-WGXQPFMTW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;