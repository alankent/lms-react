import { useState, useEffect, createContext, useContext } from 'react'
import firebaseInit from '../helpers/firebaseConfig'
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'


// Create an initialize a React context
//
const authUserContext = createContext({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {}
})


// Convert Firebase authentication details to a cut down version.
// 
const formatUser = (authState) => ({
  uid: authState.uid,
  email: authState.email,
  displayName: authState.displayName,
  photoURL: authState.photoURL,
})


// Set everything up for using authentication with firebase.
//
function useFirebaseAuth() {
  const { auth } = firebaseInit()

  // Remember the user profile in React component state
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Helper functions

  const clear = () => {
    setUser(null)
    setLoading(true)
  }

  const signIn = () => {
    // TODO: Hard coded to Google only at present.
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: "select_account" })
    return signInWithRedirect(auth, provider)
  }

  const signOut = () =>
    auth.signOut().then(clear)

  // Update the React state based on the user profile after login finishes
  const authStateChanged = async (authState) => {

    if (!authState) {
      setUser(null)
      setLoading(false)
      return
    }

    setLoading(true)
    var formattedUser = formatUser(authState)
    setUser(formattedUser)    
    setLoading(false)
  }

  // Listen for Firebase authentication state changes (log in/out).
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, []) // This causes warnings during static build, but removing as warning suggests causes infinite loop!

  // Return state (user and loading), and functions to trigger sign in/out flows.
  return {
    user,
    loading,
    signIn,
    signOut
  }
}


// The React component to wrap pages with in pages/_app.js
//
export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth()
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
}


// custom hook to use the authUserContext and access the user's information
//
export const useAuth = () => useContext(authUserContext)
