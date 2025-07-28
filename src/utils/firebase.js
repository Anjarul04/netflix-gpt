// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmAJY4-E4pwsfhRzZhjFOj_sfQcr8M1HA",
  authDomain: "netflixgpt-e3bf4.firebaseapp.com",
  projectId: "netflixgpt-e3bf4",
  storageBucket: "netflixgpt-e3bf4.firebasestorage.app",
  messagingSenderId: "355406588534",
  appId: "1:355406588534:web:3d15e62085f6f94518cd57",
  measurementId: "G-Y6ME6E4TG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


