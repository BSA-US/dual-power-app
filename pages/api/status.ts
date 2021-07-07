import type { Status } from '~/types'

import { createNotionGetter, endpoint } from './_utils'

export default endpoint(
  createNotionGetter<Status>(process.env.NOTION_PAGE_URL_STATUS!, {
    type: 'json',
  })
)
