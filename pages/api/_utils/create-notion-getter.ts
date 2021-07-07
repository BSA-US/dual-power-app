import { Client as NotionClient } from '@notionhq/client'
import { camelCase } from '@replygirl/change-case-object'
import { NotionAPI } from 'notion-client'
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

const notionPropertySanitizers: Record<string, (x: any) => any> = {
  date: x => x.date,
  rich_text: x => x.rich_text.map(x => x.plain_text).join(''),
  title: x => x.title.map(x => x.plain_text).join(''),
  url: x => x.url,
}

const sanitizeNotionPage = (x: any) =>
  Object.entries(x).reduce(
    (acc, [k, v]: [string, any]) => ({
      ...acc,
      [k]:
        v && typeof v === 'object' && !Array.isArray(v) && v.id && v.type
          ? notionPropertySanitizers[v.type]?.(v) ?? v
          : v,
    }),
    {}
  )

const n = new NotionClient({
  auth: process.env.NOTION_SECRET,
})
const nx = new NotionAPI()

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
    database: async (): Promise<T[]> => {
      const database_id = parsePageId(url)
      const [{ results }, { block }] = await Promise.all([
        n.databases.query({ database_id }),
        nx.getPage(database_id),
      ])

      return camelCase(
        results.map(({ id, properties }: any) => {
          const codeBlockId = block[id].value.content?.find(
            (id: string) => block[id]?.value.type === 'code'
          )

          return sanitizeNotionPage({
            ...properties,
            ...(codeBlockId
              ? JSON.parse(block[codeBlockId].value?.properties.title[0][0])
              : {}),
          })
        })
      )
    },
    json: async (): Promise<T> => {
      const page_id = parsePageId(url)
      const [{ properties }, { block }] = await Promise.all([
        n.pages.retrieve({ page_id }),
        nx.getPage(page_id),
      ])

      return camelCase(
        sanitizeNotionPage({
          ...properties,
          ...JSON.parse(
            Object.values(block)
              .map(x => x.value)
              .find(x => x.type === 'code')?.properties.title[0][0] ?? {}
          ),
        })
      )
    },
  }[type]
}

export default createNotionGetter
