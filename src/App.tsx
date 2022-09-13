import { ReactNode, FC } from 'react'
import Router from './components/Router'
import BotApiContextProvider, { ChildrenProps } from './context/BotApiContext'

// mover para um utils
export function withProviders (
  initialElement: ReactNode,
  providers: Array<FC<ChildrenProps>>
) {
  return providers.reduce(
    (children, Provider) => <Provider>{children}</Provider>,
    initialElement
  )
}

function App () {
  return withProviders(
    <Router />,
    providers
  )
}

// Novos contextos é só adicionar a lista
const providers = [BotApiContextProvider]

export default App
