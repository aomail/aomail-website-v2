import { m as motion } from 'framer-motion'
import { styled, Container } from '@theme'
import type { BreakpointsAry } from '@lib/react/breakpoints'

interface StepWrapperProps {
  isSubmitting: boolean
  isOpen: boolean
  breakpoints: BreakpointsAry
  main: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  success: boolean
}

export const Background = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-end',
  position: 'relative',
  background: '$white',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  overflow: 'hidden',
  btlr: '$4',
  btrr: '$4',
  boxShadow: '$footer',
  variants: {
    isOpen: {
      true: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        btlr: '0',
        btrr: '0',
        '@l': { br: '$5', height: 'auto' },
      },
      false: { height: 'auto' },
    },
  },
  '@l': {
    br: '$5',
    boxShadow: '$3',
  },
})

const Content = styled('div', {
  flex: '1 1',
  alignSelf: 'center',
  mt: '$5',
  '@m': { mt: '$6' },
  variants: {
    isOpen: {
      true: {
        position: 'static',
      },
    },
  },
  '@l': {
    position: 'static',
    top: '$3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
  },
})

const SuccessBackground = styled('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  background: '$green',
})

export function StepWrapper({
  isOpen,
  main,
  header,
  footer,
  success,
}: StepWrapperProps): JSX.Element {
  return (
    <>
      {success && (
        <SuccessBackground
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      <Content as={motion.div} layout isOpen={isOpen}>
        {main}
      </Content>
      {footer && (
        <Container
          as={motion.div}
          layout
          css={{ maxWidth: '32rem', flex: '0 0' }}
        >
          {footer}
        </Container>
      )}
      {!success && header}
    </>
  )
}
