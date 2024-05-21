import { UserProvider } from '@auth0/nextjs-auth0/client'
import '../styles/globals.css'
import { Noto_Sans, Roboto_Serif } from '@next/font/google'

const noto = Noto_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

const robotoSerif = Roboto_Serif({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-serif',
})

function MyApp({ Component, pageProps }) {
  const pageLayout = Component.getLayout || ((page) => page);

  return <UserProvider>
    <main className={`${noto.variable} ${robotoSerif.variable} font-body`}>
      {pageLayout(<Component {...pageProps} />, pageProps)}
    </main>
  </UserProvider>
}

export default MyApp
