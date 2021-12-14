import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph, Input, Checkbox, classes } from '@theme'
import { updateDirectMailForm } from '@lib/little-state-machine'
import MaskedInput from 'react-text-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import type { MotionValue } from 'framer-motion'
import { FormStepControls } from '../bottomBarControls'
import type { BreakpointsAry } from '@lib/react/breakpoints'

export type ContactAndMetaInformation = ContactInformation &
  MetaInformation &
  FormStateInformation

export interface Step3Props extends ContactAndMetaInformation {
  changeStep: (step: string) => unknown
  sendForm: () => void
  isSubmitting: boolean
  setSubmitting: (a: boolean) => void
  header: React.ReactNode
  progress: MotionValue<number>
  breakpoints: BreakpointsAry
  isOpen: boolean
  toggleIsOpen: () => void
  fireFormSubmission: () => void
}

export interface ContactInformation {
  firstName?: string
  lastName?: string
  companyName?: string
  email?: string
  phone?: string
  country?: string
}

export interface MetaInformation {
  'bot-field-step3'?: string
  landingPageKeyword?: string
  joinMailingList?: boolean
}

export interface FormStateInformation {
  readyToSubmit?: boolean
  submitted?: boolean
}

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter a first name'),
  lastName: yup.string(),
  companyName: yup.string(),
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('We need an email to send your quote!'),
  phone: yup
    .string()
    .required(`Please enter a telephone number`)
    .min(9, 'Please enter a full telephone number')
    .max(14, 'The telephone number you entered seems too long.'),
  country: yup.string(),
})

const mobileMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
]

const FORM_NAME = 'step3form'

export function Step3Form({
  fireFormSubmission,
  progress,
  setSubmitting,
}: Step3Props): JSX.Element {
  const { state, actions } = useStateMachine({
    updateDirectMailForm,
  })
  const { register, handleSubmit, formState } = useForm<
    ContactInformation & MetaInformation
  >({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })
  const { errors } = formState

  const onSubmit = (data: ContactInformation & MetaInformation) => {
    progress.set(100)
    setSubmitting(true)
    actions.updateDirectMailForm({ ...data, readyToSubmit: true })
    window && window.setTimeout(fireFormSubmission, 1000)
  }

  useEffect(() => {
    progress.set(95)
    setSubmitting(false)
  }, [])

  const { firstName, lastName, companyName, email, phone, joinMailingList } =
    state.formData.directMailForm
  const [, setSubmittable] = useState(false)
  useEffect(() => {
    if (formState.isValid) {
      setSubmittable(true)
    } else {
      setSubmittable(false)
    }
  }, [formState])
  return (
    <form id={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
      <Paragraph css={{ color: '$DA80', mt: '$2' }}>
        Your contact information
      </Paragraph>
      <Box css={{ my: '$4', pb: '$2' }}>
        <Flex css={{ mx: '-$2' }}>
          <Input
            {...register('firstName')}
            id="firstName"
            name="firstName"
            placeholder="Jane"
            defaultValue={firstName || ''}
            css={{ px: '$2', flexBasis: '50% ' }}
            errors={errors}
          >
            First name
          </Input>
          <Input
            {...register('lastName')}
            id="lastName"
            name="lastName"
            placeholder="Appleseed"
            defaultValue={lastName || ''}
            css={{ px: '$2', flexBasis: '50%' }}
            errors={errors}
          >
            Last name
          </Input>
        </Flex>
        <Input
          {...register('companyName')}
          id="companyName"
          name="companyName"
          placeholder="Acme inc"
          defaultValue={companyName || ''}
          errors={errors}
        >
          Company name
        </Input>
        <Input
          {...register('email')}
          id="email"
          name="email"
          placeholder="jane@example.com.au"
          type="email"
          defaultValue={email || ''}
          errors={errors}
        >
          Email address
        </Input>
        <MaskedInput
          id="phone"
          placeholder="04xx xxx xxx"
          mask={mobileMask}
          inputMode="numeric"
          guide={false}
          type="text"
          defaultValue={phone || ''}
          errors={errors}
          {...register('phone')}
          render={(textMaskRef, props) => (
            <Input
              ref={(node) => {
                textMaskRef(node)
              }}
              name="phone"
              {...props}
            >
              Contact number
            </Input>
          )}
        />
      </Box>
      <Checkbox
        {...register('joinMailingList')}
        id="joinMailingList"
        name="joinMailingList"
        defaultChecked={joinMailingList}
      >
        I’d like to keep updated with news and special offers
      </Checkbox>
      <p aria-hidden="true" className={classes.visuallyHidden()}>
        <label>
          Skip this field if you’re human:
          <input
            tabIndex={-1}
            {...register('bot-field-step3')}
            name="bot-field-step3"
          />
        </label>
      </p>
    </form>
  )
}
export function Step3Controls({
  isSubmitting,
  toggleIsOpen,
  isOpen,
}: Step3Props): JSX.Element {
  return (
    <FormStepControls
      isOpen={isOpen}
      isSubmitting={isSubmitting}
      buttonLabel={isOpen ? 'Submit quote request' : 'Continue your quote'}
      buttonOnClick={(e: React.PointerEvent) => {
        if (!isOpen) {
          e?.preventDefault()
          toggleIsOpen()
        }
      }}
      buttonColor="success"
      formName={FORM_NAME}
    />
  )
}
