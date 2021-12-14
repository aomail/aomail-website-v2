import { styled } from '@theme/stitches.config'
import type * as Stitches from '@stitches/react'

export type ContainerVariants = Stitches.VariantProps<typeof Container>

export const Container = styled('div', {
  width: '100%',
  position: 'relative',
  mx: 'auto',
  px: '$3',
  '@m': {
    px: '$4',
    maxWidth: '60rem',
  },
  '@l': {
    maxWidth: '96rem',
    px: '$5',
  },
})
