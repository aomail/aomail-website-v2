import { useState } from 'react'
import { Button } from './button'
import { Modal } from './modal/src/modal'
import { TempQuoteForm as QuoteForm } from './temp-quote-form'

export type QuoteButtonProps = React.ComponentProps<typeof Button>

export function QuoteButton({
  children,
  ...props
}: QuoteButtonProps): JSX.Element {
  const [, setFormWasSubmitted] = useState(false)
  function handleSubmitComplete(toggle) {
    return function () {
      toggle()
      setFormWasSubmitted(false)
    }
  }
  return (
    <Modal
      opens={({ modalIsOpen, toggleModal }) => (
        <QuoteForm
          toggle={toggleModal}
          onSubmissionClose={handleSubmitComplete(toggleModal)}
          active={modalIsOpen}
        />
      )}
    >
      {({ toggleModal }) => (
        //@ts-expect-error Stitches css compatability issue
        <Button onClick={toggleModal} {...props}>
          {children || 'Get a quote'}
        </Button>
      )}
    </Modal>
  )
}
