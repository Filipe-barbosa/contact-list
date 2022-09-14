
const BASE_URL = 'https://front-end-test.beta-cs.blip.ai'

const request = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args)
  return await res.json()
}

export const getBots = async (orderBy?: string) => {
  const url = `${BASE_URL}/bots`
  if (orderBy == null) return await request(url)
  return await request(`${url}?Filters[orderBy]=${orderBy}`)
}

export const getBotDetail = async (shortName: string) => {
  const url = `${BASE_URL}/${shortName}/details`
  return await request(url)
}
