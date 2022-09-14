import { Bot } from '../../context/entities'
import DescriptionNameIcon from '../../icons/DescripionNameIcon'
import moment from 'moment'

interface Props {
  bot: Bot
}

function HeaderDetails ({ bot }: Props) {
  moment.localeData('pt-br')
  const formateData = moment(bot.created).format('l')
  return (
    <div className="flex items-center justify-between border-b-4 pb-6 border-dividerColor">
      <div className='flex items-center justify-center gap-2'>
        <DescriptionNameIcon/>
        <div className='flex-col'>
          <p className=' font-bold text-md'>{bot.name}</p>
          <p className="text-xs text-gray-400">{`id: ${bot.name}`}</p>
        </div>
      </div>
      <div className="text-sm text-gray-400">{`Created at ${formateData}`}</div>
    </div>
  )
}

export default HeaderDetails
