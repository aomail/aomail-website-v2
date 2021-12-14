import { styled } from '@theme/stitches.config'
import { ListCardWrapper } from '@atoms/listCardWrapper'

export const Border = styled('span', {
  position: 'absolute',
  variants: {
    position: {
      bottom: {
        background: '$dotted-horizontal',
        height: '1px',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundSize: '16px 1px',
      },
      top: {
        background: '$dotted-horizontal',
        height: '1px',
        top: '0',
        bottom: 'auto',
        left: '0',
        width: '100%',
        backgroundSize: '16px 1px',
      },
      left: {
        background: '$dotted-vertical',
        width: '1px',
        top: '0',
        left: '0',
        height: '100%',
        backgroundSize: '1px 16px',
      },
      right: {
        background: '$dotted-vertical',
        width: '1px',
        top: '0',
        right: '0',
        left: 'auto',
        height: '100%',
        backgroundSize: '1px 16px',
      },
    },
  },
  defaultVariants: { position: 'bottom' },
  [`${ListCardWrapper}:last-child > &`]: {
    display: 'none',
  },
})
