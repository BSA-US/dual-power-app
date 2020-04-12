import type { NextPage } from 'next'
import Link from 'next/link'
import breakpointsExample from '~/styles/example/breakpoints.styl'

const Index: NextPage = () => {
  return <div id='index'>
    <Link href='/other'><a>Other page</a></Link>
  </div>
}

export default Index
