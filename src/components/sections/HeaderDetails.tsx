
import DescriptionNameIcon from '../../icons/DescripionNameIcon'
import moment from 'moment'
import { useBotDetails } from '../../context/BotDetailContext'

function HeaderDetails () {
  const { botDetails } = useBotDetails()
  moment.localeData('pt-br')

  const formateData = moment(botDetails?.created).format('l')
  return (
    <div className="flex items-center justify-between border-b-4 pb-6 border-dividerColor">
      <div className='flex items-center justify-center gap-2'>
        <DescriptionNameIcon/>
        <div className='flex-col'>
          <p className=' font-bold text-md'>{botDetails?.name}</p>
          <p className="text-xs text-gray-400">{`id: ${botDetails?.shortName ?? ''}`}</p>
        </div>
      </div>
      <div className="text-sm text-gray-400">{`Created at ${formateData}`}</div>
    </div>
  )
}

export default HeaderDetails
