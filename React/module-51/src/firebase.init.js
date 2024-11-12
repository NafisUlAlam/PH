// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFkeT32pXRumPmbMPCh-I2HsdvOEw45tk",
  authDomain: "auth-moha-milon-6f5b7.firebaseapp.com",
  projectId: "auth-moha-milon-6f5b7",
  storageBucket: "auth-moha-milon-6f5b7.firebasestorage.app",
  messagingSenderId: "547076080293",
  appId: "1:547076080293:web:ed1d77e71141f6ce98c34c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
