import fetch from 'isomorphic-unfetch'

interface Props {
  query: string
  variables?: object
  secret?: string
}

const endpoint = 'https://graphql.fauna.com/graphql'

export default async ({
  query,
  variables,
  secret = process.env.NEXT_PUBLIC_FAUNADB_SECRET,
}: Props): Promise<object> => {
  const res = await fetch(endpoint, {
    body: JSON.stringify({ query, variables }),
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  return await res.json()
}
