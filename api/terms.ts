import { NowRequest, NowResponse } from '@now/node'
import gql from '~/db/gql'
import { allTerms } from '~/db/queries/Term'

export default async (_req: NowRequest, res: NowResponse) => {
  try {
    res.json(await gql({ query: allTerms() }))
  } catch (error) {
    res.status(500).json({ error })
  }
}
