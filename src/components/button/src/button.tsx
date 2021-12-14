import React, { cloneElement, forwardRef, isValidElement } from 'react'
import { styled, theme, keyframes } from '@theme/stitches.config'
import { visuallyHidden } from '@theme/utils/utilityClasses'
import { __DEV__ } from '@utils/src'
import { ResetButton } from '@atoms/resetButton'
import { Text } from '@theme/typography'

interface ButtonProps extends React.ComponentProps<typeof ButtonBg> {
  isLoading?: boolean
  offset?: 'left' | 'right'
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  iconSpacing?: keyof typeof theme['space']
  as?: string
  href?: string
  children?: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
  clickEvent?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const NakedButton = styled(ResetButton, {
  backgroundColor: 'transparent',
  border: 'none',
  color: '$DBA90',
  '&:hover': {
    backgroundColor: '$BA10',
    color: '$DBA100',
  },
  px: '$2',
  py: '$2',
  br: '$3',
  fontSize: '$p3m',
  '@m': { fontSize: '$p3t', px: '$2', py: '$3', br: '$3' },
  '@l': { fontSize: '$p3d', px: '$3', py: '$3', br: '$4' },
})

const SpinnerKeyframes = keyframes({
  '0%': {
    transform: 'translate3d(-50%, -50%, 0) rotate(0deg)',
  },
  '100%': {
    transform: 'translate3d(-50%, -50%, 0) rotate(360deg)',
  },
})

const Spinner = styled('div', {
  height: '100%',
  width: '100%',
  position: 'relative',
  '&::before': {
    willChange: 'transform',
    border: 'solid 4px $LA20',
    borderBottomColor: '$white',
    borderRadius: '50%',
    content: '""',
    height: '1.5em',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    width: '1.5em',
    animation: `${SpinnerKeyframes} 0.5s`,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
})

const ButtonBg = styled(ResetButton, {
  display: 'inline-flex',
  position: 'relative',
  color: '$white',
  border: 'none',
  borderRadius: '$2',
  px: '$2',
  py: '$3',
  br: '$3',
  fontSize: '$p3m',
  '&:focus:not(:focus-visible)': {
    '&:before': {
      display: 'none',
    },
  },
  '&:focus': {
    '&:before': {
      content: '',
      position: 'absolute',
      tlbr: '-$1',
      br: '$5',
      border: '2px solid $colors$blue',
    },
  },
  '@m': { fontSize: '$p3t', px: '$3', py: '$3', br: '$3' },
  '@l': { fontSize: '$p3d', px: '$4', py: '$3', br: '$4' },
  variants: {
    disabled: { true: { cursor: 'not-allowed', opacity: '50%' } },
    color: {
      primary: {
        backgroundColor: '$blue',
        color: '$white',
        '&:hover': {
          backgroundColor: '$B50',
        },
        '&:active': {
          backgroundColor: '$B60',
        },
      },
      subtle: {
        backgroundColor: '$DA15',
        color: '$DA70',
        '&:hover': {
          backgroundColor: '$DA20',
          color: '$DA90',
        },
      },
      success: {
        backgroundColor: '$green',
        color: '$white',
        '&:hover': {
          backgroundColor: '$G30',
          color: '$white',
        },
      },
      light: {
        backgroundColor: '$N10',
        color: '$BA90',
        '&:hover': {
          backgroundColor: '$white',
          color: '$BA100',
        },
      },
    },
    size: {
      small: {
        fontSize: '$p4m',
        py: '$2',
        '@m': { fontSize: '$p4t', px: '$2', py: '$2', br: '$2' },
        '@l': { fontSize: '$p4d', px: '$2', py: '$2', br: '$2' },
        '&:focus': {
          '&:before': { br: '$3' },
        },
      },
      icon: {
        fontSize: '$p4m',
        px: '$2',
        py: '$2',
        '@m': { fontSize: '$p4t', px: '$2', py: '$2', br: '$2' },
        '@l': { fontSize: '$p4d', px: '$2', py: '$2', br: '$2' },
      },
      cta: {
        height: '$5',
        boxShadow: '$1',
        '&:hover': {
          boxShadow: '$2',
        },
        '@m': {
          height: '$6',
        },
      },
    },
    fullWidth: {
      true: {
        width: '$fill',
        alignSelf: 'auto',
      },
      false: {
        minWidth: '$5',
      },
    },
    style: {
      solid: {},
      naked: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '$DBA90',
        '&:hover': {
          backgroundColor: '$BA10',
          color: '$DBA100',
        },
      },
    },
    bgHover: { none: {} },
    offset: {
      center: {},
      left: {
        ml: '-$2',
        '@m': { ml: '-$3' },
        '@l': { ml: '-$4' },
      },
      right: {
        mr: '-$2',
        '@m': { mr: '-$3' },
        '@l': { mr: '-$4' },
      },
    },
  },
  compoundVariants: [
    {
      style: 'naked',
      color: 'light',
      css: {
        backgroundColor: 'transparent',
        color: '$LA80',
        '&:hover': {
          backgroundColor: '$LA10',
          color: '$LA100',
        },
      },
    },
    {
      style: 'naked',
      color: 'dark',
      css: {
        backgroundColor: 'transparent',
        color: '$DA80',
        '&:hover': {
          backgroundColor: '$DA10',
          color: '$DA100',
        },
      },
    },
    {
      style: 'naked',
      color: 'primary',
      css: {
        backgroundColor: 'transparent',
        color: '$DBA80',
        '&:hover': {
          backgroundColor: '$BA10',
          color: '$DBA100',
        },
      },
    },
    {
      style: 'naked',
      bgHover: 'none',
      css: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    {
      offset: 'left',
      size: 'small',
      css: {
        ml: '-$2',
        '@m': { ml: '-$2' },
        '@l': { ml: '-$2' },
      },
    },
    {
      offset: 'right',
      size: 'small',
      css: {
        mr: '-$2',
        '@m': { mr: '-$2' },
        '@l': { mr: '-$2' },
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'regular',
    fullWidth: 'false',
    offset: 'center',
  },
})

const defaultSpacing = (direction: 'left' | 'right') => {
  const key = {
    left: 'marginLeft',
    right: 'marginRight',
  }[direction]
  return {
    [key]: '$2',
    '@m': {
      [key]: '$3',
    },
  }
}
const smallSpacing = (direction: 'left' | 'right') => {
  const key = {
    left: 'marginLeft',
    right: 'marginRight',
  }[direction]
  return {
    [key]: '$2',
  }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      clickEvent,
      onClick,
      ...props
    }: ButtonProps,
    ref
  ) => {
    function handleClick(e?: React.MouseEvent<HTMLButtonElement>) {
      if (clickEvent) {
        window?.dataLayer.push({ event: clickEvent })
      }
      if (onClick) {
        onClick(e)
      }
    }
    const LeftIcn = leftIcon && (
      <ButtonIcon
        css={
          size === 'small'
            ? { ...smallSpacing('right') }
            : { ...defaultSpacing('right') }
        }
      >
        {leftIcon}
      </ButtonIcon>
    )

    const RightIcn = rightIcon && (
      <ButtonIcon
        css={
          size === 'small'
            ? { ...smallSpacing('left') }
            : { ...defaultSpacing('left') }
        }
      >
        {rightIcon}
      </ButtonIcon>
    )

    const _children =
      typeof children === 'string' ? <Text>{children}</Text> : children

    return (
      //@ts-expect-error stitches css compatability error
      <ButtonBg ref={ref} size={size} {...props} onClick={handleClick}>
        {!isLoading && LeftIcn && LeftIcn}
        {!isLoading ? _children : <Spinner />}
        {!isLoading && RightIcn && RightIcn}
      </ButtonBg>
    )
  }
)

if (__DEV__) {
  Button.displayName = 'Button'
}

function ButtonIcon({
  children,
  ...props
}: {
  children: React.ReactNode
}): JSX.Element {
  const Span = styled('span', {})
  const _children = isValidElement(children)
    ? cloneElement(children, {
        'aria-hidden': true,
      })
    : children
  return <Span {...props}>{_children}</Span>
}

export interface IconButtonProps extends ButtonProps {
  icon?: React.ReactNode
  label: string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      size,
      color,
      style,
      icon,
      children,
      label,
      onClick,
      clickEvent,
      ...props
    }: IconButtonProps,
    ref
  ) => {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      if (clickEvent) {
        window?.dataLayer.push({ event: clickEvent })
      }
      if (onClick) {
        onClick(e)
      }
    }
    return (
      //@ts-expect-error stitches css compatability error
      <ButtonBg
        style={style}
        color={color}
        size={size || 'icon'}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <ButtonIcon>{icon || children}</ButtonIcon>
        <span className={visuallyHidden()}>{label}</span>
      </ButtonBg>
    )
  }
)

if (__DEV__) {
  IconButton.displayName = 'IconButton'
}
