import { NextPage, GetServerSideProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import breakpointsExample from '~/styles/example/breakpoints.styl'

class NotDeployedError extends Error {
  code: String

  constructor() {
    super()
    this.code = 'NOT_DEPLOYED'
    this.message = 'Project must be deployed to ZEIT Now'
  }
}

interface Props {
  collections?: Array<any>
  isDeployed?: Boolean
}

const Index: NextPage<Props> = ({
  collections = [],
  isDeployed
} = {}) => {
  const hasCollections = collections.length > 0;

  if (typeof isDeployed === 'undefined') return <p>Loading...</p>

  return <div id='index'>
    <p className={breakpointsExample.example}>Hello friend</p>
    { isDeployed
      ? hasCollections
        ? <ul>{collections.map(({ name }) => <li key={name}>{name}</li>)}</ul>
        : <p>No collectons</p>
      : <p> This project must be deployed to ZEIT Now</p>
    }
    <Link href='/other'><a>Other page</a></Link>
  </div>
}

export const getServerSideProps: GetServerSideProps = async ({
  req: {
    headers
  }
}) => {
  try {
    const { 'x-now-deployment-url': nowUrl } = headers

    if (!nowUrl) throw new NotDeployedError()

    const res = await fetch(`https://${nowUrl}/api/collections`)
    const { collections, error } = await res.json()

    if (!res.ok) throw new Error(error.message)

    return {
      props: {
        collections,
        isDeployed: true
      }
    }
  } catch (error) {
    return {
      props: {
        isDeployed: false
      }
    }
  }
}

export default Index
