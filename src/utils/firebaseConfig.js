// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMvzIdUF86i6RGKfAepll-r1VBWbP6PR0",
  authDomain: "reactjscoder-d4f8d.firebaseapp.com",
  projectId: "reactjscoder-d4f8d",
  storageBucket: "reactjscoder-d4f8d.appspot.com",
  messagingSenderId: "2528910075",
  appId: "1:2528910075:web:bdba0f44d7ff33f1c7ee5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);