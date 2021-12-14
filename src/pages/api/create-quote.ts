import type { NextApiRequest, NextApiResponse } from 'next'
import type { Quote } from '@components/quote-form/src/types'
import { serviceTypes } from '@components/quote-form/src/scripts/newQuote'
import { v4 as uuidv4 } from 'uuid'

type Error = {
  error: string
}

export default function (
  req: NextApiRequest,
  res: NextApiResponse<(Partial<Quote> & Pick<Quote, 'service_id'>) | Error>
): void {
  if (req.method === 'POST') {
    if (req.body) {
      const {
        service_id,
        ...quote
      }: Partial<Quote> & Pick<Quote, 'service_id'> = JSON.parse(req.body)
      if (service_id && serviceTypes.find((id) => id === service_id)) {
        res.status(200).json({
          id: uuidv4(),
          created_at: new Date(),
          service_id,
          ...quote,
        })
      } else {
        res.status(400).json({ error: 'The service type is invalid' })
      }
    } else {
      res.status(400).json({ error: 'No service was specified' })
    }
  } else {
    res.status(405).json({ error: 'This endpoint only accepts POST' })
  }
}
