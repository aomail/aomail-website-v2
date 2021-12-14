import { GlobalState } from 'little-state-machine'
import type { Quote } from '../types'

export function getQuoteByID(state: GlobalState, id: string): Quote {
  return id && state.quoteRequests.find((quote: Quote) => id === quote.id)
}
