import Card from '../Card'
import { useBotApiContext } from '../../context/BotApiContext'

function CardSection () {
  const { botList } = useBotApiContext()
  return (
    <div className="flex gap-4 items-center border-t ">
      {botList.map((bot, i) => {
        if (!bot.isFavorite) {
          return (
            <Card key={Math.random()} cardIndex={i}/>
          )
        }
        return null
      })}
    </div>
  )
}

export default CardSection
