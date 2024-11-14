// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwiZ8f_ENl7cmC08xlWEUSCOKOZdiC5BY",
  authDomain: "dragon-news-8ef29.firebaseapp.com",
  projectId: "dragon-news-8ef29",
  storageBucket: "dragon-news-8ef29.firebasestorage.app",
  messagingSenderId: "796320623238",
  appId: "1:796320623238:web:9c92421f248a39a74bff07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
