import { endpoint } from './_utils'

const data = {
  endpoints: [
    {
      method: 'GET',
      name: 'All terms (experimental)',
      path: '/terms',
    },
  ],
}

export default endpoint(async () => ({ data }))
