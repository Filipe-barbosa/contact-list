
import HorizontalCard from '../HorizontalCard'
import Card from '../Card'
import { useBotApiContext } from '../../context/BotApiContext'

function CardSection () {
  const { nonFavoriteBots, setIsFavorite, menuHidden } = useBotApiContext()
  return (
    <div>
      {menuHidden
        ? (
          <div className="flex gap-4 items-center border-t ">
            {nonFavoriteBots.map((bot, i) => (
              <Card
                key={bot.name}
                bot={bot}
                setFavorite={() => setIsFavorite(bot.name)}
              />
            ))}
          </div>)
        : (
          <div className="grid border-t gap-2">
            {nonFavoriteBots.map((bot, i) => (
              <HorizontalCard
                key={bot.name}
                bot={bot}
                setFavorite={() => setIsFavorite(bot.name)}
              />
            ))}
          </div>)

      }
    </div>

  )
}

export default CardSection
