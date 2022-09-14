import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { getBots } from './api'
import { Bot } from './entities'

interface IAPIContext {
  botList: Bot[]
  nonFavoriteBots: Bot[]
  favoriteBots: Bot[]
  isLoading: boolean
  menuHidden: boolean
  setIsFavorite: (name: string) => void
  search: (text: string) => void
  selectMenuHidden: (menu: boolean) => void
  orderBotsBy: (order: OrderBy) => void
}

const LS_FAVORITE_KEY = 'favorite-bots'

const saveFavorites = (bots: Bot[]) => {
  const data = JSON.stringify(bots)
  localStorage.setItem(LS_FAVORITE_KEY, data)
}

const getStoredFavorites = (): Bot[] => {
  const savedData = localStorage.getItem(LS_FAVORITE_KEY)

  if (savedData == null) return []
  try {
    return JSON.parse(savedData) as Bot[]
  } catch (e) {
    return []
  }
}

const BotApiContext = createContext<IAPIContext>({
  botList: [],
  nonFavoriteBots: [],
  favoriteBots: getStoredFavorites(),
  isLoading: false,
  menuHidden: false,
  setIsFavorite: () => {},
  search: () => {},
  selectMenuHidden: () => {},
  orderBotsBy: () => {}
})

export interface ChildrenProps {
  readonly children: ReactNode
}

type OrderBy = 'name' | 'create'

function BotApiContextProvider ({ children }: ChildrenProps) {
  const [bots, setBots] = useState<Bot[]>([])
  const [orderBy, setOrderBy] = useState<OrderBy | undefined>(undefined)
  const [searchText, setSearchText] = useState<string>('')
  const [favoriteBots, setFavoriteBots] = useState<Bot[]>(getStoredFavorites)
  const [isLoading, setIsLoading] = useState(true)
  const [menuHidden, setMenuHidden] = useState(true)
  // Salva lista de favoritos e atualiza estado
  const updateFavBots = (newBots: Bot[], text: string) => {
    const favBots = newBots.filter(b => b.isFavorite && b.name.includes(text))
    saveFavorites(favBots)
    setFavoriteBots(favBots)
  }

  useEffect(() => {
    if (bots.length === 0) return updateFavBots(getStoredFavorites(), searchText)
    updateFavBots(bots, searchText)
  }, [bots, searchText])

  useEffect(() => {
    const getBot = async () => {
      try {
        const data: Bot[] = await getBots(orderBy)
        const bots = data.map(parseBot)
        setBots(bots)
        setIsLoading(false)
      } catch (error) {
        console.warn(`Error while fetching ${error as string}`)
      }
    }
    getBot()
  }, [orderBy])

  const setIsFavorite = (name: string) => {
    const newBotsList = bots.map((bot) => (
      (bot.name === name)
        ? { ...bot, isFavorite: !bot.isFavorite }
        : bot
    ))
    setBots(newBotsList)
  }

  return (
    <BotApiContext.Provider
      value={
        {
          botList: bots,
          nonFavoriteBots: bots.filter(b => !b.isFavorite && b.name.includes(searchText)),
          favoriteBots,
          isLoading,
          menuHidden,
          setIsFavorite,
          orderBotsBy: (order: OrderBy) => setOrderBy(order),
          search: (text: string) => setSearchText(text),
          selectMenuHidden: (menuHidden: boolean) => setMenuHidden(!menuHidden)
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

const isFavoriteBot = (bot: Bot) =>
  getStoredFavorites()
    .find(b => b.name === bot.name) != null

const parseBot = (bot: Bot) => ({
  ...bot,
  isFavorite: isFavoriteBot(bot)
})
