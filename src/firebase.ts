// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgNGeGqyaL6FqvU-HSvhPU1asfocPK0L8",
  authDomain: "gym-purity-react.firebaseapp.com",
  projectId: "gym-purity-react",
  storageBucket: "gym-purity-react.firebasestorage.app",
  messagingSenderId: "1059104934220",
  appId: "1:1059104934220:web:00224011f9c61ed33f27e9",
  measurementId: "G-B2MKM2QFS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;