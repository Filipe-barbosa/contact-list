import { render } from '@testing-library/react'
import App from './App'

describe('Login Component', () => {
  test('Should  render text', () => {
    const { getByText } = render(<App />)
    expect(getByText('Start project')).toBeTruthy()
  })
})
