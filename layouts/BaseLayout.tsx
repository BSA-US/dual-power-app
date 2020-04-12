import type { NextComponentType } from 'next'
import Head from 'next/head'
import { Footer } from '~/components'
import '~/styles/_global.styl'
import '~/styles/layouts/base.styl'

const BaseLayout: NextComponentType = ({ children }) => <>
  <Head>
    <link
      rel='stylesheet'
      type='text/css'
      href='https://unpkg.com/destyle.css@1.0.11/destyle.css'
    />
  </Head>
  { children }
  <Footer />
</>

export default BaseLayout
