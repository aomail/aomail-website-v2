import React, { useEffect } from 'react'
import {
  styled,
  Container,
  Card,
  TextHolder,
  ColumnWrapper,
  Column,
} from '@theme'
import { m as motion, useAnimation, usePresence, Variants } from 'framer-motion'

export interface ModalProps extends React.ComponentProps<typeof TextHolder> {
  layoutId?: string
  toggle?: () => void
  showCloseButton?: boolean
  mobileWidth?: 'full'
  width?: React.ComponentProps<typeof ModalWrapper>['width']
  height?: React.ComponentProps<typeof ModalWrapper>['height']
  controls?: React.ReactNode
  main?: React.ReactNode
  hideControlsBorder?: boolean
}

const ScreenWrapper = styled('div', {
  position: 'fixed',
  tlbr: '0',
  zIndex: '$5',
  overflow: 'auto',
})

const BackDrop = styled(motion.div, {
  zIndex: '$4',
  position: 'fixed',
  tlbr: '0',
  background: '$DA50',
  backdropFilter: 'blur(16px)',
  moz: {
    background: '$DA80',
  },
})

const ModalWrapper = styled('div', {
  position: 'relative',
  isolation: 'isolate',
  my: '$6',
  mx: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  variants: {
    height: {
      contain: {
        height: '480px',
        '@s': { height: '640px' },
        '@m': { height: '848px' },
        '@l': {
          height: '640px',
        },
        '@xl': { height: '768px' },
      },
      fitContent: {
        height: 'auto',
      },
    },

    width: {
      s: {
        width: '100%',
        '@m': { width: '83.33%' },
        '@l': { width: '66.67%' },
        '@xl': { width: '50%' },
      },
      m: {
        width: '100%',
        '@l': { width: '83.33%' },
        '@xl': { width: '66.67%' },
      },
      l: { width: '100%', '@xl': { width: '83.33%' } },
      full: { width: '100%' },
    },

    mobileWidth: {
      full: {
        '@m_max': {
          height: 'auto',
          minHeight: '100vh',
          minWidth: '100vw',
          my: '0',
          mx: '50%',
          left: '-50vw',
          right: '-50vw',
          p: '0',
        },
      },
    },
  },
  defaultVariants: {
    width: 'full',
    height: 'fitContent',
  },
})

const backdropMotionVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

export const ModalBackground = styled(Card, {
  position: 'absolute',
  zIndex: -1,
  p: '0',
  tlbr: '0',
  variants: {
    mobileWidth: {
      full: {
        '@m_max': {
          m: 0,
          br: '0',
        },
      },
      contain: {},
    },
  },
  defaultVariants: {
    mobileWidth: 'contain',
  },
})

const modalMotionVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 48 },
}

export const ModalBody: React.FC<ModalProps> = ({
  layoutId,
  children,
  toggle,
  mobileWidth,
  width,
  height,
  ...props
}) => {
  const backDropControls = useAnimation()
  const closeButtonControls = useAnimation()

  const [isPresent, safeToRemove] = usePresence()

  async function modalAnimateOut() {
    await backDropControls.start('hidden')
    safeToRemove()
  }

  async function handleUnmount() {
    setTimeout(modalAnimateOut, 50)
  }

  function handleMount() {
    backDropControls.start('visible')
    closeButtonControls.start('visible')
  }

  useEffect(() => {
    handleMount()
  }, [])
  useEffect(() => {
    if (!isPresent) {
      handleUnmount()
    }
  }, [isPresent])

  const [bgAnimations, wpAnimations] = layoutId
    ? [{ layoutId }, {}]
    : [
        {
          variants: modalMotionVariants,
          initial: 'hidden',
          animate: backDropControls,
        },
        {
          variants: modalMotionVariants,
          initial: 'hidden',
          animate: backDropControls,
        },
      ]

  function stopPropagationOnClick(e: React.MouseEvent) {
    e.stopPropagation()
  }

  async function handleToggle() {
    await closeButtonControls.start('clicked')
    toggle()
  }

  function handleClick() {
    handleToggle()
  }

  return (
    <>
      <BackDrop
        initial="hidden"
        animate={backDropControls}
        variants={backdropMotionVariants}
      />
      <ScreenWrapper onClick={handleClick}>
        <Container>
          <ColumnWrapper css={{ display: 'block' }}>
            <Column>
              {/* @ts-expect-error propTypes of component do not adjust for as prop (motion component) */}
              <ModalWrapper
                as={motion.div}
                mobileWidth={mobileWidth}
                onClick={stopPropagationOnClick}
                width={width}
                height={height}
                {...wpAnimations}
                {...props}
              >
                <ModalBackground
                  as={motion.div}
                  layoutId={layoutId}
                  layout
                  {...bgAnimations}
                  mobileWidth={mobileWidth}
                />
                {children}
              </ModalWrapper>
            </Column>
          </ColumnWrapper>
        </Container>
      </ScreenWrapper>
    </>
  )
}
