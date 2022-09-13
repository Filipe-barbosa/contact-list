import { useParams } from 'react-router-dom'

export default function ContactDetails () {
  const { id } = useParams()
  return (
    <div>
      <h1>ContactDetails id: {id}</h1>
      <a href="/">{'<- back'}</a>
    </div>
  )
}
