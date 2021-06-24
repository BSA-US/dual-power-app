import type { Status } from '~/types'

import { createNotionGetter, endpoint } from './_utils'

export const getStatus = createNotionGetter<Status>(
  process.env.NEXT_PUBLIC_NOTION_PAGE_URL_STATUS!,
  { type: 'json' }
)

export default endpoint(getStatus!)
