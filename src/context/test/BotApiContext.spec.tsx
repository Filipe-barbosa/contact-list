
import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import BotApiContextProvider, { useBotApiContext } from '../BotApiContext'
import * as api from '../api'

const apiResultMock = [
  {
    name: 'Max',
    type: 'builder',
    created: '2020-01-11T14:35:44.510Z'
  },
  {
    name: 'Eleven',
    type: 'router',
    created: '2020-01-31T14:35:44.510Z'
  },
  {
    name: 'Mike',
    type: 'builder',
    created: '2020-02-21T14:35:44.510Z'
  }
]
const resultExpected = [
  {
    name: 'Max',
    type: 'builder',
    created: '2020-01-11T14:35:44.510Z',
    isFavorite: false
  },
  {
    name: 'Eleven',
    type: 'router',
    created: '2020-01-31T14:35:44.510Z',
    isFavorite: false
  },
  {
    name: 'Mike',
    type: 'builder',
    created: '2020-02-21T14:35:44.510Z',
    isFavorite: false
  }
]

interface Props {
  children: React.ReactNode
}
describe('Integration test BotApiContext', () => {
  const wrapper: React.FC<Props> = ({ children }) => <BotApiContextProvider>{children}</BotApiContextProvider>

  test('should provide application information', async () => {
    jest.spyOn(api, 'getBots').mockResolvedValue(apiResultMock)

    const { result, waitForNextUpdate } = renderHook(
      () => useBotApiContext(), { wrapper }
    )
    await waitForNextUpdate()
    expect(result.current.botList).toEqual(resultExpected)
  })

  test('should order list by name', async () => {
    jest.spyOn(api, 'getBots').mockResolvedValue([
      {
        name: 'Eleven',
        type: 'router',
        created: '2020-01-31T14:35:44.510Z',
        isFavorite: false
      },
      {
        name: 'Max',
        type: 'builder',
        created: '2020-01-11T14:35:44.510Z',
        isFavorite: false
      },
      {
        name: 'Mike',
        type: 'builder',
        created: '2020-02-21T14:35:44.510Z',
        isFavorite: false
      }])

    const { result, waitForNextUpdate } = renderHook(
      () => useBotApiContext(), { wrapper }
    )

    result.current.orderBotsBy('name')

    await waitForNextUpdate()
    expect(result.current.botList).toEqual([
      {
        name: 'Eleven',
        type: 'router',
        created: '2020-01-31T14:35:44.510Z',
        isFavorite: false
      },
      {
        name: 'Max',
        type: 'builder',
        created: '2020-01-11T14:35:44.510Z',
        isFavorite: false
      },
      {
        name: 'Mike',
        type: 'builder',
        created: '2020-02-21T14:35:44.510Z',
        isFavorite: false
      }])
  })

  test('should filter list by name', async () => {
    jest.spyOn(api, 'getBots').mockResolvedValue([
      {
        name: 'Eleven',
        type: 'router',
        created: '2020-01-31T14:35:44.510Z',
        isFavorite: false
      },
      {
        name: 'Max',
        type: 'builder',
        created: '2020-01-11T14:35:44.510Z',
        isFavorite: false
      },
      {
        name: 'Mike',
        type: 'builder',
        created: '2020-02-21T14:35:44.510Z',
        isFavorite: false
      }])
    const { result, waitForNextUpdate } = renderHook(
      () => useBotApiContext(), { wrapper }
    )
    result.current.search('Max')
    await waitForNextUpdate()
    expect(result.current.nonFavoriteBots).toEqual([
      {
        name: 'Max',
        type: 'builder',
        created: '2020-01-11T14:35:44.510Z',
        isFavorite: false
      }
    ])
  })
})
