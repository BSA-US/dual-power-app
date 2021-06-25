import type { Doc } from '~/types'

import useSWR from './use-swr'

const useDocs = () => {
  const res = useSWR<Doc[], unknown>('/api/docs')

  const {
    data: docs,
    error: docsError,
    headLink: docsHeadLink,
    url: docsUrl,
  } = res

  return {
    ...res,
    docs,
    docsError,
    docsHeadLink,
    docsUrl,
  }
}

export default useDocs
