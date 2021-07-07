import type { Event } from '~/types'

import { createNotionGetter, endpoint } from './_utils'

export default endpoint(
  createNotionGetter<Event>(process.env.NOTION_PAGE_URL_EVENTS!, {
    type: 'database',
  })
)
