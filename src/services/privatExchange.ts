import fetchClient from '@/services/fetchClient'
import type { FetchPrivatExchangeResponse } from '@/store/types'

const BASE_URL = import.meta.env.DEV
  ? '/p24api'
  : 'https://api.privatbank.ua/p24api'

export const fetchExchangeCourseRate = async (): Promise<
  FetchPrivatExchangeResponse[]
> => {
  return fetchClient({
    baseURL: BASE_URL,
    endpoint: '/pubinfo?exchange&coursid=5'
  })
}
