import Router from './components/Router'
import BotApiContextProvider from './context/BotApiContext'

function App () {
  return (
    <BotApiContextProvider>
      <Router />
    </BotApiContextProvider>
  )
}

export default App
