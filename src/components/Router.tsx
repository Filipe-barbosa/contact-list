import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from './Layout'
import Details from './pages/ContactDetails'
import Contact from './pages/Contact'

export default function Router () {
  return (
    <Layout>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/details/:shortName" element={<Details />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
