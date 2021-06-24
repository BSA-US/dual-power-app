import type { Event } from '~/types'

import { createNotionGetter, endpoint } from './_utils'

export const getEvents = createNotionGetter<Event>(
  process.env.NEXT_PUBLIC_NOTION_PAGE_URL_EVENTS!,
  { type: 'database' }
)

export default endpoint(getEvents)
