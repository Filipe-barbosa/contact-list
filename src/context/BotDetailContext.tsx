import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { getBotDetail } from './api'
import { useBotApiContext } from './BotApiContext'
import { Bot, BotDetails } from './entities'

interface IAPIContext {
  bot?: Bot
  botDetails: BotDetails
  isLoading: boolean
}

const BotDetailApiContext = createContext<IAPIContext>({
  botDetails: [],
  isLoading: false
})

export interface ChildrenProps {
  readonly children: ReactNode
  readonly shortName: string
}

export function BotDetailsContext ({ children, shortName }: ChildrenProps) {
  const { botList } = useBotApiContext()
  const bot = botList.find(b => b.name === shortName)
  const [botDetails, setBotDetails] = useState<BotDetails>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBot = async () => {
      try {
        const data: BotDetails = await getBotDetail(shortName)
        setBotDetails(data)
        setIsLoading(false)
      } catch (error) {
        console.warn(`Error while fetching ${error as string}`)
      }
    }
    getBot()
  }, [])

  const value: IAPIContext = {
    bot,
    botDetails,
    isLoading
  }
  return (
    <BotDetailApiContext.Provider
      value={value}
    >
      {children}
    </BotDetailApiContext.Provider>
  )
}

export const useBotDetails = () => {
  return useContext(BotDetailApiContext)
}
