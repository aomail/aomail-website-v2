import { styled, ThemeVariants } from '@theme/stitches.config'

export type ContentWrapperVariants = ThemeVariants<typeof ContentWrapper>

export const ContentWrapper = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'stretch',
  position: 'relative',
  flex: '1',
  width: '100%',
})
