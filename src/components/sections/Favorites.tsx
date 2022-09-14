import Card from '../Card'
import { useBotApiContext } from '../../context/BotApiContext'

function Favorites () {
  const { favoriteBots, setIsFavorite } = useBotApiContext()
  return (
    <>
      <div className="flex items-baseline justify-between" >
        <div className="font-mono text-xl font-extrabold py-4 text-colorSubtitle">
        Favorites
        </div>
      </div>
      <div className="flex gap-4 items-center border-t ">
        {favoriteBots.map((bot, i) => (
          <Card
            key={bot.name}
            bot={bot}
            setFavorite={() => setIsFavorite(bot.name)}
          />
        ))}
      </div>

    </>
  )
}

export default Favorites
