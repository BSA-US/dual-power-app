import type { Doc } from '~/types'

import { createNotionGetter, endpoint } from './_utils'

export default endpoint(
  createNotionGetter<Doc>(process.env.NOTION_PAGE_URL_DOCS!, {
    type: 'database',
  })
)
