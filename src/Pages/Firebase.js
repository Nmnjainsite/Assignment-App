// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjWgFvSI2CFIH2zQN02hYgx2jjsYE4mA",
  authDomain: "assignment---app.firebaseapp.com",
  projectId: "assignment---app",
  storageBucket: "assignment---app.appspot.com",
  messagingSenderId: "488464359537",
  appId: "1:488464359537:web:db572ad78f3027c683fbd0",
  measurementId: "G-86GKR74R6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
