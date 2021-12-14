import { m as motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import { Button } from './button'
import { styled } from '@theme/stitches.config'
import { Paragraph } from '@theme/typography'
import { __DEV__ } from '@utils/src'

interface MenuButtonProps {
  open: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const pathVariants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 5,
    opacity: 0,
  },
}

const Svg = styled(motion.svg, {
  size: '$2',
})

function Path({ d, ...props }: { d: string }): JSX.Element {
  return (
    <motion.path
      fill="currentColor"
      variants={pathVariants}
      exit="hidden"
      animate="visible"
      d={d}
      {...props}
    />
  )
}

function MenuButtonIcon({ open }: MenuButtonProps): JSX.Element {
  const menu = [
    <Path key="menubar1" d="M3 18h18v-2H3v2z" />,
    <Path key="menubar2" d="M3 13h18v-2H3v2z" />,
    <Path key="menubar3" d="M3 6v2h18V6H3z" />,
  ]
  const close = (
    <Path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z" />
  )

  return (
    <Svg transition={{ staggerChildren: 0.2 }} viewBox="0 0 24 24">
      {open ? close : menu}
    </Svg>
  )
}

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ open, onClick, ...props }: MenuButtonProps, ref) => {
    return (
      <Button
        style="naked"
        css={{ color: '$DBA85' }}
        rightIcon={<MenuButtonIcon open={open} />}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        <Paragraph>{open ? 'Close' : 'Menu'}</Paragraph>
      </Button>
    )
  }
)

if (__DEV__) {
  MenuButton.displayName = 'MenuButton'
}
