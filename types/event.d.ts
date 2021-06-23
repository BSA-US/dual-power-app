import type { Action } from './common'

export interface Event {
  date: {
    startDate: string
    startTime?: string
    timeZone?: string
  }
  name: string
  description?: string
  actions?: Action[]
}
