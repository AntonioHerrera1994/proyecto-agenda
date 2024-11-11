// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6MtPlb0OjBaghKEgpYzANgmNHBTwEKJg",
  authDomain: "wait-list-d2b96.firebaseapp.com",
  projectId: "wait-list-d2b96",
  storageBucket: "wait-list-d2b96.firebasestorage.app",
  messagingSenderId: "633478115629",
  appId: "1:633478115629:web:6eea6c0695795e8d9123a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };