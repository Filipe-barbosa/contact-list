import Card from '../Card'
import { useBotApiContext } from '../../context/BotApiContext'

function CardSection () {
  const { nonFavoriteBots, setIsFavorite } = useBotApiContext()
  return (
    <div className="flex gap-4 items-center border-t ">
      {nonFavoriteBots.map((bot, i) => (
        <Card
          key={bot.name}
          bot={bot}
          setFavorite={() => setIsFavorite(bot.name)}
        />
      ))}
    </div>
  )
}

export default CardSection
