import { NowRequest, NowResponse } from '@now/node'
import gql from './_gql'

export default async (_req: NowRequest, res: NowResponse) => {
  try {
    const response = await gql({
      query: `{
        allTerms {
          data {
            name
            description
          }
        }
      }`
    })

    res.json(response)
  } catch (error) {
    res.status(500).json({ error })
  }
}
