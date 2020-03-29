import fetch from 'isomorphic-unfetch'

const { FAUNADB_SECRET: secret } = process.env;

interface Props {
  query: String
  variables?: Object
}

export default async ({ query, variables }: Props) =>
  await fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${secret}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  })
