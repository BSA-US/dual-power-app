import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'destyle.css'
import 'windi.css'

import '~/styles/index.css'
import { useStatus } from '~/hooks'

function DualPowerAppApp({ Component, pageProps }: AppProps) {
  const { statusHeadLink } = useStatus()

  return (
    <>
      <Head>{statusHeadLink}</Head>
      <Component {...pageProps} />
    </>
  )
}

export default DualPowerAppApp
