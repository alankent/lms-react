import React from 'react'
import MUICookieConsent from '../components/MUICookieConsent'
import { FirebaseProvider } from '../components/FirebaseProvider'
import { AuthUserProvider } from '../components/AuthUserProvider'
import { DatabaseProvider } from '../components/DatabaseProvider'
import { CompletionProvider } from '../components/CompletionProvider'


function MyApp({ Component, pageProps }) {

  return (
    <FirebaseProvider>
      <AuthUserProvider>
        <DatabaseProvider>
          <CompletionProvider>
            <Component {...pageProps} />
            <MUICookieConsent
              cookieName="ConsentCookie"
              message="This site uses cookies to work out which lessons are popular and to save your progress."
            />
          </CompletionProvider>
        </DatabaseProvider>
      </AuthUserProvider>
    </FirebaseProvider>
  )
}

export default MyApp
