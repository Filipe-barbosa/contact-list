import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from './Layout'
import ContactDetails from './pages/ContactDetails'
import ContactList from './pages/ContactList'

export default function Router () {
  return (
    <Layout>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/" element={<ContactList />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}
