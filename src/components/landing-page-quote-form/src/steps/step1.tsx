import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, RadioButton, Input, Paragraph } from '@theme'
import type { FormSteps } from '../landing-page-quote-form'
import { FormStepControls } from '../bottomBarControls'
import { updateDirectMailForm } from '@lib/little-state-machine'
import { MotionValue } from 'framer-motion'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { useEffect } from 'react'

export interface Step1Props extends JobInformation {
  changeStep: (step: string) => unknown
  isSubmitting: boolean
  setSubmitting: (a: boolean) => void
  header: React.ReactNode
  progress: MotionValue<number>
  breakpoints: BreakpointsAry
  step: FormSteps
  isOpen: boolean
  toggleIsOpen: () => void
}

export interface JobInformation {
  mailFormat?:
    | 'flyers/postcards'
    | 'brochures'
    | 'letters'
    | 'plastic wrap'
    | 'other'
    | 'not provided'
  services?: 'Print and mail' | 'Mail only' | 'not provided'
  itemQuantity?: number | 'not provided'
  frequency?: 'One-off' | 'daily' | 'weekly' | 'monthly' | 'not provided'
  urgency?: 'not provided' //to be built
}

const FORM_NAME = 'step1form'

export function Step1Form({
  changeStep,
  progress,
  setSubmitting,
}: Step1Props): JSX.Element {
  const { state, actions } = useStateMachine({ updateDirectMailForm })
  const { register, handleSubmit } = useForm<JobInformation>()
  const onSubmit = (data) => {
    setSubmitting(true)
    actions.updateDirectMailForm({ ...data })
    changeStep('2')
  }
  const {
    mailFormat,
    services,
    itemQuantity,
    frequency,
  } = state.formData?.directMailForm

  useEffect(() => {
    progress.set(30)
    setSubmitting(false)
  }, [])

  return (
    <form id={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
      <Paragraph>What are you sending?</Paragraph>
      <Flex wrap css={{ mt: '$3', pb: '$3' }}>
        <RadioButton
          id="format1"
          name="mailFormat"
          {...register('mailFormat')}
          value="flyers/postcards"
          defaultChecked={mailFormat === 'flyers/postcards'}
        >
          Flyers / Postcards
        </RadioButton>
        <RadioButton
          id="format2"
          name="mailFormat"
          {...register('mailFormat')}
          value="brochures"
          defaultChecked={mailFormat === 'brochures'}
        >
          Brochures
        </RadioButton>
        <RadioButton
          id="format3"
          name="mailFormat"
          {...register('mailFormat')}
          value="letters"
          defaultChecked={mailFormat === 'letters'}
        >
          Letters
        </RadioButton>
        <RadioButton
          id="format4"
          name="mailFormat"
          {...register('mailFormat')}
          value="plastic wrap"
          defaultChecked={mailFormat === 'plastic wrap'}
        >
          Plastic wrap
        </RadioButton>
        <RadioButton
          id="format5"
          name="mailFormat"
          {...register('mailFormat')}
          value="other"
          defaultChecked={mailFormat === 'other'}
        >
          Something else
        </RadioButton>
      </Flex>
      <Paragraph>Which services do you need?</Paragraph>
      <Flex wrap css={{ mt: '$3', pb: '$3' }}>
        <RadioButton
          id="services1"
          name="services"
          {...register('services')}
          value="Print and mail"
          defaultChecked={services === 'Print and mail'}
        >
          Printing and mailing
        </RadioButton>
        <RadioButton
          id="services2"
          name="services"
          {...register('services')}
          value="Mail only"
          defaultChecked={services === 'Mail only'}
        >
          Mailing only
        </RadioButton>
      </Flex>
      <Paragraph
        as="label"
        htmlFor="quantity"
        css={{ display: 'block', color: '$DA80' }}
      >
        How many items? (approximate is fine)
      </Paragraph>

      <Box css={{ mt: '$3', pb: '$2' }}>
        <Input
          name="itemQuantity"
          id="quantity"
          {...register('itemQuantity')}
          type="number"
          defaultValue={itemQuantity}
        />
      </Box>
      <Paragraph css={{ color: '$DA80' }}>How often?</Paragraph>
      <Flex wrap css={{ mt: '$3', pb: '$3' }}>
        <RadioButton
          id="frequency1"
          name="frequency"
          {...register('frequency')}
          value="One-off"
          defaultChecked={frequency === 'One-off'}
        >
          Once-off
        </RadioButton>
        <RadioButton
          id="frequency2"
          name="frequency"
          {...register('frequency')}
          value="daily"
          defaultChecked={frequency === 'daily'}
        >
          Daily
        </RadioButton>
        <RadioButton
          id="frequency3"
          name="frequency"
          {...register('frequency')}
          value="weekly"
          defaultChecked={frequency === 'weekly'}
        >
          Weekly
        </RadioButton>
        <RadioButton
          id="frequency4"
          name="frequency"
          {...register('frequency')}
          value="monthly"
          defaultChecked={frequency === 'monthly'}
        >
          Monthly
        </RadioButton>
      </Flex>
    </form>
  )
}

export function Step1Controls({
  isSubmitting,
  isOpen,
  toggleIsOpen,
}: Step1Props): JSX.Element {
  return (
    <FormStepControls
      isOpen={isOpen}
      isSubmitting={isSubmitting}
      buttonLabel={isOpen ? 'Next' : 'Continue your quote'}
      buttonOnClick={(e: React.PointerEvent) => {
        if (!isOpen) {
          e?.preventDefault()
          toggleIsOpen()
        }
      }}
      formName={FORM_NAME}
    />
  )
}
