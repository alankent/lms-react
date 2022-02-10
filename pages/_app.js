import React from 'react'
import MUICookieConsent from '../components/MUICookieConsent'
import { UserContext, UpdateUserContext, currentUser } from '../helpers/auth'
import Completion, { CompletionContext } from '../components/Completion'


function MyApp({ Component, pageProps }) {

  console.log("IN MY APP", currentUser())
  const [user, setUser] = React.useState(currentUser())
  const [status, setStatus] = React.useState({})
  Completion.registerStateUpdateCallback(setStatus)

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={setUser}>
        <CompletionContext.Provider value={status}>
          <Component {...pageProps} />
          <MUICookieConsent
            cookieName="ConsentCookie"
            message="This site uses cookies to work out which lessons are popular and to save your progress."
          />
        </CompletionContext.Provider>
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
}

export default MyApp
