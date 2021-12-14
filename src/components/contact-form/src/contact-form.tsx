import {
  styled,
  Card,
  Flex,
  Box,
  Input,
  Checkbox,
  classes,
  TextArea,
  InputLabel,
  Heading2,
} from '@theme'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import React, { useCallback, useState } from 'react'
import { encode } from '@lib/netlify/utils'
import { Button } from '@components/button'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import { FormSuccess } from '@components/notifications/confirmations/formSuccess'
import { useEffect } from 'react'
import type { NetlifyWorkaroundFormProps } from '@components/netlify-workaraound-form'

const WorkaroundForm = dynamic<NetlifyWorkaroundFormProps>(() =>
  import('@components/netlify-workaraound-form').then(
    (res) => res.NetlifyWorkaroundForm
  )
)

const FORM_NAME = 'contactForm'

const inputs = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  message: '',
  joinMailingList: false,
  'bot-field': '',
}
const schema = yup.object().shape({
  firstName: yup.string().required('Please enter a first name'),
  lastName: yup.string(),
  companyName: yup.string(),
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('Please provide a valid email address'),
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
    success: 'Thanks for your message!',
    error: 'There was a problem sending your submission',
  },
  paragraph: {
    success: `We'll get back to you very soon`,
    error: `Please try again, or email us at info@aomail.com.au`,
  },
}

const Background = styled(Card, {
  boxShadow: '$1',
  px: '$4',
  pb: '$6',
  '@m': { px: '$6' },
  '@xl': { px: '$7' },
})

export function ContactForm(
  props: React.ComponentProps<typeof Background>
): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<typeof inputs>({
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

  const onSubmit = (data: typeof inputs) => {
    console.log(JSON.stringify(data, null, 4))
    setSubmitting(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': FORM_NAME, ...data, ...userData }),
    })
      .then(() => {
        setSubmission({ result: 'success', message: 'null', form: FORM_NAME })
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
        setSubmission({ result: 'error', message: error, form: FORM_NAME }),
          console.error(error)
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
        setSubmitting(false)
        reset()
      })
  }

  const removeSubmissionState = useCallback(
    function () {
      const { ...queries } = router.query
      router.push({ pathname: router.pathname, query: queries }, null, {
        shallow: true,
      })
      setSubmission({
        result: null,
        message: null,
        form: FORM_NAME,
      })
    },
    [router]
  )

  useEffect(() => {
    if (router?.query?.submission && !submission.result) {
      removeSubmissionState()
    }
  }, [removeSubmissionState, router, submission.result])

  const { ref: phoneRef, ...phoneFormProps } = register('phone')
  return (
    <Background {...props}>
      <Heading2 marginTop="small" level="4">
        Send a message
      </Heading2>
      <form id={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
        <Box css={{ my: '$4', pb: '$2' }}>
          <Flex css={{ mx: '-$2' }}>
            <Input
              {...register('firstName')}
              id="firstName"
              name="firstName"
              placeholder="Jane"
              defaultValue={inputs.firstName}
              css={{ px: '$2', flexBasis: '50%' }}
              errors={errors}
              required
            >
              First name
            </Input>
            <Input
              {...register('lastName')}
              id="lastName"
              name="lastName"
              placeholder="Appleseed"
              defaultValue={inputs.lastName}
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
            defaultValue={inputs.companyName}
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
            defaultValue={inputs.email}
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
            defaultValue={inputs.phone}
            errors={errors}
            {...phoneFormProps}
            render={(textMaskRef, props) => (
              <Input
                {...props}
                ref={(node) => {
                  textMaskRef(node)
                  phoneRef(node)
                }}
                name="phone"
              >
                Contact number
              </Input>
            )}
          />
          <Box css={{ mt: '$3' }}>
            {/*@ts-expect-error https://github.com/modulz/stitches/issues/749*/}
            <InputLabel as="label" size="s" htmlFor="message">
              Message
            </InputLabel>
            <TextArea
              {...register('message')}
              resizeVertical
              id="message"
              name="message"
              rows={8}
              cols={30}
              placeholder="Please include any additional information that is applicable to your job."
              autoComplete="off"
              defaultValue={inputs.message}
              css={{ width: '100%' }}
            />
          </Box>
          <Checkbox
            {...register('joinMailingList')}
            id="joinMailingList"
            name="joinMailingList"
            defaultChecked={inputs.joinMailingList}
            css={{ mt: '$3' }}
          >
            Keep me up to date with news and special offers
          </Checkbox>
        </Box>
        <p aria-hidden="true" className={classes.visuallyHidden()}>
          <label>
            Ignore this field if you’re human:
            <input tabIndex={-1} {...register('bot-field')} />
          </label>
        </p>
        <Button fullWidth size="cta" isLoading={submitting} type="submit">
          Send Message
        </Button>
      </form>
      <WorkaroundForm formFields={inputs} name={FORM_NAME} />
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
    </Background>
  )
}
