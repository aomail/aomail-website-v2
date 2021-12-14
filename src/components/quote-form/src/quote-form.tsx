import React, { useEffect, useState } from 'react'
import type { FormControllerProps } from './controllers/formController'
import { useStateMachine } from 'little-state-machine'
import { createQuote } from '@lib/little-state-machine'
import { FormSeedData, Quote, ServiceType } from './types'
import { ModalLayout } from '@components/modal/src/layout'
import { CloseControls } from '@atoms'
import { newQuote, serviceTypes } from './scripts/newQuote'
import { getQuoteByID } from './scripts/getQuoteById'
import dynamic from 'next/dynamic'
import type { SelectServiceProps } from './select-service'

const FormController = dynamic<FormControllerProps>(() =>
  import('./controllers/formController').then((res) => res.FormController)
)
const SelectService = dynamic<SelectServiceProps>(() =>
  import('./select-service').then((res) => res.SelectService)
)

interface QuoteFormProps {
  active: boolean
  service?: ServiceType
  step?: string
  modalLayoutId?: string
  quoteId?: string
  toggle: (e: React.MouseEvent) => void
  initialData?: FormSeedData
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  active,
  toggle,
  quoteId,
  service,
  initialData,
  step,
}) => {
  const { state, actions } = useStateMachine({ createQuote })
  const [quoteData, setQuoteData] =
    useState<
      Pick<FormControllerProps, 'service' | 'initialData' | 'quoteId' | 'step'>
    >()

  function isValidServiceType(serviceType?: ServiceType) {
    return serviceType && serviceTypes.includes(serviceType)
  }

  //TODO: display a quote continue screen if previous quote exists
  function getExistingQuoteByService(serviceType: ServiceType) {
    function matchQuoteToService(quote: Quote) {
      return quote.service_id === serviceType
    }

    if (isValidServiceType(serviceType)) {
      //TODO: Handle retrieiving multiple quotes
      return state.quoteRequests.find(matchQuoteToService)?.id
    }
  }

  async function getQuoteInitialisationData(_service = service) {
    if (quoteId) {
      //TODO: Handle invalid quote IDs
      setQuoteData({
        initialData,
        step,
        quoteId,
        service: getQuoteByID(state, quoteId)?.service_id,
      })
      return true
    }
    if (!isValidServiceType(_service)) return null
    const existingId = getExistingQuoteByService(_service)
    if (existingId) {
      setQuoteData({
        initialData,
        step,
        quoteId: existingId,
        service: _service,
      })
      return true
    }
    const newQuoteData = await newQuote({ service_id: _service })
    actions.createQuote(newQuoteData)
    setQuoteData({
      initialData,
      step,
      quoteId: newQuoteData.id,
      service: newQuoteData.service_id,
    })
  }

  function handleSelectedService(serviceType: ServiceType) {
    getQuoteInitialisationData(serviceType)
  }

  useEffect(() => {
    if (!active) setQuoteData(null)
    if (active) getQuoteInitialisationData()
  }, [active])

  const hasQuoteData = quoteData?.quoteId

  useEffect(() => {
    console.log('quoteformRender')
  })

  return hasQuoteData ? (
    <FormController {...quoteData} toggle={toggle} />
  ) : (
    <ModalLayout
      controls={<CloseControls handleClose={toggle} />}
      hideControlsBorder
    >
      <SelectService setSelectedService={handleSelectedService} />
    </ModalLayout>
  )
}
