import MenuIcon from '../../icons/MenuIcon'
import MenuIconList from '../../icons/MenuIconList'
import Button from '../Button'
import { useBotApiContext } from '../../context/BotApiContext'

export default function Header () {
  const { orderBotsBy, search, menuHidden, selectMenuHidden } = useBotApiContext()
  return (
    <div className="flex items-baseline justify-between">
      <div className="font-bold text-2xl  text-colorTitle">
            My chatbots
      </div>
      <div className="flex justify-center gap-2 items-center">
        <input onChange={(e) => search(e.target.value) } placeholder="Search" className="border rounded-lg p-2 w-80"/>
        <Button label='Order by name' click={() => orderBotsBy('name')}/>
        <Button label='Order by create' click={() => orderBotsBy('create')}/>
        <button disabled={menuHidden} onClick={() => selectMenuHidden(false)}>
          <MenuIcon/>
        </button>
        <button disabled={!menuHidden} onClick={() => selectMenuHidden(true)}>
          <MenuIconList/>
        </button>
      </div>
    </div>
  )
}
