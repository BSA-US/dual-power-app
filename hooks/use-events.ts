import type { Event } from '~/types'

import useSWR from './use-swr'

const useEvents = () => {
  const res = useSWR<Event[], unknown>('/api/events')

  const {
    data: events,
    error: eventsError,
    headLink: eventsHeadLink,
    url: eventsUrl,
  } = res

  return {
    ...res,
    events,
    eventsError,
    eventsHeadLink,
    eventsUrl,
  }
}

export default useEvents
