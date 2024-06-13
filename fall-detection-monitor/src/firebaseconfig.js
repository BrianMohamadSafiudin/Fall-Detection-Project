import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCaxZ13YAhnjNVt9JdMdM19T7E0U_e_nS4",
  authDomain: "falldetectionk4.firebaseapp.com",
  databaseURL: "https://falldetectionk4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "falldetectionk4",
  storageBucket: "falldetectionk4.appspot.com",
  messagingSenderId: "831510193284",
  appId: "1:831510193284:web:a4e715eda659990e60ced1",
  measurementId: "G-J7BX7LBB0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Realtime Database
const database = getDatabase(app);
console.log("Firebase app initialized");

export { db, database };
