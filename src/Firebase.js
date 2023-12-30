// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDg-Nz4t70VtXQWWfT4Kss7zcINHsBaFE4",
  authDomain: "back-end3.firebaseapp.com",
  projectId: "back-end3",
  storageBucket: "back-end3.appspot.com",
  messagingSenderId: "506982967819",
  appId: "1:506982967819:web:1939b83442c0ac2016f50e",
  measurementId: "G-26X6X69L9W",
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };

