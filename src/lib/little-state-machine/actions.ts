import { GlobalState } from 'little-state-machine'
import { store } from './store'
import { QuoteFormInputData } from '@components/landing-page-quote-form'
import { Quote } from '@components/quote-form/src/types'

export function updateDirectMailForm(
  state: GlobalState,
  payload: QuoteFormInputData
): GlobalState {
  return {
    ...state,
    formData: {
      ...state?.formData,
      directMailForm: {
        ...state?.formData?.directMailForm,
        ...payload,
      },
    },
  }
}
export function updateFeedbackFormForm(
  state: GlobalState,
  payload: QuoteFormInputData
): GlobalState {
  return {
    ...state,
    formData: {
      ...state?.formData,
      feedbackForm: {
        ...state?.formData?.feedbackForm,
        ...payload,
      },
    },
  }
}
export function resetFormData(
  state: GlobalState,
  formName: string
): GlobalState {
  return {
    ...state,
    formData: {
      ...state.formData,
      [formName]: store.formData[formName],
    },
  }
}

export function updateUserData(
  state: GlobalState,
  payload: { [key: string]: unknown }
): GlobalState {
  return { ...state, userData: { ...state.userData, ...payload } }
}

export function createQuote(
  state: GlobalState,
  payload: Partial<Quote> &
    Pick<Quote, 'service_id' | 'id' | 'created_at' | 'current_step'>
): GlobalState {
  return { ...state, quoteRequests: [...state.quoteRequests, payload] }
}

export function updateQuote(state: GlobalState, payload: Quote): GlobalState {
  const i = state.quoteRequests.findIndex((quote) => quote.id === payload.id)
  if (i < 0) return state
  return {
    ...state,
    quoteRequests: [
      ...state.quoteRequests.slice(0, i),
      payload,
      ...state.quoteRequests.slice(i + 1),
    ],
  }
}

export function deleteQuote(
  state: GlobalState,
  payload: { quoteId: string }
): GlobalState {
  const i = state.quoteRequests.findIndex(
    (quote) => quote.id === payload.quoteId
  )
  return {
    ...state,
    quoteRequests: [
      ...state.quoteRequests.slice(0, i),
      ...state.quoteRequests.slice(i + 1),
    ],
  }
}
