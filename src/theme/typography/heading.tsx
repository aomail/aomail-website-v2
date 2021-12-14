import { styled } from '@theme/stitches.config'

const headingSizes = {
  1: {
    fontSize: '$h1m',
    lineHeight: '$h1m',
    marginBottom: '-9px',
    letterSpacing: '$xcosy',
    color: '$DBA100',
    '@m': {
      fontSize: '$h1t',
      lineHeight: '$h1t',
      marginBottom: '-7px',
    },
    '@l': {
      fontSize: '$h1d',
      lineHeight: '$h1d',
      marginBottom: '-7px',
    },
  },
  2: {
    fontSize: '$h2m',
    lineHeight: '$h2m',
    marginBottom: '-8px',
    color: '$DBA90',
    '@m': {
      fontSize: '$h2t',
      lineHeight: '$h2t',
      marginBottom: '-6px',
      letterSpacing: '$xcosy',
    },
    '@l': {
      fontSize: '$h2d',
      lineHeight: '$h2d',
      marginBottom: '-5px',
    },
  },
  3: {
    fontSize: '$h3m',
    lineHeight: '$h3m',
    marginBottom: '-8px',
    color: '$DBA85',
    '@m': {
      fontSize: '$h3t',
      lineHeight: '$h3t',
      marginBottom: '-7px',
    },
    '@l': {
      fontSize: '$h3d',
      lineHeight: '$h3d',
      marginBottom: '-6px',
    },
  },
  4: {
    fontSize: '$h4m',
    lineHeight: '$h4m',
    marginBottom: '-7px',
    color: '$DBA80',
    '@m': {
      fontSize: '$h4t',
      lineHeight: '$h4t',
      marginBottom: '-6px',
    },
    '@l': {
      fontSize: '$h4d',
      lineHeight: '$h4d',
      marginBottom: '-5px',
    },
  },
  5: {
    fontSize: '$h5m',
    lineHeight: '$h5m',
    marginBottom: '-8px',
    fontWeight: '$semibold',
    color: '$DBA80',
    '@m': {
      fontSize: '$h5t',
      lineHeight: '$h5t',
      marginBottom: '-5px',
    },
    '@l': {
      fontSize: '$h5d',
      lineHeight: '$h5d',
      marginBottom: '-5px',
    },
  },
  6: {
    fontSize: '$h6m',
    lineHeight: '$h6m',
    marginBottom: '-6px',
    fontWeight: '$semibold',
    color: '$DBA80',
    '@m': {
      fontSize: '$h6t',
      lineHeight: '$h6t',
      marginBottom: '-5px',
    },
    '@l': {
      fontSize: '$h6d',
      lineHeight: '$h6d',
      marginBottom: '-4px',
    },
  },
}

export const Heading = styled('h1', {
  fontWeight: '$bold',
  mt: '$4',
  overflow: 'visible',
  letterSpacing: '$cosy',
  variants: {
    level: { ...headingSizes },
    color: {
      primary: {
        color: '$DBA100',
      },
      light: {
        color: '$LA100',
      },
      primaryGradient: {
        textGradient:
          'linear-gradient(272.88deg, #0072CE 14.59%, #00237D 101%)',
      },
      lightGradient: {
        textGradient:
          'linear-gradient(272.88deg, #B6DDF6 14.59%, #0072CE 101%)',
      },
      orangeGradient: {
        textGradient: 'linear-gradient(90deg, #EE3131 0.03%, #F89E33 100.02%)',
      },
    },
    alignLeft: { true: { textAlign: 'left' }, false: { textAlign: 'auto' } },
    alignRight: { true: { textAlign: 'right' }, false: { textAlign: 'auto' } },
    alignCenter: {
      true: { textAlign: 'center' },
      false: { textAlign: 'auto' },
    },
    marginTop: {
      none: { mt: '0' },
      default: {
        '@m': {
          mt: '$5',
        },
        '@l': {
          mt: '$6',
        },
      },
      small: {
        mt: '$2',
        '@m': {
          mt: '$3',
        },
        '@l': {
          mt: '$4',
        },
      },
    },
  },
  compoundVariants: [
    { level: '1', color: 'light', css: { color: '$LA100' } },
    { level: '2', color: 'light', css: { color: '$LA90' } },
    { level: '3', color: 'light', css: { color: '$LA85' } },
    { level: '4', color: 'light', css: { color: '$LA80' } },
    { level: '5', color: 'light', css: { color: '$LA80' } },
    { level: '6', color: 'light', css: { color: '$LA80' } },
  ],
  defaultVariants: {
    marginTop: 'normal',
    alignRight: 'false',
    alignCenter: 'false',
  },
})

export const Heading1 = styled('h1', Heading, { defaultVariants: { level: 1 } })
export const Heading2 = styled('h2', Heading, { defaultVariants: { level: 2 } })
export const Heading3 = styled('h3', Heading, { defaultVariants: { level: 3 } })
export const Heading4 = styled('h4', Heading, { defaultVariants: { level: 4 } })
export const Heading5 = styled('h5', Heading, { defaultVariants: { level: 5 } })
export const Heading6 = styled('h6', Heading, { defaultVariants: { level: 6 } })
