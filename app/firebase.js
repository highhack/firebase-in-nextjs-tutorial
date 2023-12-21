// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZGyCn66B34zH8yXgwPj8V37vZwOhY-xk",
  authDomain: "fir-with-nextjs-tutorial-80a9b.firebaseapp.com",
  projectId: "fir-with-nextjs-tutorial",
  storageBucket: "fir-with-nextjs-tutorial.appspot.com",
  messagingSenderId: "745542646908",
  appId: "1:745542646908:web:52ea3ddde16ae7be21ddf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
