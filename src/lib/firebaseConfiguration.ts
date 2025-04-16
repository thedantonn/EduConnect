// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn7q_92b02JMDYwLg3xTL8Q6-2aDTeOFM",
  authDomain: "educonnect-585e9.firebaseapp.com",
  projectId: "educonnect-585e9",
  storageBucket: "educonnect-585e9.firebasestorage.app",
  messagingSenderId: "868924416620",
  appId: "1:868924416620:web:b036ffc65be5f2704c2e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);