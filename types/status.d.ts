import type { Action } from './common'

export interface ChatConfig {
  guildId: string
  channelId: string
  css: string
}

export interface VideoConfig {
  baseUrl: string
  id: string
}

export interface StreamConfig {
  chatConfig: ChatConfig
  videoConfig: VideoConfig
  discordInviteUrl: string
  actions?: Action[]
}

export interface Status {
  text: string
  actions?: Partial<Action>[]
  live: boolean
  streamConfig?: StreamConfig
}
