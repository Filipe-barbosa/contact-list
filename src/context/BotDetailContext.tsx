import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { getBotDetail } from './api'
import { BotDetails } from './entities'

interface IAPIContext {
  botDetails?: BotDetails
  isLoading: boolean
}

const BotDetailApiContext = createContext<IAPIContext>({
  isLoading: false
})

export interface ChildrenProps {
  readonly children: ReactNode
  readonly shortName: string
}

export function BotDetailsContext ({ children, shortName }: ChildrenProps) {
  const [botDetails, setBotDetails] = useState<IAPIContext['botDetails']>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBot = async () => {
      try {
        const data: BotDetails = await getBotDetail(parseSlug(shortName))
        setBotDetails(data)
        setIsLoading(false)
      } catch (error) {
        console.warn(`Error while fetching ${error as string}`)
        setIsLoading(false)
      }
    }
    getBot()
  }, [])

  const value: IAPIContext = {
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

const parseSlug = (shortName: string) => {
  return shortName.replace(' ', '_').toLocaleLowerCase()
}
