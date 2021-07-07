import { Date } from './common'

export interface Doc {
  date: Date
  name: string
  description?: string
  url: string
  image: {
    src: string
    alt: string
  }
}
