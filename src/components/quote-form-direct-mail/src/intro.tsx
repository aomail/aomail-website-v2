import {
  Box,
  Paragraph,
  MailIllustration,
  styled,
  Container,
  Close,
  Spacer,
  Heading2,
} from '@theme'
import { FormStepControls } from '../../landing-page-quote-form/src/bottomBarControls'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { Button } from '@components/button'

interface QuoteIntroProps {
  changeStep: (step: string) => unknown
  keyword?: string
  isSubmitting: boolean
  isOpen: boolean
  toggleIsOpen: () => void
  setSubmitting: (a: boolean) => void
  breakpoints: BreakpointsAry
}
import { m as motion } from 'framer-motion'
import React from 'react'

const FormImage = styled('div', {
  display: 'block',
  position: 'absolute',
  height: '$9',
  alignSelf: 'flex-end',
  right: '-48px',
  top: '-40px',
  '@s': {
    height: '$10',
    right: '-40px',
  },
  transition: 'opacity 0.4s',
  willChange: 'opacity',
  variants: {
    isOpen: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0.5,
      },
    },
  },
})

const Content = styled('div', {
  flex: '1 1',
  opacity: '0',
  position: 'absolute',
  transition: 'opacity 0.2s ease-in-out',
  '@l': {
    position: 'static',
    opacity: '1',
  },
  variants: {
    isOpen: {
      true: {
        position: 'static',
        opacity: '1',
      },
    },
  },
})

const contentContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const contentChildrenVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const QuoteIntro: React.FC<QuoteIntroProps> = ({
  keyword = 'direct mail',
  changeStep,
  isSubmitting,
  toggleIsOpen,
  isOpen,
  setSubmitting,
  breakpoints,
  ...props
}) => {
  const isDesktop = breakpoints.includes('l')
  function handleClick(e: React.MouseEvent) {
    e?.preventDefault()
    if (isOpen) {
      changeStep('1')
    } else if (!isDesktop) {
      toggleIsOpen()
    } else {
      toggleIsOpen()
      changeStep('1')
    }
  }

  return (
    <>
      <FormImage layout isOpen={isDesktop || isOpen} as={motion.div}>
        <MailIllustration layout as={motion.svg} css={{ height: '100%' }} />
      </FormImage>
      <Content as={motion.div} layout isOpen={isDesktop || isOpen}>
        {/* <motion.div layout animate={isDesktop || isOpen ? 'open' : 'closed'}> */}
        <motion.div layout>
          <Container
            as={motion.div}
            variants={contentContainerVariants}
            css={{ maxWidth: '32rem', pt: '$6', '@s': { pt: '$7' } }}
            initial="closed"
            animate="open"
          >
            <Heading2
              as={motion.h2}
              alignCenter
              color="primaryGradient"
              css={{ mt: '0' }}
              variants={contentChildrenVariants}
            >
              Get a {keyword} quote online
            </Heading2>
            <Spacer size="small" />
            <Paragraph
              as={motion.p}
              alignCenter
              size="m"
              variants={contentChildrenVariants}
            >
              You can expect to receive a quote on the same day so that your job
              can start asap.
            </Paragraph>
            {!!breakpoints.length && (
              <Paragraph
                as={motion.p}
                alignCenter
                size="m"
                variants={contentChildrenVariants}
              >
                We’ll contact you to clarify any important details that help us
                plan the right approach and best price.
              </Paragraph>
            )}
          </Container>
        </motion.div>
      </Content>

      <Container css={{ maxWidth: '32rem', zIndex: 1, flex: '0 0' }}>
        <Box as={motion.div} layout>
          <FormStepControls
            isOpen={!isDesktop && isOpen}
            isSubmitting={isSubmitting}
            buttonLabel={
              !isDesktop && isOpen ? 'Continue your Quote' : 'Start your quote'
            }
            buttonOnClick={handleClick}
          />
        </Box>
      </Container>
      {isOpen && (
        <Button
          initial="hide"
          animate="show"
          size="small"
          rightIcon={<Close css={{ color: '$N80' }} />}
          style="naked"
          css={{ position: 'absolute' }}
          onClick={(e) => {
            e?.preventDefault()
            toggleIsOpen()
          }}
          //@ts-expect-error Stitches as prop doesn't expect motion component
          as={motion.button}
        >
          Close
        </Button>
      )}
    </>
  )
}

//TODO - skeleton screen
export const BlankSkeletonScreen = () => (
  <>
    <FormImage isOpen={true}>
      <MailIllustration css={{ height: '100%' }} />
    </FormImage>
    <Content isOpen={true}>
      <Container
        css={{
          maxWidth: '32rem',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pt: '$4',
          height: '30rem',
        }}
      ></Container>
    </Content>
    <Container css={{ maxWidth: '32rem', zIndex: 1 }}>
      <Box>
        <FormStepControls
          isOpen={true}
          isSubmitting={true}
          buttonLabel=""
          buttonOnClick={(e: React.PointerEvent) => {
            e?.preventDefault()
          }}
        />
      </Box>
    </Container>
  </>
)
