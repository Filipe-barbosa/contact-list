import React from 'react'
import StartOutlined from '../icons/StartIconOutlined'
import StarIcon from '../icons/StartIcon'
import { Bot } from '../context/entities'
import { Link } from 'react-router-dom'

interface Props {
  bot: Bot
  setFavorite: () => void
}

function Card ({ bot, setFavorite }: Props) {
  return (
    <div className="w-52 rounded-lg shadow-md bg-white  border-gray-200">
      <button className='p-2' onClick={setFavorite}>
        {(bot.isFavorite)
          ? (<StarIcon />)
          : (<StartOutlined />)}
      </button>
      <Link to={`/details/${bot.name}`}>
        <div className="flex flex-col items-center pb-10 pt-4">
          <div className="mb-3 w-24 h-24 rounded-full shadow-lg bg-blue-400" />
          <div className="grid gap-1 text-center">
            <div className="text-md max-w-md font-medium text-gray-900">{bot.name}</div>
            <div>{bot.type}</div>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default Card
