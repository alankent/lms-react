import firebaseConfig from '../helpers/firebaseConfig'
import { createContext, useContext } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getAnalytics } from "firebase/analytics";



// Initialize Firebase connection settings
//
const app = initializeApp(firebaseConfig, "Extra Ordinary LMS")
const auth = getAuth(app)
const db = getDatabase(app)
//const analytics = getAnalytics(app);
  

// Create and initialize a React context with the firebase connection details
//
const firebaseContext = createContext({ app, auth, db })


// The React component to wrap pages with in pages/_app.js
//
export function FirebaseProvider({ children }) {
  const firebase = { app, auth, db }
  return <firebaseContext.Provider value={firebase}>{children}</firebaseContext.Provider>
}


// Custom hook to use the firebaseContext and access the firebase connection details
//
export const useFirebase = () => useContext(firebaseContext)
