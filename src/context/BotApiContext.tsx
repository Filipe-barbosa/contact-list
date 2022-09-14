import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'

export interface Bot {
  name: string
  type: string
  created: string
  isFavorite: boolean
}
interface IAPIContext {
  botList: Bot[]
  isLoading: boolean
  setIsFavorite: (_index: number) => void
}

const BotApiContext = createContext<IAPIContext>({
  botList: [],
  isLoading: false,
  setIsFavorite: (index: number) => {}
})

export interface ChildrenProps {
  readonly children: ReactNode
}

function BotApiContextProvider ({ children }: ChildrenProps) {
  const [data, setData] = useState<Bot[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBot = async () => {
      try {
        const response = await fetch(
          'https://front-end-test.beta-cs.blip.ai/bots'
        )
        const data: Bot[] = await response.json()
        const bots: Bot[] = data.map(d => ({
          name: d.name,
          type: d.type,
          created: d.created,
          isFavorite: false
        })
        )
        setData(bots)
        setIsLoading(false)
      } catch (error) {
        console.warn(`Error while fetching ${error as string}`)
      }
    }
    getBot()
  }, [])

  const setIsFavorite = (index: number) => {
    const newData = data.map((bot, i) => {
      if (i === index) {
        return { ...bot, isFavorite: !bot.isFavorite }
      }
      return bot
    })
    setData(newData)
  }

  return (
    <BotApiContext.Provider
      value={
        {
          botList: data,
          isLoading,
          setIsFavorite
        }
      }
    >
      {children}
    </BotApiContext.Provider>
  )
}

export const useBotApiContext = () => {
  return useContext(BotApiContext)
}

export default BotApiContextProvider
