import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYJtXjhgATx2OhU1hM5msYTNFlFaZuQrY",
  authDomain: "reactjs-1oscaraldana.firebaseapp.com",
  projectId: "reactjs-1oscaraldana",
  storageBucket: "reactjs-1oscaraldana.appspot.com",
  messagingSenderId: "655035951210",
  appId: "1:655035951210:web:e7c11a0e0df74fcfd88213"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)