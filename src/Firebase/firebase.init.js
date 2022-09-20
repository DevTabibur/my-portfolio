// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW2_JI-jbV15QZUiR6wBRC7rvjlMvJMag",
  authDomain: "portfolio-7ca52.firebaseapp.com",
  projectId: "portfolio-7ca52",
  storageBucket: "portfolio-7ca52.appspot.com",
  messagingSenderId: "386010270442",
  appId: "1:386010270442:web:3f7430e524838085bce593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;