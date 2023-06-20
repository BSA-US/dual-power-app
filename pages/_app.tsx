import { IdProvider } from '@radix-ui/react-id'
import type { AppProps } from 'next/app'
import 'destyle.css'
import 'uno.css'

import '~/styles/index.css'

function DualPowerAppApp({ Component, pageProps }: AppProps) {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  )
}

export default DualPowerAppApp
