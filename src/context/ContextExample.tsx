import { Bot } from "./BotApiContext"

export const BotContext = React.createContext({
    bot: {} as Bot,
    updateBot: (bot: Bot) => {}
})

export function BotProvider() {}