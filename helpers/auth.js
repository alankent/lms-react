import React from 'react'
import app from './firebaseConfig'
import { getAuth, setPersistence, browserSessionPersistence, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'


export const firebaseAuth = getAuth(app)
console.log("AUTH IS STARTING!")
console.log(firebaseAuth)


export function userDetails(user) {
  if (user === null || user === undefined) return null;
  return {
    id: user.uid,
    email: user.email,
    photoURL: user.photoURL,
    name: user.displayName,
  }
}

export function currentUser() {
  console.log("AUTH CURRENT-USER = ")
  var user = userDetails(firebaseAuth.currentUser)
  console.log(user)
  return user
}


export const UserContext = React.createContext(null)
export const UpdateUserContext = React.createContext(null)

export default firebaseAuth
