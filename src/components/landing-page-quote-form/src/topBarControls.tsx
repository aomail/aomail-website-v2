import { Container, ArrowBack, ProgressBar, styled, CSS, Close } from '@theme'
import router from 'next/router'
import { Button } from '@components/button'
import { m as motion, MotionValue, Variants } from 'framer-motion'
import React from 'react'

export interface TopBarControlsProps
  extends React.ComponentProps<typeof Wrapper> {
  progress: MotionValue<number>
  success: boolean
  toggleIsOpen: () => void
  css?: CSS
}

const variants: Variants = {
  hide: {
    opacity: 0,
    pointerEvents: 'none',
  },
  show: {
    opacity: 1,
    pointerEvents: 'auto',
  },
}

const Wrapper = styled(Container, {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  left: '0',
  top: '0',
  padding: 'inherit',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '@m': {
    py: '$4',
  },
})

const BottomBorder = styled('span', {
  position: 'absolute',
  bottom: '0',
  left: '0',

  width: '100%',
  height: '1px',
  background: '$dotted-horizontal',
  backgroundSize: '16px 1px',
})

export const TopBarControls: React.FC<TopBarControlsProps> = ({
  progress,
  toggleIsOpen,
  success,
  ...props
}) => {
  return (
    //@ts-expect-error as prop issues plus css
    <Wrapper as={motion.div} {...props}>
      {!success && (
        <>
          <Button
            initial="hide"
            animate="show"
            exit="hide"
            size="small"
            leftIcon={<ArrowBack css={{ color: '$N80' }} as={motion.svg} />}
            style="naked"
            onClick={(e: React.MouseEvent) => {
              e?.preventDefault()
              router.back()
            }}
            //@ts-expect-error stitches doesn't allow motion component type
            as={motion.button}
            variants={variants}
          >
            Back
          </Button>
          <BottomBorder />
        </>
      )}
      {!success && (
        <ProgressBar
          //@ts-expect-error using as prop to animate component
          animate="show"
          exit="hide"
          as={motion.div}
          progress={progress}
          css={{ flex: '1 1' }}
          variants={variants}
        />
      )}
      <Button
        initial="hide"
        animate="show"
        exit="hide"
        size="small"
        rightIcon={
          <Close css={{ color: success ? '$LA70' : '$N80' }} as={motion.svg} />
        }
        style="naked"
        color={success ? 'light' : undefined}
        onClick={(e) => {
          e?.preventDefault()
          toggleIsOpen()
        }}
        //@ts-expect-error stitches as prop doesn't handle motion component type
        as={motion.button}
        variants={variants}
      >
        Close
      </Button>
    </Wrapper>
  )
}
