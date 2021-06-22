import type { AppProps } from 'next/app'
// import Head from 'next/head'
import 'destyle.css'
import 'windi.css'
import '~/styles/index.css'

function DualPowerAppApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>

      </Head> */}
      <Component {...pageProps} />
    </>
  )
}

export default DualPowerAppApp
