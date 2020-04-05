import { gql } from '~/db'
import { allTerms } from '~/db/queries/Term'
import { endpoint, secret } from './_utils'
import type { ZeitRequest, ZeitResponse } from './_types'

export default (req: ZeitRequest, res: ZeitResponse): Promise<void> =>
  endpoint({
    req,
    res,
    fn: (): object => gql({ query: allTerms(), secret })
  })
