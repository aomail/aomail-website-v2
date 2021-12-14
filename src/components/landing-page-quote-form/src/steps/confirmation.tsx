import { useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import { QuoteFormInputData } from '../landing-page-quote-form'
import { Heading4, Paragraph, Box } from '@theme'
import {
  resetFormData,
  updateFeedbackFormForm,
} from '@lib/little-state-machine'
import { BreakpointsAry } from '@lib/react/breakpoints'
import { FormStepControls } from '../bottomBarControls'

export interface ConfirmationPageProps extends QuoteFormInputData {
  changeStep?: (step?: string) => unknown
  keyword: 'string'
  toggleIsOpen: () => void
  isOpen: boolean
  breakpoints: BreakpointsAry
}

export function ConfirmationPage({
  keyword,
}: ConfirmationPageProps): JSX.Element {
  const { state, actions } = useStateMachine({
    resetFormData,
    updateFeedbackFormForm,
  })
  const { firstName, email } = state.formData?.directMailForm

  useEffect(() => {
    actions.updateFeedbackFormForm({ firstName, email })
  }, [])

  return (
    <Box>
      <Box css={{ flex: '1 1' }}>
        <Heading4 alignCenter css={{ color: '$white' }}>
          Your quote is in progress{firstName && `, ${firstName}`}!
        </Heading4>
        <Paragraph size="s" css={{ color: '$LA90', mt: '$6' }} alignCenter>
          Thanks so much for giving us the opportunity to quote on your next
          job!
        </Paragraph>
        <Paragraph size="s" css={{ color: '$LA90' }} alignCenter>
          A {keyword} specialist is reviewing your requirements. Please keep
          checking your inbox for your quote to arrive.
        </Paragraph>
        <Paragraph size="s" css={{ color: '$LA90' }} alignCenter>
          If we have any questions we will contact you via email or your
          preferred contact number.
        </Paragraph>
      </Box>
    </Box>
  )
}

export function SuccessControls({
  isOpen,
  toggleIsOpen,
}: ConfirmationPageProps): JSX.Element {
  return (
    <FormStepControls
      isSubmitting={false}
      isOpen={isOpen}
      buttonLabel="Close"
      buttonColor="light"
      buttonOnClick={toggleIsOpen}
    />
  )
}
