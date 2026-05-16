import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDxpbVJIBjLO6N0zmQZDzrKZiijHOaxe40",
  authDomain: "react-netflix-clone-d938a.firebaseapp.com",
  projectId: "react-netflix-clone-d938a",
  storageBucket: "react-netflix-clone-d938a.firebasestorage.app",
  messagingSenderId: "994980694612",
  appId: "1:994980694612:web:64ac95e5b76e8213c6bbc1",
  measurementId: "G-GRDPS275RN"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);