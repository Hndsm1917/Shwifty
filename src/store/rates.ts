import { defineStore } from 'pinia'
import { fetchExchangeCourseRate } from '@/services/privatExchange'
import type { FetchPrivatExchangeResponse } from '@/types/apiTypes'

interface State {
  privatExchangeRates: FetchPrivatExchangeResponse[]
}

export const useExchangeRatesStore = defineStore('exchangeRates', {
  state: (): State => ({
    privatExchangeRates: []
  }),

  getters: {
    usdRates({ privatExchangeRates }): FetchPrivatExchangeResponse {
      return privatExchangeRates.filter(({ ccy }) => ccy === 'USD')[0]
    }
  },

  actions: {
    async getPrivatExchangeRates() {
      this.privatExchangeRates = await fetchExchangeCourseRate()
    }
  }
})
