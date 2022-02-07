//import '../styles/globals.css'
import Head from 'next/Head'
import MUICookieConsent from '../components/MUICookieConsent'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <Component {...pageProps} />
    <MUICookieConsent
      cookieName="ConsentCookie"
      message="This site uses cookies to work out which lessons are popular and to save your progress."
    />
  </>
}

export default MyApp
