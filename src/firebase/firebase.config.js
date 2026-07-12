import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI0epo2cohwCCkV2tX7durRzDqJH6SLSA",
  authDomain: "chiisai-trees.firebaseapp.com",
  projectId: "chiisai-trees",
  storageBucket: "chiisai-trees.firebasestorage.app",
  messagingSenderId: "905355554550",
  appId: "1:905355554550:web:daee015bed2ce5052086d7",
};

const app = initializeApp(firebaseConfig);

export default app;