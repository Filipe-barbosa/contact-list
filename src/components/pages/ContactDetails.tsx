import { useParams, Link } from 'react-router-dom'
import { BotDetailsContext, useBotDetails } from '../../context/BotDetailContext'

export default function Details () {
  const { shortName = '' } = useParams()

  return (
    <BotDetailsContext shortName={shortName}>
      <DetailsContent />
    </BotDetailsContext>
  )
}

const DetailsContent = () => {
  const { bot } = useBotDetails()
  if (bot == null) {
    return (
      <p>No bot :/ found </p>
    )
  }

  return (
    <div>
      <h1>Bot name: {bot.name}</h1>
      <h1>favorite: {bot.isFavorite}</h1>
      <h1>type: {bot.type}</h1>
      <h1>date: {bot.created}</h1>
      <Link to="/">{'<- back'}</Link>
    </div>
  )
}
