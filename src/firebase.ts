// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0svPa-8tKQdaIz4vajk5KASjxn0aeOL4",
    authDomain: "clowcard-database.firebaseapp.com",
    projectId: "clowcard-database",
    storageBucket: "clowcard-database.appspot.com",
    messagingSenderId: "1086927227381",
    appId: "1:1086927227381:web:89dce9c6056989a108f8bc",
    measurementId: "G-443ME1TR60"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const database = getFirestore(app)