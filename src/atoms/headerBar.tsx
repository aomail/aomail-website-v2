import { styled } from '@theme/stitches.config'
import { ContentWrapper } from './contentWrapper'

export const HeaderBar = styled(ContentWrapper, {
  position: 'relative',
  width: '100%',
  flex: '0',
  py: '$3',
  variants: {
    background: {
      solid: {
        backgroundColor: '$white',
        borderBottomWidth: '$thin',
        borderBottomColor: '$N30',
        borderBottomStyle: 'solid',
      },
      naked: {
        backgroundColor: '$transparent',
      },
      transluscent: {
        backgroundColor: '$LA40',
      },
    },
  },
  defaultVariants: { background: 'solid' },
})
