import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import TransfersProvider from 'src/contexts/TransfersContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransfersProvider>
      <Component {...pageProps} />
    </TransfersProvider>
  )
}

export default MyApp
