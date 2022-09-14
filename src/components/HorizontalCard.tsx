import React from 'react'
import StartOutlined from '../icons/StartIconOutlined'
import StarIcon from '../icons/StartIcon'
import { Bot } from '../context/entities'
import { Link } from 'react-router-dom'
import moment from 'moment'

interface Props {
  bot: Bot
  setFavorite: () => void
}

function HorizontalCard ({ bot, setFavorite }: Props) {
  const randomColors = ['bg-gray-900', 'bg-red-500', 'bg-amber-900', 'bg-amber-900', 'bg-lime-600', 'bg-lime-400', 'bg-cyan-300', 'bg-blue-300', 'bg-violet-200']
  moment.localeData('pt-br')
  const formateData = moment(bot.created).format('l')
  return (
    <div className='flex  m-1 items-center '>
      <button className='p-2' onClick={setFavorite}>
        {(bot.isFavorite)
          ? (<StarIcon />)
          : (<StartOutlined />)}
      </button>
      <div className="rounded-sm shadow-md bg-white border-gray-200 w-full p-2">
        <Link to={`/details/${bot.name}`} className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className= {`w-8 h-8 rounded-full shadow-lg ${randomColors[Math.floor(Math.random() * 9)]}`} />
            <div className="text-sm font-semibold p-1 text-gray-900">{bot.name}</div>
          </div>
          <div className="text-sm text-gray-400">{`Created at ${formateData}`}</div>
        </Link>
      </div>
    </div>

  )
}

export default HorizontalCard
