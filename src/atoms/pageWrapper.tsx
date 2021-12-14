import type * as Stitches from '@stitches/react'
import { styled } from '@theme/stitches.config'

export type PageWrapperVariants = Stitches.VariantProps<typeof PageWrapper>

export const PageWrapper = styled('main', {
  minHeight: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'stretch',
  alignItems: 'stretch',
  boxSizing: 'content-box',
  position: 'relative',
  isolation: 'isolate',
})
