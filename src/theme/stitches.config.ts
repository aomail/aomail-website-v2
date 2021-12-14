import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { breakpoints as media } from './breakpoints'
import { theme } from './tokens'
import utils from './utils/utils'

export const stitchesConfig = createStitches({
  prefix: '',
  theme,
  media,
  utils,
})

export { theme }
export type CSS = Stitches.CSS<typeof stitchesConfig>
export const { css, styled, keyframes, getCssText, globalCss } = stitchesConfig
export type ThemeVariants<T> = Stitches.VariantProps<T>
