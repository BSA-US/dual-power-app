import { NotionAPI } from 'notion-client'
import { parsePageId } from 'notion-utils'

import { endpoint } from './_utils'

export const getStatus = async (): Promise<string> => {
  const n = new NotionAPI()

  const { block } = await n.getPage(
    parsePageId(process.env.NEXT_PUBLIC_NOTION_PAGE_URL_STATUS)
  )

  return Object.values(block).find(x => x.value.type === 'code')?.value
    .properties.title[0][0]
}

export default endpoint(getStatus)
