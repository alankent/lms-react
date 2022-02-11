import React from 'react'
import { getCurrentUser } from 'firebase/auth'
import firebaseInit from './firebaseConfig'



export function currentUser() {
  const { auth } = firebaseInit()
  console.log("BEFORE CURRENT USER, AUTH is", auth)
  const user = auth.currentUser
  console.log("AUTH CURRENT-USER = ", user)
  return user
}


export const UserContext = React.createContext(null)
export const UpdateUserContext = React.createContext(null)

