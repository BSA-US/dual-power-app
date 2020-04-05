import { NowRequest, NowResponse } from '@now/node'

export default async (_req: NowRequest, res: NowResponse) => {
  try {
    res.json({
      data: {
        endpoints: [
          {
            name: 'All Terms',
            method: 'GET',
            path: '/terms'
          }
        ]
      }
    })
  } catch (error) {
    res.status(500).json({ error })
  }
}
