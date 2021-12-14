import fetch from 'isomorphic-unfetch'
import { Quote, ServiceType } from '../types'

export const serviceTypes: ServiceType[] = [
  'print',
  'mail',
  'fulfilment',
  'callback',
]

export async function newQuote(
  quote: Partial<Quote> & Pick<Quote, 'service_id'>
) {
  const quotePayload: Quote = await fetch('/api/create-quote', {
    method: 'POST',
    body: JSON.stringify(quote),
  })
    .then((res) => res.json())
    .catch((err) => err.error)
  return quotePayload
}
