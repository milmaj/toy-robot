import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import variables from '../styles/variables.module.scss'

console.log(variables.primaryColor);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
