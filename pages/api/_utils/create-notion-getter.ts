import { Client as NotionClient } from '@notionhq/client'
import { camelCase } from '@replygirl/change-case-object'
import { parsePageId } from 'notion-utils'

interface CreateNotionGetterOptionsDatabase {
  type: 'database'
}

interface CreateNotionGetterOptionsJson {
  type: 'json'
}

type CreateNotionGetterOptions =
  | CreateNotionGetterOptionsDatabase
  | CreateNotionGetterOptionsJson

const n = new NotionClient({
  auth: process.env.NOTION_SECRET,
})

const getFirstCodeBlock = async (page_id: string) => {
  const { results } = await n.blocks.children.list({ block_id: page_id })

  // @ts-ignore
  const code = results.find(x => x.type === 'code' && x.code)?.code.text[0]
    .plain_text

  return code ? JSON.parse(code) : null
}

const propertySanitizers: Record<string, (x: any) => any> = {
  date: x => x.date,
  rich_text: x => x.rich_text.map((x: any) => x.plain_text).join(''),
  title: x => x.title.map((x: any) => x.plain_text).join(''),
  url: x => x.url,
}

const hydrateNotionPage = async ({ id, properties }: any /* page */) => ({
  ...Object.entries(properties).reduce(
    (acc, [k, v]: [string, any]) => ({
      ...acc,
      [k]:
        v && typeof v === 'object' && !Array.isArray(v) && v.id && v.type
          ? propertySanitizers[v.type]?.(v) ?? v
          : v,
    }),
    {}
  ),
  ...((await getFirstCodeBlock(id)) ?? {}),
})

function createNotionGetter<T>(
  url: string,
  options: CreateNotionGetterOptionsDatabase
): () => Promise<T[]>
function createNotionGetter<T>(
  url: string,
  options: CreateNotionGetterOptionsJson
): () => Promise<T>
function createNotionGetter<
  T extends Record<string, any> = Record<string, any>
>(url: string, { type }: CreateNotionGetterOptions) {
  return {
    database: async (): Promise<T[]> =>
      camelCase(
        await Promise.all(
          (
            await n.databases.query({
              database_id: parsePageId(url),
            })
          ).results
            .filter(x => x.object === 'page')
            .map(hydrateNotionPage)
        )
      ),
    json: async (): Promise<T> =>
      camelCase(
        await hydrateNotionPage(
          await n.pages.retrieve({ page_id: parsePageId(url) })
        )
      ),
  }[type]
}

export default createNotionGetter
