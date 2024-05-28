// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBM_V0ht6YMGnlybUrbPc_sCl70GkmFY88",
  authDomain: "debat-site.firebaseapp.com",
  projectId: "debat-site",
  storageBucket: "debat-site.appspot.com",
  messagingSenderId: "38213274079",
  appId: "1:38213274079:web:e41b6f3384d0d2fd0f9c6a",
  measurementId: "G-511HSG4HWP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
