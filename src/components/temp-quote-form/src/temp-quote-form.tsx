import {
  Flex,
  Box,
  Input,
  Checkbox,
  classes,
  TextArea,
  InputLabel,
  Heading2,
  RadioButton,
  CloseControls,
} from '@theme'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, { useEffect, useState } from 'react'
import { encode } from '@lib/netlify/utils'
import { Button } from '@components/button'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import { ModalLayout } from '@components/modal/src/layout'
import { FormSuccess } from '@components/notifications/confirmations/formSuccess'

const FORM_NAME = 't_request-quote'

interface TempQuoteFormProps extends React.ComponentProps<typeof ModalLayout> {
  toggle: (e: React.MouseEvent) => void
  modalLayoutId?: string
  active: boolean
  onSubmissionComplete?: () => void
  onSubmissionClose?: () => void
}

export const tempQuoteFormInputs = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  deadline: '',
  service: '',
  quantity: '',
  message: '',
  joinMailingList: false,
  'bot-field': '',
}

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter a first name'),
  lastName: yup.string(),
  service: yup.string(),
  deadline: yup.string(),
  quantity: yup.string(),
  companyName: yup.string(),
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('We need an email to send your quote!'),
  phone: yup.string(),
  message: yup.string(),
  'bot-field': yup.string(),
  joinMailingList: yup.boolean(),
})

const mobileMask = [
  /[\d|\w|+]/,
  /[\d|\w|+]/,
  /[\d|\w|+]/,
  /[\d|\w|+]/,
  ' ',
  /[\d|\w|+]/,
  /[\d|\w|+]/,
  /[\d|\w|+]/,
  ' ',
  /[\d|\w|+]/,
  /[\d|\w|+]/,
  /[\d|\w|+]/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
]

const submissionMessages = {
  heading: {
    success: 'Your quote request was sent!',
    error: 'There was a problem sending your quote request',
  },
  paragraph: {
    success: `Thank so much for requesting a quote. A team member will be in touch with you very soon to confirm the details of your brief. We aim to provide a quote within 4 hours.`,
    error: `Please try again, or email us at sales@aomail.com.au`,
  },
}

export function TempQuoteForm({
  toggle,
  onSubmissionClose,
  onSubmissionComplete,
  ...props
}: TempQuoteFormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<typeof tempQuoteFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [submission, setSubmission] = useState({
    result: null,
    message: null,
    form: FORM_NAME,
  })

  const {
    state: { userData },
  } = useStateMachine({})

  const watchService = watch('service')

  useEffect(() => {
    window?.dataLayer.push({ event: 'quote_form_opened' })
    return () => {
      window?.dataLayer.push({ event: 'quote_form_closed' })
    }
  }, [])

  useEffect(() => {
    if (window && watchService) {
      window.dataLayer.push({
        event: 'service_category_selected',
        service: watchService,
      })
    }
  }, [watchService])

  const onSubmit = (data: typeof tempQuoteFormInputs) => {
    setSubmitting(true)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': FORM_NAME, ...data, ...userData }),
    })
      .then(() => {
        setSubmission({ result: 'success', message: 'null', form: FORM_NAME })
        window?.dataLayer?.push({ event: 'quote_form_submitted' })
        router.push(
          {
            pathname: router.pathname,
            query: {
              submission: 'success',
              form: submission.form,
              ...router.query,
            },
          },
          null,
          { shallow: true }
        )
      })
      .catch((error) => {
        setSubmission({ result: 'error', message: error, form: FORM_NAME })
        console.error(error)
        window?.dataLayer?.push({ event: 'quote_form_submission_error' })
        router.push(
          {
            pathname: router.pathname,
            query: {
              submission: 'error',
              form: submission.form,
              ...router.query,
            },
          },
          null,
          { shallow: true }
        )
      })
      .finally(() => {
        onSubmissionComplete && onSubmissionComplete()
        setSubmitting(false)
        reset()
      })
  }

  function removeSubmissionState() {
    const { ...queries } = router.query
    router.push({ pathname: router.pathname, query: queries }, null, {
      shallow: true,
    })
    setSubmission({
      result: null,
      message: null,
      form: FORM_NAME,
    })
    onSubmissionClose && onSubmissionClose()
  }

  useEffect(() => {
    if (router?.query?.submission && !submission.result) {
      removeSubmissionState()
    }
  }, [router])

  const { ref: phoneRef, ...phoneFormProps } = register('phone')

  return (
    <ModalLayout
      hideControlsBorder
      controls={<CloseControls handleClose={toggle} />}
      {...props}
    >
      <Box>
        <Heading2 marginTop="small" level="4">
          Request a quote
        </Heading2>
        <form id={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
          <Box css={{ my: '$4', pb: '$2' }}>
            <Flex css={{ mx: '-$2' }}>
              <Input
                {...register('firstName')}
                id="firstName"
                placeholder="Jane"
                defaultValue={tempQuoteFormInputs.firstName}
                css={{ px: '$2', flexBasis: '50%' }}
                errors={errors}
                required
              >
                First name
              </Input>
              <Input
                {...register('lastName')}
                id="lastName"
                placeholder="Appleseed"
                defaultValue={tempQuoteFormInputs.lastName}
                css={{ px: '$2', flexBasis: '50%' }}
                errors={errors}
              >
                Last name
              </Input>
            </Flex>
            <Input
              {...register('companyName')}
              id="companyName"
              placeholder="Acme inc"
              defaultValue={tempQuoteFormInputs.companyName}
              errors={errors}
            >
              Company name
            </Input>
            <Input
              {...register('email')}
              id="email"
              placeholder="jane@example.com.au"
              type="email"
              defaultValue={tempQuoteFormInputs.email}
              errors={errors}
              required
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
              defaultValue={tempQuoteFormInputs.phone}
              errors={errors}
              {...phoneFormProps}
              render={(textMaskRef, props) => (
                <Input
                  ref={(node) => {
                    textMaskRef(node)
                    phoneRef(node)
                  }}
                  {...props}
                  name="phone"
                >
                  Contact number
                </Input>
              )}
            />
            {/* @ts-expect-error Stitches issue with as prop */}
            <InputLabel
              css={{ mt: '$8' }}
              size="s"
              as="label"
              htmlFor="service"
            >
              Which service do you need?
            </InputLabel>
            <Flex wrap css={{ pb: '$3' }}>
              <RadioButton
                id="services1"
                {...register('service')}
                value="Print and mail"
              >
                Printing and mailing
              </RadioButton>
              <RadioButton id="services2" {...register('service')} value="Mail">
                Mailing only
              </RadioButton>
              <RadioButton
                id="services3"
                {...register('service')}
                value="Print"
              >
                Printing only
              </RadioButton>
              <RadioButton
                id="services4"
                {...register('service')}
                value="Fulfilment"
              >
                Fulfilment
              </RadioButton>
            </Flex>
            {/* @ts-expect-error Stitches issue with as prop */}
            <InputLabel as="label" size="s" htmlFor="deadline">
              How urgent is the job?
            </InputLabel>
            <Flex wrap css={{ mt: '$3', pb: '$3' }}>
              <RadioButton
                id="deadline1"
                {...register('deadline')}
                value="none"
              >
                No deadline yet
              </RadioButton>
              <RadioButton
                id="deadline2"
                {...register('deadline')}
                value="3_weeks"
              >
                3 weeks or more
              </RadioButton>
              <RadioButton
                id="deadline3"
                {...register('deadline')}
                value="'2_weeks"
              >
                2 weeks or more
              </RadioButton>
              <RadioButton
                id="deadline4"
                {...register('deadline')}
                value="next_week"
              >
                Next week
              </RadioButton>
              <RadioButton
                id="deadline5"
                {...register('deadline')}
                value="urgently"
              >
                Urgently!
              </RadioButton>
            </Flex>

            <Box css={{ mt: '$3', pb: '$2' }}>
              {/* @ts-expect-error Stitches issue with as prop */}
              <InputLabel as="label" size="s" htmlFor="quantity">
                How many items?
              </InputLabel>
              <Input
                name="quantity"
                id="quantity"
                {...register('quantity')}
                type="number"
              />
            </Box>
            <Box css={{ mt: '$3' }}>
              {/* @ts-expect-error Stitches issue with as prop */}
              <InputLabel as="label" size="s" htmlFor="message">
                Message
              </InputLabel>
              <TextArea
                {...register('message')}
                resizeVertical
                id="message"
                rows={8}
                cols={30}
                placeholder="Please include any additional information that is applicable to your job."
                autoComplete="off"
                defaultValue={tempQuoteFormInputs.message}
                css={{ width: '100%' }}
              />
            </Box>
            <Checkbox
              {...register('joinMailingList')}
              id="joinMailingList"
              defaultChecked={tempQuoteFormInputs.joinMailingList}
              css={{ mt: '$3' }}
            >
              Keep me up to date with news and special offers
            </Checkbox>
          </Box>
          <p aria-hidden="true" className={classes.visuallyHidden()}>
            <label>
              Skip this field if you’re human:
              <input tabIndex={-1} {...register('bot-field')} />
            </label>
          </p>
          <Button fullWidth size="cta" isLoading={submitting} type="submit">
            Request quote
          </Button>
        </form>
        <AnimatePresence>
          {submission.result && (
            <FormSuccess
              heading={submissionMessages.heading?.[submission.result]}
              paragraph={submissionMessages.paragraph?.[submission.result]}
              handleClose={removeSubmissionState}
              error={submission.result === 'error'}
            />
          )}
        </AnimatePresence>
      </Box>
    </ModalLayout>
  )
}
