import { Link } from 'react-router-dom'

export default function ListContacts () {
  return (
    <div>ListContacts
      <div>
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i}>
            <Link to={`/contact/${i}`}>item {i}</Link>
          </p>
        ))}
      </div>
    </div>

  )
}
