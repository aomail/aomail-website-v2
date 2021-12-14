/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type * as Stitches from '@stitches/react'

const gradients = {
  $orange: '90deg, #EE3131 0%, #F89E33 100.02%',
  $lightBlue: '272.88deg, #B6DDF6 14.59%, #0072CE 101%',
  $primaryBlue: '272.88deg, #0072CE 14.59%, #00237D 101%',
  $green: '90deg, #4F4F5E 0%, #84BA73 100.02%',
  $white: '90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.93) 100%',
  $dark: '90deg, rgba(36, 35, 52, 0.93) 0%, rgba(36, 35, 52, 0.02) 100%',
}

export default {
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
    textAlign: value,
  }),

  fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value,
  }),
  fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({
    flexWrap: value,
  }),

  ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
    alignItems: value,
  }),
  ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
    alignContent: value,
  }),
  jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value,
  }),
  as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
    alignSelf: value,
  }),
  fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({
    flexGrow: value,
  }),
  fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
    flexShrink: value,
  }),
  fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
    flexBasis: value,
  }),

  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),

  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  btrr: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderTopLeftRadius: value,
  }),
  size: (value: Stitches.PropertyValue<'height'>) => ({
    height: value,
    width: value,
  }),
  tlbr: (value: Stitches.PropertyValue<'top'>) => {
    return {
      top: value,
      left: value,
      bottom: value,
      right: value,
    }
  },
  lbr: (value: Stitches.PropertyValue<'left'>) => {
    return {
      left: value,
      bottom: value,
      right: value,
    }
  },
  tlr: (value: Stitches.PropertyValue<'bottom'>) => {
    return {
      top: value,
      left: value,
      right: value,
    }
  },
  linearGradient: (value: keyof typeof gradients | string) => {
    return { backgroundImage: `linear-gradient(${gradients[value]})` }
  },
  textGradient: (value: string) => {
    return {
      backgroundImage: value,
      '-moz-background-clip': 'text',
      '-webkit-background-clip': 'text',
      '-moz-text-fill-color': 'transparent',
      '-webkit-text-fill-color': 'transparent',
    }
  },
  flexGap: (value: Stitches.ScaleValue<'space'>) => {
    return {
      '--gap': value,
      display: 'flex',
      flexFlow: 'row wrap',
      margin: 'calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap))',
      width: 'calc(100% + var(--gap))',
      '& > *': {
        margin: 'var(--gap) 0 0 var(--gap)',
      },
    }
  },
  moz: (value: any) => {
    return {
      '@supports (-moz-appearance:none)': value,
    }
  },
}
