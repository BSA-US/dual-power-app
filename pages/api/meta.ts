import { endpoint } from './_utils'

const data = {
  endpoints: [
    {
      method: 'GET',
      name: 'Docs',
      path: '/docs',
    },
    {
      method: 'GET',
      name: 'Events',
      path: '/events',
    },
    {
      method: 'GET',
      name: 'Status',
      path: '/status',
    },
    {
      method: 'GET',
      name: 'All terms (experimental)',
      path: '/terms',
    },
  ],
}

export default endpoint(async () => ({ data }))
