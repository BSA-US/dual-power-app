import type { Action, Date } from './common'

export interface Event {
  date: Date
  name: string
  description?: string
  actions?: Action[]
}
