import { endpoint } from './_utils'
import type { VcRequest, VcResponse } from './_types'

const data = {
  endpoints: [
    {
      name: 'Status',
      method: 'GET',
      path: '/status'
    },
    {
      name: 'All terms (experimental)',
      method: 'GET',
      path: '/terms'
    }
  ]
}

export default endpoint(async () => ({ data }))
