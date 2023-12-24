import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpAzKrPBvtvyQmTFaG2bkx6TPEkA-cFtE",
  authDomain: "authentication-407515.firebaseapp.com",
  projectId: "authentication-407515",
  storageBucket: "authentication-407515.appspot.com",
  messagingSenderId: "219515879848",
  appId: "1:219515879848:web:f224b71b8527a19a139d9d",
  measurementId: "G-3EW0YEQ7S7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);