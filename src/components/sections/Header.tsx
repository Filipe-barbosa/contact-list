import MenuIcon from '../../icons/MenuIcon'
import MenuIconList from '../../icons/MenuIconList'
import Button from '../Button'

export default function Header () {
  return (
    <div className="flex items-baseline justify-between">
        <div className="font-mono text-2xl font-extrabold text-colorTitle">
            My chatbots
        </div>
        <div className="flex justify-center gap-2 items-center">
            <input placeholder="Search" className="border rounded-lg p-2 w-80"/>
            <Button label='Order by name' click={() => { console.log('foi') }}/>
            <Button label='Order by name' click={() => { console.log('vamos') }}/>
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
