import { UserProvider } from '@auth0/nextjs-auth0/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const pageLayout = Component.getLayout || ((page) => page);

  return <UserProvider>
    {pageLayout(<Component {...pageProps} />, pageProps)}
  </UserProvider>
}

export default MyApp
