import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCjq_J3ry2W8pIcwPLZPrxnKQUNMzOi10",
  authDomain: "cadastro-usuarios-app.firebaseapp.com",
  projectId: "cadastro-usuarios-app",
  storageBucket: "cadastro-usuarios-app.firebasestorage.app",
  messagingSenderId: "303677042113",
  appId: "1:303677042113:web:a678ecf656abf93ac65340",
  measurementId: "G-R2E03HL671",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
