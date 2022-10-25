// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEE-nbTnZ-Sr0df0NbCB5LMR67PGT094A",
  authDomain: "kamals-care.firebaseapp.com",
  projectId: "kamals-care",
  storageBucket: "kamals-care.appspot.com",
  messagingSenderId: "290794123155",
  appId: "1:290794123155:web:e8ff4c394c93c8305f4266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;