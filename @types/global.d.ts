import 'little-state-machine'
import type {
  QuoteFormInputData,
  FeedbackFormData,
} from '@components/landing-page-quote-form-copy'
import type { Quote } from '@components/quote-form/src/types'

declare module 'little-state-machine' {
  interface GlobalState {
    userData: {
      hutk: string
      gclid: string
      dclid: string
      //ipAddress: string
      utm_term: string
      utm_campaign: string
      utm_source: string
      utm_medium: string
      hsa_acc: string
      hsa_cam: string
      hsa_grp: string
      hsa_ad: string
      hsa_src: string
      hsa_tgt: string
      hsa_kw: string
      hsa_mt: string
      hsa_net: string
      hsa_ver: string
    }
    quoteRequests: Quote[]
    formData: {
      directMailForm: QuoteFormInputData
      feedbackForm: QuoteFormInputData
    }
  }
}

declare global {
  interface Window {
    dataLayer?: object[]
  }
}

module '*.svg' {
  const content: any
  export default content
}
