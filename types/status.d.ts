export interface Action {
  text: string
  href: string
  target: string
  color: string
}

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
}

export interface Status {
  text: string
  actions?: Partial<Action>[]
  live: boolean
  streamConfig?: StreamConfig
}
