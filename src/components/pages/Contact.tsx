import { Link } from 'react-router-dom'
import Header from '../sections/Header'
import Favorites from '../sections/Favorites'
import Card from '../Card'

export default function Contact () {
  return (
    <>
      <Header/>
      <Favorites/>
      <div className="divider"></div>
      <Card/>
      <div>
        <div>
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i}>
              <Link to={`/contact/${i}`}>item {i}</Link>
            </p>
          ))}
        </div>
      </div>
    </>

  )
}
