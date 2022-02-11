import React from 'react'
import firebaseInit from './firebaseConfig'


const { auth } = firebaseInit()

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
  console.log("BEFORE CURRENT USER, AUTH is", auth)
  console.log(auth.currentUser)
  //console.log(auth.currentUser?.uid)
  //console.log(auth.currentUser?.email)
  //console.log(auth.currentUser?.photoURL)
  const user = userDetails(auth.currentUser)
  console.log("AUTH CURRENT-USER = ", user)
  return user
}


export const UserContext = React.createContext(null)
export const UpdateUserContext = React.createContext(null)

