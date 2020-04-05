import { NowRequest, NowResponse } from '@now/node'
import { endpoint } from '~/api/_utils'

const data = {
  endpoints: [
    {
      name: 'All Terms',
      method: 'GET',
      path: '/terms'
    }
  ]
}

export default (req: NowRequest, res: NowResponse): void =>
  endpoint({
    req,
    res,
    fn: (): object => ({ data })
  })
