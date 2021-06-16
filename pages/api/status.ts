import { NotionAPI } from 'notion-client'
import { parsePageId } from 'notion-utils'

import { endpoint } from './_utils'

export const getStatus = async (): Promise<string> => {
  const n = new NotionAPI()

  const { block } = await n.getPage(
    parsePageId(
      'https://www.notion.so/moooon/status-c129ccaaa6654bc9889007ee8d65f3cd' // PROD
      // 'https://www.notion.so/moooon/status-e93123125adc4ec0848a105a615a664e' // DEV
    )
  )

  return Object.values(block).find((x) => x.value.type === 'code')?.value
    .properties.title[0][0]
}

export default endpoint(getStatus)
