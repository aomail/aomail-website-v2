import { styled } from '@theme/stitches.config'

const titleSizes = {
  1: {
    fontSize: '$t1m',
    lineHeight: '$t1m',
    marginBottom: '-13px',
    letterSpacing: '$xcosy',
    '@m': {
      fontSize: '$t1t',
      lineHeight: '$t1t',
      marginBottom: '-14px',
    },
    '@l': {
      fontSize: '$t1d',
      lineHeight: '$t1d',
      marginBottom: '-17px',
    },
  },
  2: {
    fontSize: '$t2m',
    lineHeight: '$t2m',
    marginBottom: '-10px',
    '@m': {
      fontSize: '$t2t',
      lineHeight: '$t2t',
      marginBottom: '-11px',
      letterSpacing: '$xcosy',
    },
    '@l': {
      fontSize: '$t2d',
      lineHeight: '$t2d',
      marginBottom: '-15px',
    },
  },
  3: {
    fontSize: '$t3m',
    lineHeight: '$t3m',
    marginBottom: '-9px',
    letterSpacing: '$cosy',
    '@m': {
      fontSize: '$t3t',
      lineHeight: '$t3t',
      marginBottom: '-10px',
    },
    '@l': {
      fontSize: '$t3d',
      lineHeight: '$t3d',
      marginBottom: '-12px',
    },
  },
}

export const Title = styled('h1', {
  color: '$DBA100',
  fontWeight: '$semibold',
  fontFamily: '$heading',
  marginTop: '$4',
  '@m': {
    marginTop: '$5',
  },
  '@l': {
    marginTop: '$6',
  },
  variants: {
    level: { ...titleSizes },
    color: {
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
    alignLeft: { true: { textAlign: 'left' } },
    alignRight: { true: { textAlign: 'right' } },
    alignCenter: { true: { textAlign: 'center' } },
  },
  defaultVariants: {
    level: '1',
  },
})
