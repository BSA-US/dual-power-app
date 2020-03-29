import { NowRequest, NowResponse } from '@now/node'
import gql from './_gql'

export default async (_req: NowRequest, res: NowResponse) => {
  try {
    const terms = await gql({
      query: `query {
        allTerms {
          data {
            name
            description
          }
        }
      }`
    })

    res.json({ terms })
  } catch (error) {
    res.status(500).json({ error })
  }
}
