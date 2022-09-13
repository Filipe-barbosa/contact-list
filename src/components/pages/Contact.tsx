// import { Link } from 'react-router-dom'
import Header from '../sections/Header'
import Favorites from '../sections/Favorites'
import CardSection from '../sections/CardSection'
import Divider from '../Divider'

export default function Contact () {
  return (
    <>
      <Header />
      <Favorites />
      <Divider />
      <CardSection />
      <div>
        {/* <div>
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i}>
              <Link to={`/contact/${i}`}>item {i}</Link>
            </p>
          ))}
        </div> */}
      </div>
    </>

  )
}
