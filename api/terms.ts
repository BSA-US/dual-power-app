import gql from '~/db'
import { allTerms } from '~/db/queries/Term'
import { endpoint } from '~/api/_utils'

import type { ZeitRequest, ZeitResponse } from '~/api/_utils/types'

export default (req: ZeitRequest, res: ZeitResponse): void =>
  endpoint({
    req,
    res,
    fn: async (): Promise<void> => await gql({ query: allTerms() })
  })
