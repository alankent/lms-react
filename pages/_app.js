import React from 'react'
import MUICookieConsent from '../components/MUICookieConsent'
import { AuthUserProvider } from '../components/AuthUserProvider';
import { DatabaseProvider } from '../components/DatabaseProvider';


function MyApp({ Component, pageProps }) {

  return (
    <AuthUserProvider>
      <DatabaseProvider>
        <Component {...pageProps} />
        <MUICookieConsent
          cookieName="ConsentCookie"
          message="This site uses cookies to work out which lessons are popular and to save your progress."
        />
      </DatabaseProvider>
    </AuthUserProvider>
  )
}

export default MyApp
