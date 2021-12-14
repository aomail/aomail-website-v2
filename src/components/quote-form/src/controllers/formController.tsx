import { ModalLayout } from '@components/modal/src/layout'
import { useMotionValue } from 'framer-motion'
import { useStateMachine } from 'little-state-machine'
import { useEffect, useMemo, useState } from 'react'
import { FormSeedData, ServiceType } from '../types'
import { resolveSchema } from '../scripts/loadSchema'
import { getQuoteByID } from '../scripts/getQuoteById'
import { ResolvedSchema } from '../types/schemaTypes'
import { useQuerySteps } from '../hooks/useQuerySteps'
import { updateQuote } from '@lib/little-state-machine/actions'
import { Controls } from '../components/controls'
import { FormStep } from '../components/formStep'

export interface FormControllerProps {
  toggle: (e: React.MouseEvent) => void
  service: ServiceType
  quoteId?: string
  initialData?: FormSeedData
  step: string
}

export function FormController({
  toggle,
  service,
  quoteId,
  //step,
  ...props
}: FormControllerProps): JSX.Element {
  const { state, actions } = useStateMachine({ updateQuote })
  const [schema, setSchema] = useState<ResolvedSchema>()

  const progress = useMotionValue(0)
  const quote = useMemo(() => getQuoteByID(state, quoteId), [state])

  const schemaSteps = schema?.steps
  const schemaStepIds = schemaSteps?.map((s) => s.step_id)
  const {
    currentIndex,
    currentStep,
    stepControls,
    //readyToSubmit,
    //exitSteps,
    stepProgress,
  } = useQuerySteps(schemaStepIds)

  const thisStep = schemaSteps?.[currentIndex]

  async function init() {
    const resolvedSchema = await resolveSchema(service)
    setSchema(resolvedSchema)
  }

  function setQuoteStep(newStep: string) {
    const newQuoteData = Object.assign({}, quote, {
      current_step: newStep,
    })
    actions.updateQuote(newQuoteData)
  }

  useEffect(() => {
    setQuoteStep(currentStep)
  }, [currentStep])

  useEffect(() => {
    init()
  }, [service])

  useEffect(() => {
    console.log(currentStep)
  })

  useEffect(() => {
    progress.set(stepProgress)
  }, [stepProgress])

  return stepControls ? (
    <ModalLayout
      controls={
        <Controls
          handleClose={toggle}
          progress={progress}
          handlePrevious={stepControls.prevStep}
        />
      }
      {...props}
    >
      <FormStep {...thisStep} stepControls={stepControls}></FormStep>
    </ModalLayout>
  ) : null
}
