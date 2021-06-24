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
      const n = new NotionAPI()

      const { block } = await n.getPage(parsePageId(url))

      return Object.values(block)
        .filter(x => x.value?.type === 'page')
        .map(({ value: v }) => {
          const codeBlockId = v.content?.find(
            id => block[id] && block[id].value.type === 'code'
          )

          return camelCase({
            name: v.properties.title[0][0],
            ...v.properties,
            ...(codeBlockId
              ? JSON.parse(block[codeBlockId].value?.properties.title[0][0])
              : {}),
          })
        })
    },
    json: async (): Promise<T> => {
      const n = new NotionAPI()

      const { block } = await n.getPage(parsePageId(url))

      return camelCase(
        JSON.parse(
          Object.values(block).find(x => x.value.type === 'code')?.value
            .properties.title[0][0]
        )
      )
    },
  }[type]
}

export default createNotionGetter
