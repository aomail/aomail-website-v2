import { styled, Card, Paragraph, Title, Spacer, TextHolder } from '@theme'
import { Button } from '@components/button'
import {
  AnimateSharedLayout,
  m as motion,
  useAnimation,
  Variants,
} from 'framer-motion'
import { TempQuoteForm as QuoteForm } from '@components/temp-quote-form'
import { Modal } from '@components/modal/src/modal'
import React from 'react'

export interface QuoteCtaProps extends React.ComponentProps<typeof Bg> {
  heading?: string
  paragraph?: string
}

const Bg = styled(Card, {
  position: 'relative',
  pt: '$5',
  pb: '$6',
  '@m': {
    px: '$5',
  },
  '@l': {
    pb: '$6',
    px: '12.25%',
  },
  '@xl': {
    pb: '$6',
    px: '25%',
  },
})

const Content = styled(motion.div, {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
})

const contentVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 25 },
}

export function QuoteCta({
  heading,
  paragraph,
  ...props
}: QuoteCtaProps): JSX.Element {
  const contentControls = useAnimation()

  function handleOpenModal({ modalIsOpen, toggleModal }) {
    return async function (e: React.MouseEvent) {
      if (!modalIsOpen) {
        e?.preventDefault()
        await contentControls.start('hidden')
        toggleModal()
      }
    }
  }
  function handleCloseModal({ modalIsOpen, toggleModal }) {
    return async function (e: React.MouseEvent) {
      if (modalIsOpen) {
        e?.preventDefault()
        toggleModal()
        setTimeout(contentControls.start, 300, 'visible')
      }
    }
  }
  return (
    <AnimateSharedLayout>
      <Modal
        opens={({ modalIsOpen, toggleModal }) => (
          <QuoteForm
            toggle={handleCloseModal({ modalIsOpen, toggleModal })}
            active={modalIsOpen}
          />
        )}
      >
        {({ modalIsOpen, toggleModal }) => (
          //@ts-expect-error Stitches as prop doesn't expect motion component
          <Bg as={motion.div} layoutId="quoteCta" {...props}>
            <Content
              layout
              animate={contentControls}
              variants={contentVariants}
            >
              <Title
                layout
                layoutId="quote-title"
                as={motion.h2}
                level="3"
                alignCenter
                css={{ mt: '$4' }}
              >
                {heading || 'Get a quote for your next job'}
              </Title>
              <TextHolder>
                {paragraph ? (
                  <Paragraph alignCenter size="m">
                    {paragraph}
                  </Paragraph>
                ) : (
                  <Spacer size="large" />
                )}
              </TextHolder>
              <Spacer size="xlarge" />
              <Button
                css={{
                  minWidth: '75%',
                  height: '$5',
                  '@s': { minWidth: '50%' },
                  '@m': { minWidth: '$12' },
                }}
                onClick={handleOpenModal({ modalIsOpen, toggleModal })}
              >
                Start your quote
              </Button>
            </Content>
          </Bg>
        )}
      </Modal>
    </AnimateSharedLayout>
  )
}
