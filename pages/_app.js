import React from 'react'
import MUICookieConsent from '../components/MUICookieConsent'
import { FirebaseProvider } from '../components/FirebaseProvider';
import { AuthUserProvider } from '../components/AuthUserProvider';
import { DatabaseProvider } from '../components/DatabaseProvider';


function MyApp({ Component, pageProps }) {

  return (
    <FirebaseProvider>
      <AuthUserProvider>
        <DatabaseProvider>
          <Component {...pageProps} />
          <MUICookieConsent
            cookieName="ConsentCookie"
            message="This site uses cookies to work out which lessons are popular and to save your progress."
          />
        </DatabaseProvider>
      </AuthUserProvider>
    </FirebaseProvider>
  )
}

export default MyApp
