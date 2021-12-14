import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { Flex, Box, Paragraph, RadioButton, TextArea } from '@theme'
import { FormStepControls } from '../bottomBarControls'
import { updateDirectMailForm } from '@lib/little-state-machine'
import { MotionValue } from 'framer-motion'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { QuoteFormInputData } from '.'

export interface Step2Props extends AdditionalInformation {
  changeStep: (step: string) => unknown
  isSubmitting: boolean
  setSubmitting: (a: boolean) => void
  header: React.ReactNode
  progress: MotionValue<number>
  breakpoints: BreakpointsAry
  isOpen: boolean
  toggleIsOpen: () => void
}

export interface AdditionalInformation {
  artworkReady?:
    | 'yes'
    | 'no'
    | 'interested in print design'
    | '[n/a]'
    | '[unknown]'
  addressDataReady?:
    | 'yes'
    | 'no'
    | 'interested in buying a list'
    | '[n/a]'
    | '[unknown]'
  additionalInformation?: string
  //fileAttachments: <filetype>[] -- To be built - allow multiple attachments
  //isFileAttached: boolean  -- Useful for letting agent know something is attached in the form data
}

const FORM_NAME = 'step2form'

export function Step2Form({
  changeStep,
  progress,
  setSubmitting,
}: Step2Props): JSX.Element {
  const { state, actions } = useStateMachine({ updateDirectMailForm })
  const { register, handleSubmit } = useForm<AdditionalInformation>()
  const onSubmit = (data: QuoteFormInputData) => {
    actions.updateDirectMailForm(data)
    changeStep('3')
  }

  const {
    artworkReady,
    addressDataReady,
    additionalInformation,
    services,
  } = state.formData?.directMailForm

  const requiresArtwork = services === 'Print and mail'

  useEffect(() => {
    setSubmitting(false)
    progress.set(75)
    if (!requiresArtwork) {
      actions.updateDirectMailForm({ artworkReady: '[n/a]' })
    }
  }, [])

  return (
    <form id={FORM_NAME} onSubmit={handleSubmit(onSubmit)}>
      {requiresArtwork && (
        <>
          <Paragraph css={{ color: '$DA80' }}>
            Do you have artwork ready for printing?
          </Paragraph>
          <Flex wrap css={{ mt: '$3', pb: '$2' }}>
            <RadioButton
              id="artworkReady1"
              name="artworkReady"
              {...register('artworkReady')}
              value="yes"
              defaultChecked={artworkReady === 'yes'}
            >
              Yes
            </RadioButton>
            <RadioButton
              id="artworkReady2"
              name="artworkReady"
              {...register('artworkReady')}
              value="no"
              defaultChecked={artworkReady === 'no'}
            >
              Not yet
            </RadioButton>
            <RadioButton
              id="artworkReady3"
              name="artworkReady"
              {...register('artworkReady')}
              value="interested in print design"
              defaultChecked={artworkReady === 'interested in print design'}
            >
              Interested in print design
            </RadioButton>
          </Flex>
        </>
      )}
      <Paragraph css={{ color: '$DA80' }}>
        Is your recipient data file ready?
      </Paragraph>
      <Flex wrap css={{ mt: '$3', pb: '$2' }}>
        <RadioButton
          id="addressDataReady1"
          name="addressDataReady"
          {...register('addressDataReady')}
          value="yes"
          defaultChecked={addressDataReady === 'yes'}
        >
          Yes
        </RadioButton>
        <RadioButton
          id="addressDataReady2"
          name="addressDataReady"
          {...register('addressDataReady')}
          value="no"
          defaultChecked={addressDataReady === 'no'}
        >
          Not yet
        </RadioButton>
        <RadioButton
          id="addressDataReady3"
          name="addressDataReady"
          {...register('addressDataReady')}
          value="interested in buying a list"
          defaultChecked={addressDataReady === 'interested in buying a list'}
        >
          Interested in buying a list
        </RadioButton>
      </Flex>
      <Paragraph
        as="label"
        htmlFor="additionalInformation"
        css={{ color: '$DA80', display: 'block' }}
      >
        Your brief (optional)
      </Paragraph>
      <Box css={{ mt: '$3', pb: '$2' }}>
        <TextArea
          resizeVertical
          id="additionalInformation"
          name="additionalInformation"
          rows={8}
          cols={30}
          placeholder="Please include any additional information that is applicable to your job."
          {...register('additionalInformation')}
          autoComplete="off"
          defaultValue={additionalInformation}
          css={{ width: '100%' }}
        />
      </Box>
    </form>
  )
}

export function Step2Controls({
  isSubmitting,
  isOpen,
  toggleIsOpen,
}: Step2Props): JSX.Element {
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
