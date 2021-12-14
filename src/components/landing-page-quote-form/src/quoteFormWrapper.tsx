import { styled } from '@theme'
import type { BreakpointsAry } from '@lib/react/breakpoints'
import { m as motion, useAnimation } from 'framer-motion'
import * as React from 'react'

export interface FormWrapperProps {
  isOpen: boolean
  breakpoints: BreakpointsAry
  isSubmitting: boolean
  setSubmitting: (a: boolean) => void
  toggleIsOpen: () => void
  changeStep: (a: string) => void
  formRef?: HTMLFormElement
  children?: React.ReactNode
}

const FormBackground = styled('div', {
  position: 'fixed',
  display: 'block',
  zIndex: '$3',
  left: '0',
  bottom: '0',
  right: '0',
  minHeight: '$7',
  transform: 'translateY(100%)',
  transition: 'transform 0.5s ease-out',
  willChange: 'transform',
  variants: { isOpen: { true: { top: '0' } } },
  '@l': {
    transform: 'translateY(0%)',
    animation: 'none',
    minHeight: '42rem',
    height: '100%',
    maxHeight: '100%',
    position: 'relative',
    top: '$3',
    ml: '$3',
    mr: '$3',
    mt: '$3',
    width: 'calc(50% - 48px)',
  },
  '@xl': {
    width: 'calc(100% / 12 * 5 - 64px)',
  },
})

const variants = {
  visible: {
    transform: 'translateY(0%)',
  },
}

export function FormWrapper({
  isOpen,
  children,
  ...props
}: FormWrapperProps): JSX.Element {
  const wrapperControls = useAnimation()

  React.useEffect(() => {
    wrapperControls.start('visible', { delay: 2 })
  }, [])

  return (
    <FormBackground
      as={motion.div}
      isOpen={isOpen}
      variants={variants}
      animate={wrapperControls}
      {...props}
    >
      {children}
    </FormBackground>
  )
}
