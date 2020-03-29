import fetch from 'isomorphic-unfetch'

const { FAUNADB_SECRET: secret } = process.env;

console.log(secret)

interface Props {
  query: String
  variables?: Object
}

const endpoint = 'https://graphql.fauna.com/graphql'

/*
const headers = {
  'Authorization': `Bearer ${secret}`,
  'Content-Type': 'application/json'
}
*/

export default async ({ query, variables }: Props) => {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${secret}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  })
  return await res.json()
}
/*
  !!variables
    ? await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables })
      })
    : await fetch(`${ endpoint }?query=${ query }`, { headers })
    */
