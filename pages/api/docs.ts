import type { Doc } from '~/types'

import { createNotionGetter, endpoint } from './_utils'

export const getDocs = createNotionGetter<Doc>(
  process.env.NEXT_PUBLIC_NOTION_PAGE_URL_DOCS!,
  { type: 'database' }
)

export default endpoint(getDocs)
