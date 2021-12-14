import { styled } from '@theme/stitches.config'

export const Spacer = styled('span', {
  display: 'block',
  flex: '0 0 $space$3',
  height: '$space$3',
  minHeight: '$space$3',
  variants: {
    size: {
      none: { display: 'none' },
      xsmall: {
        flex: '0 0 $space$1',
        height: '$space$1',
        minHeight: '$space$1',
      },
      small: {
        flex: '0 0 $space$2',
        height: '$space$2',
        minHeight: '$space$2',
      },
      large: {
        flex: '0 0 $space$4',
        height: '$space$4',
        minHeight: '$space$4',
      },
      xlarge: {
        flex: '0 0 $space$5',
        height: '$space$5',
        minHeight: '$space$5',
      },
    },
  },
})
