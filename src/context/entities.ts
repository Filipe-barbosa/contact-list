export interface Bot {
  name: string
  type: string
  created: number
  isFavorite: boolean
}

export interface BotDetails {
  analytics: {
    message: {
      received: number
      sent: number
    }
    user: {
      actived: number
      total: number
    }
  }
  created: string
  culture: string
  description: string
  image: string
  name: string
  shortName: string
  type: string
  update: string
}
