import { IdProvider } from '@radix-ui/react-id'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'destyle.css'
import 'windi.css'

import '~/styles/fonts-helvetica.css'
import '~/styles/index.css'
import { useStatus } from '~/hooks'

function DualPowerAppApp({ Component, pageProps }: AppProps) {
  const { statusHeadLink } = useStatus()

  return (
    <IdProvider>
      <Head>{statusHeadLink}</Head>
      <Component {...pageProps} />
    </IdProvider>
  )
}

export default DualPowerAppApp
