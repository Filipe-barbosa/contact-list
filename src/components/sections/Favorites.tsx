import Card from '../Card'
import { useBotApiContext } from '../../context/BotApiContext'

function Favorites () {
  const { botList } = useBotApiContext()

  return (
    <>
      <div className="flex items-baseline justify-between" >
        <div className="font-mono text-xl font-extrabold py-4 text-colorSubtitle">
        Favorites
        </div>
      </div>
      <div className="flex gap-4 items-center border-t ">
        {botList.map((bot, i) => {
          if (bot.isFavorite) {
            return (
              <Card key={Math.random()} cardIndex={i}/>
            )
          }
          return null
        })}
      </div>

    </>
  )
}

export default Favorites
