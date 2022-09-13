import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'

interface Bot {
  name: string
  type: string
  created: string
}
interface IAPIContext {
  botList: Bot[]
  isLoading: boolean
}

const BotApiContext = createContext<IAPIContext>({
  botList: [],
  isLoading: false
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
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error) {
        console.warn(`Error while fetching ${error as string}`)
      }
    }

    getBot()
  }, [])

  return (
    <BotApiContext.Provider
      value={
        {
          botList: data,
          isLoading
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
