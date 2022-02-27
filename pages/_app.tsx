import type { AppProps } from 'next/app'
import '../styles/globals.css'
// import variables from '../styles/variables.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
