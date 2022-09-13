import Card from '../Card'
import { useBotApiContext } from '../../context/BotApiContext'

function CardSection () {
  const { botList } = useBotApiContext()
  return (
    <div className="flex justify-center gap-4 items-center border-t ">
      {botList.map(({ name, type }
      ) =>
        (
          <Card key={Math.random()} cardName={name} cardCargo={type}/>)
      )}
    </div>
  )
}

export default CardSection
