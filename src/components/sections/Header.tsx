import MenuIcon from '../../icons/MenuIcon'
import MenuIconList from '../../icons/MenuIconList'
import Button from '../Button'
import { useBotApiContext } from '../../context/BotApiContext'

export default function Header () {
  const { orderBotsBy, search } = useBotApiContext()
  return (
    <div className="flex items-baseline justify-between">
      <div className="font-mono text-2xl font-extrabold text-colorTitle">
            My chatbots
      </div>
      <div className="flex justify-center gap-2 items-center">
        <input onChange={(e) => search(e.target.value) } placeholder="Search" className="border rounded-lg p-2 w-80"/>
        <Button label='Order by name' click={() => orderBotsBy('name')}/>
        <Button label='Order by create' click={() => orderBotsBy('create')}/>
        <button>
          <MenuIcon/>
        </button>
        <button>
          <MenuIconList/>
        </button>
      </div>
    </div>
  )
}
