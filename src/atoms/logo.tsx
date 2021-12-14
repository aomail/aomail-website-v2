import type * as Stitches from '@stitches/react'
import { styled } from '@theme/stitches.config'

type LogoProps = {
  color?: Stitches.VariantProps<typeof Leaf>['color']
  size?: Stitches.VariantProps<typeof Svg>['size']
}

const Svg = styled('svg', {
  variants: {
    size: {
      small: { height: '$4' },
      regular: { height: '$5' },
      large: { height: '$6' },
    },
  },
})

const Text = styled('path', {
  variants: {
    color: {
      primary: {
        fill: '$darkBlue',
      },
      white: {
        fill: '$white',
      },
      allWhite: {
        fill: '$white',
      },
    },
  },
})

const Leaf = styled('path', {
  variants: {
    color: {
      primary: {
        fill: '$green',
      },
      white: {
        fill: '$green',
      },
      allWhite: {
        fill: '$white',
      },
    },
  },
})

const Orange = styled('path', {
  variants: {
    color: {
      primary: {
        fill: 'url(#logoOrangeGradient)',
      },
      white: {
        fill: 'url(#logoOrangeGradient)',
      },
      allWhite: {
        fill: '$white',
      },
    },
  },
})

export function Logo({
  color = 'primary',
  size = 'regular',
  ...props
}: LogoProps): JSX.Element {
  return (
    <Svg size={size} {...props} viewBox="0 0 84 40">
      <Orange
        color={color}
        d="M60.06 25.26c0 2.64.9 4.84 2.7 6.58a8.52 8.52 0 006.17 2.59c2.53 0 4.66-.9 6.4-2.64a8.83 8.83 0 002.58-6.47c0-2.6-.84-4.73-2.58-6.47a8.5 8.5 0 00-6.34-2.65c-2.53 0-4.6.9-6.35 2.65a8.7 8.7 0 00-2.58 6.41z"
      />
      <Text
        color={color}
        d="M40.86 23.74l5.06 6.13.16-.17c.57-.61 1.07-1.18 1.58-1.74.5-.56.95-1.12 1.4-1.74l2.75 2.87c-.34.5-.79 1.06-1.35 1.68-.56.62-1.23 1.41-1.96 2.25l5.22 6.47h-5.28l-2.8-3.43c-2.59 2.59-5.23 3.88-8.03 3.88-2.47 0-4.6-.78-6.34-2.42a7.96 7.96 0 01-2.53-5.96c0-2.81 1.35-5.17 4.04-7.03l1.85-1.24.12-.11c.05-.06.16-.11.28-.23-1.86-1.97-2.81-3.93-2.81-5.85 0-1.91.62-3.43 1.85-4.67a6.98 6.98 0 014.89-1.8c1.9 0 3.53.57 4.77 1.75a5.68 5.68 0 011.9 4.39c0 1.23-.33 2.3-1.06 3.31-.67 1.07-1.91 2.25-3.7 3.66zM37.5 26.1l-.23.17a18.44 18.44 0 00-3.53 2.93 3.6 3.6 0 00-.96 2.3c0 1.19.45 2.26 1.4 3.21a4.4 4.4 0 003.2 1.4c1.63 0 3.54-1.06 5.67-3.2l-5.55-6.8zm.95-5.4l.34-.28c.61-.45 1.06-.84 1.46-1.18.39-.34.67-.62.84-.84.34-.45.56-1.02.56-1.7a2.3 2.3 0 00-.73-1.8 2.93 2.93 0 00-2.02-.67c-.79 0-1.4.23-1.9.73-.51.45-.8 1.02-.8 1.75 0 .84.34 1.63 1.02 2.47l1.06 1.3c-.05 0 .06.11.17.22zM14.65 10.97h-1.4L0 39.44h4.6l3.15-6.87H19.8l2.98 6.87h4.66l-12.8-28.47zm-5.16 17.6l4.37-9.61 4.16 9.62H9.49zM54.28 25.2c0-3.99 1.46-7.37 4.38-10.23a14.26 14.26 0 0110.44-4.28c3.98 0 7.46 1.46 10.33 4.33a14.22 14.22 0 014.32 10.35c0 4.05-1.46 7.49-4.32 10.35A14.61 14.61 0 0168.93 40a14.3 14.3 0 01-9.77-3.77c-3.3-2.87-4.88-6.53-4.88-11.03zm4.27.06c0 3.1 1.06 5.68 3.14 7.7a10.02 10.02 0 007.18 3.05 9.94 9.94 0 007.47-3.1 10.46 10.46 0 003.03-7.54c0-2.98-1-5.51-3.03-7.54a10.03 10.03 0 00-7.41-3.09 9.9 9.9 0 00-7.4 3.1 10.1 10.1 0 00-2.98 7.42z"
      />
      <Leaf
        color={color}
        d="M71.62 8.04H69V5.4A5.4 5.4 0 0174.37 0h2.64v2.64a5.4 5.4 0 01-5.39 5.4z"
      />
      <defs>
        <linearGradient
          id="logoOrangeGradient"
          x1="60.07"
          y1="25.33"
          x2="77.92"
          y2="25.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#EE3131" />
          <stop offset="1" stopColor="#F89E33" />
        </linearGradient>
      </defs>
    </Svg>
  )
}
