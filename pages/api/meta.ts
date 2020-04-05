import { endpoint } from './_utils'
import type { ZeitRequest, ZeitResponse } from './_types'

const data = {
  endpoints: [
    {
      name: 'All Terms',
      method: 'GET',
      path: '/terms'
    }
  ]
}

export default (req: ZeitRequest, res: ZeitResponse): Promise<void> =>
  endpoint({
    req,
    res,
    fn: (): object => ({ data })
  })
