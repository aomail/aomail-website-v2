import { Button } from '@components/button'
import type * as Stitches from '@stitches/react'
import { TextHolder } from '@atoms/layout'
import { Close } from '@theme/icons'
import { styled } from '@theme/stitches.config'
import { m as motion, MotionProps, Variants } from 'framer-motion'

interface ControlLayoutProps {
  leftChild?: JSX.Element
  rightChild?: JSX.Element
  centerChild?: JSX.Element
  padding?: {
    padX: Stitches.VariantProps<typeof TextHolder>['padX']
    padY: Stitches.VariantProps<typeof TextHolder>['padY']
  }
}

const Background = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '& > *': {
    flex: '1 1 auto',
    '@m': {
      px: '$3',
    },
    '@l': {
      px: '$5',
    },
  },
  '& > *:first-child, & > *:last-child': {
    flex: '0 0 auto',
    px: '0',
  },
  width: '100%',
})

const childAnimationVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const childAnimations: MotionProps = {
  initial: 'hidden',
  exit: 'hidden',
  variants: childAnimationVariants,
  animate: 'visible',
}

function createMotionElementsWithControls(children: React.ReactElement[]) {
  return children.map((child, i) => {
    return (
      <motion.span {...childAnimations} key={i}>
        {child}
      </motion.span>
    )
  })
}

export function ControlLayout({
  padding,
  leftChild = <span />,
  rightChild = <span />,
  centerChild = <span />,
  ...props
}: ControlLayoutProps): JSX.Element {
  const _children = [leftChild, centerChild, rightChild]
  const motionChildren = createMotionElementsWithControls(_children)
  return (
    <Background {...padding} {...props}>
      {motionChildren}
    </Background>
  )
}

interface CloseControlsProps {
  handleClose: (e: React.MouseEvent) => void
}

export function CloseControls({
  handleClose,
  ...props
}: CloseControlsProps): JSX.Element {
  return (
    <ControlLayout
      {...props}
      rightChild={
        <Button
          leftIcon={<Close />}
          size="small"
          style="naked"
          onClick={handleClose}
        >
          Close
        </Button>
      }
    />
  )
}
