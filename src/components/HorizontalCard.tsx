import React from 'react'
import StartOutlined from '../icons/StartIconOutlined'
import StarIcon from '../icons/StartIcon'
import { Bot } from '../context/entities'
import { Link } from 'react-router-dom'

interface Props {
  bot: Bot
  setFavorite: () => void
}

function HorizontalCard ({ bot, setFavorite }: Props) {
  const randomColors = ['bg-gray-900', 'bg-red-500', 'bg-amber-900', 'bg-amber-900', 'bg-lime-600', 'bg-lime-400', 'bg-cyan-300', 'bg-blue-300', 'bg-violet-200']
  return (
    <div>
      <button className='p-2' onClick={setFavorite}>
        {(bot.isFavorite)
          ? (<StarIcon />)
          : (<StartOutlined />)}
      </button>
      <div className="w-52 rounded-lg shadow-md bg-white  border-gray-200">
        <Link to={`/details/${bot.name}`}>
          <div className="flex flex-col items-center pb-10 pt-4">
            <div className= {` mb-3 w-24 h-24 rounded-full shadow-lg ${randomColors[Math.floor(Math.random() * 9)]}`} />
            <div className="grid gap-1 text-center">
              <div className="text-md max-w-md font-medium text-gray-900">{bot.name}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>

  )
}

export default HorizontalCard
