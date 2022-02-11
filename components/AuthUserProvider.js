import { useState, useEffect, createContext, useContext } from 'react'
import firebaseInit from '../helpers/firebaseConfig'
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

const authUserContext = createContext({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {}
});

const formatUser = (authState) => ({
  uid: authState.uid,
  email: authState.email,
  displayName: authState.displayName,
  photoURL: authState.photoURL,
});

function useFirebaseAuth() {
  const { auth } = firebaseInit();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const clear = () => {
    setUser(null)
    setLoading(true)
  }

  const signIn = () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: "select_account" })
    return signInWithRedirect(auth, provider);
  }

  const signOut = () =>
    auth.signOut().then(clear);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser = formatUser(authState);
    setUser(formattedUser);    
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signIn,
    signOut
  }
}

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  console.log("AUTH USER: " + auth.user);
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
