import fetch from 'isomorphic-unfetch'

const { FAUNADB_SECRET: secret } = process.env;

interface Props {
  query: String
  variables?: Object
}

const endpoint = 'https://graphql.fauna.com/graphql'

export default async ({ query, variables }: Props): Promise<object> => {
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
