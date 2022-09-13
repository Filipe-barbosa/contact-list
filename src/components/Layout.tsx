
import { PropsWithChildren } from './shared'
import Container from './Container'
import Navbar from './NavBar'

export default function Layout ({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col bg-background h-screen'>
      <Navbar />
      <Container className="p-8 h-full flex-1 m-none">
        {children}
      </Container>
    </div>
  )
}
