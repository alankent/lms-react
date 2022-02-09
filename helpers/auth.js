import React from 'react'
import app from './firebaseConfig'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'


export const firebaseAuth = getAuth(app)

//export var currentUser = null
//
export function userDetails(user) {
  if (user == null) return null;
  return {
    id: user.uid,
    email: user.email,
    photoURL: user.photoURL,
    name: user.displayName,
  }
}

export function signInWithGoogle(setUser) {

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: "select_account" })

  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      const details = userDetails(result.user)
      console.log("USER DETAILS")
      console.log(details);
      setUser(details)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage)
    })
}

/*
firebaseAuth.onAuthStateChanged(user => {
  console.log("ON AUTH STATE CHANGED")
  console.log(user)
  if (user == null) {
    currentUser = null
  } else {
    currentUser = userDetails(user)
  }
})
*/

export function signOutFromSite(setUser) {
  //currentUser = null
  setUser(null)
  firebaseAuth.signOut()
}

export const AuthContext = React.createContext(null)

export default firebaseAuth
