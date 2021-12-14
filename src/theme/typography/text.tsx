import { ResetButton } from '@atoms/resetButton'
import { styled } from '@theme/stitches.config'

export const Text = styled('span', {
  color: '$DA75',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  m: '0',
  variants: {
    size: {
      l: {
        fontSize: '$p2m',
        lineHeight: '$p2d',
        '@m': {
          fontSize: '$p2t',
          lineHeight: '$p2d',
        },
        '@l': {
          fontSize: '$p2d',
          lineHeight: '$p2d',
        },
      },
      m: {
        fontSize: '$p3m',
        lineHeight: '$p3d',
        '@m': {
          fontSize: '$p3t',
          lineHeight: '$p3d',
        },
        '@l': {
          fontSize: '$p3d',
          lineHeight: '$p3d',
        },
      },
      s: {
        fontSize: '$p4m',
        lineHeight: '$p5d',
        '@m': {
          fontSize: '$p4t',
          lineHeight: '$p5d',
        },
        '@l': {
          fontSize: '$p4d',
          lineHeight: '$p5d',
        },
      },
      xs: {
        fontSize: '$p5m',
        lineHeight: '$p5d',
        '@m': {
          fontSize: '$p5t',
          lineHeight: '$p5d',
        },
        '@l': {
          fontSize: '$p5d',
          lineHeight: '$p5d',
        },
      },
    },
    color: {
      light: {
        color: '$LA75',
      },
      primary: {
        color: '$DBA75',
      },
    },
    lead: {
      true: {
        fontWeight: '$semibold',
      },
    },
    alignLeft: { true: { textAlign: 'left' } },
    alignRight: { true: { textAlign: 'right' } },
    alignCenter: { true: { textAlign: 'center' } },
    bold: { true: { fontWeight: 'bold' } },
    semiBold: { true: { fontWeight: '600' } },
    italic: { true: { textStyle: 'italic' } },
    marginTop: {
      none: { mt: '$0' },
      small: { mt: '$2', '@ml': { mt: '$3' } },
    },
  },
  defaultVariants: {
    size: 'm',
  },
  'li &': {
    m: '0',
  },
  [`button &, ${ResetButton} &, label &`]: {
    m: '0 !important',
    p: '0 !important',
    lineHeight: '1 !important',
    color: 'inherit',
  },
  'label&, input&': {
    m: '0',
  },
})

export const Paragraph = styled('p', {
  color: '$DA75',
  fontWeight: '$regular',
  fontFamily: '$paragraph',
  mt: '$3',
  '@m': { mt: '$4' },
  '@ml': { mt: '$5' },
  variants: {
    size: {
      l: {
        fontSize: '$p2m',
        lineHeight: '$p2m',
        marginBottom: '-9px',
        '@m': {
          fontSize: '$p2t',
          lineHeight: '$p2t',
          marginBottom: '-8px',
        },
        '@l': {
          fontSize: '$p2d',
          lineHeight: '$p2d',
          marginBottom: '-9px',
        },
      },
      m: {
        fontSize: '$p3m',
        lineHeight: '$p3m',
        marginBottom: '-8px',
        '@m': {
          fontSize: '$p3t',
          lineHeight: '$p3t',
          marginBottom: '-7px',
        },
        '@l': {
          fontSize: '$p3d',
          lineHeight: '$p3d',
          marginBottom: '-8px',
        },
      },
      s: {
        fontSize: '$p4m',
        lineHeight: '$p4m',
        marginBottom: '-6px',
        '@m': {
          fontSize: '$p4t',
          lineHeight: '$p4t',
          marginBottom: '-6px',
        },
        '@l': {
          fontSize: '$p4d',
          lineHeight: '$p4d',
          marginBottom: '-7px',
        },
      },
      xs: {
        fontSize: '$p5m',
        lineHeight: '$p5m',
        marginBottom: '-5px',
        '@m': {
          fontSize: '$p5t',
          lineHeight: '$p5t',
          marginBottom: '-5px',
        },
        '@l': {
          fontSize: '$p5d',
          lineHeight: '$p5d',
          marginBottom: '-6px',
        },
      },
    },
    color: {
      light: {
        color: '$LA75',
      },
      primary: {
        color: '$DBA75',
      },
    },
    lead: {
      true: {
        fontWeight: '$semibold',
      },
    },
    alignLeft: { true: { textAlign: 'left' } },
    alignRight: { true: { textAlign: 'right' } },
    alignCenter: { true: { textAlign: 'center' } },
    bold: { true: { fontWeight: 'bold' } },
    semiBold: { true: { fontWeight: '600' } },
    italic: { true: { textStyle: 'italic' } },
    marginTop: {
      none: { mt: '$0' },
      small: { mt: '$2', '@ml': { mt: '$3' } },
    },
  },
  compoundVariants: [
    {
      size: 'l',
      lead: 'true',
      css: {
        fontSize: '$p1m',
        lineHeight: '$p1m',
        marginBottom: '-8px',
        '@m': {
          fontSize: '$p1t',
          lineHeight: '$p1t',
          marginBottom: '-9px',
        },
        '@l': {
          fontSize: '$p1d',
          lineHeight: '$p1d',
          marginBottom: '-10px',
        },
      },
    },
    {
      size: 'm',
      lead: 'true',
      css: {
        fontSize: '$p2m',
        lineHeight: '$p2m',
        marginBottom: '-9px',
        '@m': {
          fontSize: '$p2t',
          lineHeight: '$p2t',
          marginBottom: '-8px',
        },
        '@l': {
          fontSize: '$p2d',
          lineHeight: '$p2d',
          marginBottom: '-9px',
        },
      },
    },
    {
      size: 's',
      lead: 'true',
      css: {
        fontSize: '$p3m',
        lineHeight: '$p3m',
        marginBottom: '-8px',
        '@m': {
          fontSize: '$p2t',
          lineHeight: '$p2t',
          marginBottom: '-7px',
        },
        '@l': {
          fontSize: '$p3d',
          lineHeight: '$p3d',
          marginBottom: '-8px',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'm',
  },
  'li &': {
    m: '0',
  },
  [`button &, ${ResetButton} &, label &`]: {
    m: '0 !important',
    p: '0 !important',
    color: 'inherit',
  },
  'label&, input&': {
    m: '0',
  },
})
