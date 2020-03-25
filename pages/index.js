import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import ruptureExample from '~/styles/example/rupture.styl'

const NOT_DEPLOYED = 'NOT_DEPLOYED'
class NotDeployedError extends Error {
  constructor() {
    super()
    this.code = 'NOT_DEPLOYED'
    this.message = 'Project must be deployed to ZEIT Now'
  }
}

function Index({ collections = [], isDeployed } = {}) {
  const hasCollections = collections.length > 0;

  if (typeof isDeployed === 'undefined') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p className={ruptureExample.breakpoints}>Hello Next.js</p>
      {isDeployed ? (
        <>
          <h2>Collections</h2>
          {hasCollections ? (
            <ul>
              {collections.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          ) : (
            <h5>No Collections</h5>
          )}
        </>
      ) : (
        <>
          <p>This project must be deployed to ZEIT Now</p>
        </>
      )}
      <Link href="/other">
        <a>Other page</a>
      </Link>
    </div>
  )
}

Index.getInitialProps = async ({ req }) => {
  try {
    const { 'x-now-deployment-url': nowUrl } = req.headers

    if (!nowUrl) throw new NotDeployedError()

    const res = await fetch(`https://${nowUrl}/api/collections`)
    const { collections, error } = await res.json()

    if (!res.ok) {
      throw new Error(error.message)
    }

    return { collections, isDeployed: true }
  } catch (error) {
    return {
      error: {
        message: error.message
      },
      isDeployed: error.code !== NOT_DEPLOYED
    };
  }
}

export default Index
