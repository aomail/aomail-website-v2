import { css, styled } from '@theme/stitches.config'

export const Box = styled('div', {
  variants: {
    rel: {
      true: { position: 'relative' },
    },
    fillHeight: {
      true: { height: '100%' },
    },
    alignCenter: {
      true: { mx: 'auto', alignSelf: 'center' },
    },
  },
})
export const Flex = styled(Box, {
  display: 'flex',
  variants: {
    column: { true: { flexDirection: 'column' } },
    wrap: { true: { flexWrap: 'wrap' } },
  },
})
export const Grid = styled(Box, { display: 'grid' })

export const Column = styled(Box, {
  position: 'relative',
  px: 'calc($space$3 / 2)',
  '@m': { px: 'calc($space$4 / 2)' },
  '@l': { px: 'calc($space$4 / 2)' },
  '@xl': { px: 'calc($space$5 / 2)' },
})

export const ColumnWrapper = styled(Flex, {
  position: 'relative',
  mx: 'calc(-$space$3 / 2)',
  '@m': { mx: 'calc(-$space$4 / 2)' },
  '@l': { mx: 'calc(-$space$4 / 2)' },
  '@xl': { mx: 'calc(-$space$5 / 2)' },
})

export const TextHolder = styled('div', {
  position: 'relative',
  variants: {
    padX: {
      default: {
        px: '$2',
        '@m': { px: '$3' },
        '@l': { px: '$4' },
      },
      large: {
        px: '$3',
        '@m': { px: '$4' },
        '@l': { px: '$5' },
      },
      xLarge: {
        px: '$3',
        '@s': { px: '$4' },
        '@m': { px: '$5' },
        '@l': { px: '$6' },
      },
    },
    padY: {
      default: {
        py: '$2',
        '@m': { py: '$3' },
        '@l': { py: '$4' },
      },
      large: {
        py: '$3',
        '@m': { py: '$4' },
        '@l': { py: '$5' },
      },
      xLarge: {
        py: '$3',
        '@s': { py: '$4' },
        '@m': { py: '$5' },
        '@l': { py: '$6' },
      },
    },
  },
  defaultVariants: {
    padX: 'default',
  },
})

export const TextHolderClass = css({
  p: '$2',
  '@m': { p: '$3' },
  '@l': { p: '$4' },
})

export const BreakoutTextHolder = styled('div', {
  mx: '-$2',
  '@m': { mx: '-$3' },
  '@l': { mx: '-$4' },
})

export const HoverGroup = styled(Box, {
  cursor: 'pointer',
})
export const HoverGroupFlex = styled(Flex, {
  cursor: 'pointer',
})
