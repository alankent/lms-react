//import firebase from 'firebase'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
//import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0evblMlKwwkv0m944wCrGtwRak7jcmSk",
  authDomain: "extra-ordinary-lms.firebaseapp.com",
  databaseURL: "https://extra-ordinary-lms-default-rtdb.firebaseio.com",
  projectId: "extra-ordinary-lms",
  storageBucket: "extra-ordinary-lms.appspot.com",
  messagingSenderId: "239977234064",
  appId: "1:239977234064:web:06949939df778e69692215",
  measurementId: "G-4MD15GXFF1"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

/*
// Required for side-effects
//require('firebase/firestore');

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
*/

//console.log(firebaseConfig)

const app = initializeApp(firebaseConfig)
export default app

//console.log(app)
