import { useParams, Link } from 'react-router-dom'
import { BotDetailsContext, useBotDetails } from '../../context/BotDetailContext'
import HeaderDetails from '../sections/HeaderDetails'
import BallonIcon from '../../icons/BalloonIcon'
import Button from '../Button'
import SendMessageIcon from '../../icons/SendMessageIcon'
import ReceivedMessageIcon from '../../icons/ReceivedMessageIcon'
import ProfileIcon from '../../icons/ProfileIcon'
import Divider from '../Divider'

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
    <>
      <HeaderDetails bot={bot} />
      <div className='grid grid-cols-4 gap-4 py-4'>
        <div className='rounded-lg shadow-md bg-white border-gray-200 p-8'>
          <div className='pb-4'>
            <p className="text-xs text-gray-400 pb-1">Region and idom</p>
            <p className="text-xs text-gray-400">EUA - English (EN)</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 pb-1">TimeZone</p>
            <p className="text-xs text-gray-400">(UTC - 03:00) Brasilia</p>
          </div>
        </div>

        <div className='rounded-lg shadow-md bg-white border-gray-200 pl-8 flex items-center gap-2 col-span-2'>
          <ProfileIcon />
          <div>
            <p className="font-bold text-2xl text-colorTitle">1.000</p>
            <p className="font-mono text-xs text-gray-400">Usuários ativos</p>
          </div>
        </div>

        <div className='grid items-center justify-center text-center gap-6 py-8 row-span-2'>
          <BallonIcon/>
          <div>
            <p className="text-xs text-gray-400">Status Account</p>
            <p className="font-bold text-md  text-gray-800">Free</p>
          </div>
          <div >
            <Link to="/"></Link>
            <Button label='Update account' />
          </div>
        </div>

        <div className='col-span-2 rounded-lg shadow-md bg-white border-gray-200 pl-8 flex items-center gap-2'>
          <ReceivedMessageIcon/>
          <div>
            <p className="font-bold text-2xl text-colorTitle">1.000</p>
            <p className="font-mono text-xs text-gray-400">Mensagens recebidas</p>
          </div>
        </div>

        <div className='rounded-lg shadow-md bg-white border-gray-200 p-8 pl-8 flex items-center gap-2'>
          <SendMessageIcon/>
          <div>
            <p className="font-bold text-2xl text-colorTitle">1.000</p>
            <p className="font-mono text-xs text-gray-400">Mensagens enviadas</p>
          </div>
        </div>
      </div>
      <div>
        <Divider/>
        <footer className='text-xs text-footerColor py-4 flex justify-center' >
          <div>
          &copy; 2022, BLiP Todos os direitos reservados|Termos de Uso
          </div>
        </footer>
      </div>
    </>
  )
}
