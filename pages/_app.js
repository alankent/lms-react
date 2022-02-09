import React, { useEffect } from 'react'
import Head from 'next/Head'
import MUICookieConsent from '../components/MUICookieConsent'
import { signInWithGoogle, firebaseAuth, AuthContext, userDetails } from '../helpers/auth'


function MyApp({ Component, pageProps }) {

  const [user, setUser] = React.useState(userDetails(firebaseAuth.currentUser))

  /*
  // Rerender if the user id changes by the end of rendering (due to popups etc)
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(u => {
      if (u?.id !== user?.id) {
        console.log("ON AUTH STATE -- CHANGED")
        console.log(u)
        setUser(userDetails(u))
      } else {
        console.log("ON AUTH STATE -- UNCHANGED")
      }
    });
  })
  */

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Component {...pageProps} />
      <MUICookieConsent
        cookieName="ConsentCookie"
        message="This site uses cookies to work out which lessons are popular and to save your progress."
      />
    </AuthContext.Provider>
  )
}

export default MyApp
