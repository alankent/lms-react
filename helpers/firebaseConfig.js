import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getAnalytics } from "firebase/analytics";


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


// Use this approach if you want different databases for production and
// development environments.
// TODO: When I use this and print out the data structure, the printout is
// identical to the above (it loads up settings from my ".env" file), but
// firebase reports a failure to connect! Baffling.
/*
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


// TODO: Convert to session state, but make sure we only initialize
// the connection once and reuse it every call.

var app
var auth
var db

export default function firebaseInit() {

  if (!app) {

    app = initializeApp(firebaseConfig, "Extra Ordinary LMS")
    auth = getAuth(app)
    db = getDatabase(app)
    //analytics = getAnalytics(app);

  }

  return { app, auth, db }
}
