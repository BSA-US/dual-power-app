import fetch from 'isomorphic-unfetch'

const { FAUNADB_PUBLIC_SECRET: secret } = process.env;

interface Props {
  query: string
  variables?: object
  secret?: string
}

const endpoint = 'https://graphql.fauna.com/graphql'

export default async ({ query, variables, secret }: Props): Promise<object> => {
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
