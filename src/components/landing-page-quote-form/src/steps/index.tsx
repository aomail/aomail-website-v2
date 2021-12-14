import { useEffect, useState } from 'react'
import { JobInformation, Step1Form, Step1Controls } from './step1'
import { AdditionalInformation, Step2Form, Step2Controls } from './step2'
import { ContactAndMetaInformation, Step3Form, Step3Controls } from './step3'
import { useStateMachine } from 'little-state-machine'
import {
  resetFormData,
  updateDirectMailForm,
} from '@lib/little-state-machine/actions'
import dynamic from 'next/dynamic'
import { encode } from '@lib/netlify/utils'
import { MotionValue } from 'framer-motion'
import { TopBarControls } from '../topBarControls'
import { FormSteps } from '../landing-page-quote-form'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { StepWrapper } from './stepWrapper'
import { ConfirmationPage, SuccessControls } from './confirmation'
import type { NetlifyWorkaroundFormProps } from '@components/netlify-workaraound-form'

export type QuoteFormInputData = JobInformation &
  AdditionalInformation &
  ContactAndMetaInformation

export type FeedbackFormData = {
  email: string
  hutk: string
  ipAddress: string
  experienceRating: string
  experienceComment: string
  breakpoints: BreakpointsAry
}

const WorkaroundForm = dynamic<NetlifyWorkaroundFormProps>(() =>
  import('@components/netlify-workaraound-form').then(
    (res) => res.NetlifyWorkaroundForm
  )
)

export interface FormStepsProps {
  step: FormSteps
  isOpen: boolean
  toggleIsOpen: () => void
  changeStep: (a?: string) => void
  progress: MotionValue<number>
  breakpoints: BreakpointsAry
}

export function FormStepper({
  step,
  breakpoints,
  isOpen,
  toggleIsOpen,
  changeStep,
  progress,
}: FormStepsProps): JSX.Element {
  const [isSubmitting, setSubmitting] = useState(false)

  const { state, actions } = useStateMachine({
    resetFormData,
    updateDirectMailForm,
  })

  const [readyToSubmit, fireSubmit] = useState(false)

  const { formData, userData } = state

  const resetForm = () => actions.resetFormData('directMailForm')

  const sendForm = () => {
    setSubmitting(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'directMailForm', ...formData, ...userData }),
    })
      .then(() => {
        changeStep('success')
        actions.updateDirectMailForm({ submitted: true })
        resetForm()
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    if (readyToSubmit) {
      sendForm()
      fireSubmit(false)
    }
  }, [readyToSubmit])

  let Main, Footer

  switch (step) {
    case '1':
      Main = Step1Form
      Footer = Step1Controls
      break
    case '2':
      Main = Step2Form
      Footer = Step2Controls
      break
    case '3':
      Main = Step3Form
      Footer = Step3Controls
      break
    case 'success':
      Main = ConfirmationPage
      Footer = SuccessControls
      break
    default:
      changeStep()
  }

  return (
    <>
      <StepWrapper
        isSubmitting={isSubmitting}
        isOpen={isOpen}
        breakpoints={breakpoints}
        success={step === 'success'}
        main={
          <Main
            sendForm={step === '3' && sendForm}
            resetForm={resetForm}
            isSubmitting={isSubmitting}
            setSubmitting={setSubmitting}
            changeStep={changeStep}
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            progress={progress}
            breakpoints={breakpoints}
            fireFormSubmission={step === '3' && (() => fireSubmit(true))}
          />
        }
        header={
          <TopBarControls
            success={step === 'success'}
            toggleIsOpen={toggleIsOpen}
            progress={progress}
          />
        }
        footer={
          Footer && (
            <Footer
              isSubmitting={isSubmitting}
              isOpen={isOpen}
              toggleIsOpen={toggleIsOpen}
              breakpoints={breakpoints}
            ></Footer>
          )
        }
      />
      <WorkaroundForm name="directMailForm" formFields={formData} />
    </>
  )
}
