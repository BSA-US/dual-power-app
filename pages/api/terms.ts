import { gql } from '~/db'
import { allTerms } from '~/db/queries/Term'
import { endpoint } from './_utils'
import type { ZeitRequest, ZeitResponse } from './_types'

export default (req: ZeitRequest, res: ZeitResponse): void =>
  endpoint({
    req,
    res,
    fn: async (): Promise<object> => await gql({ query: allTerms() })
  })
