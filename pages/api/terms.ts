import { gql } from '~/db'
import { allTerms } from '~/db/queries/Term'
import { endpoint, secret } from './_utils'

export default endpoint(() => gql({ query: allTerms(), secret }))
