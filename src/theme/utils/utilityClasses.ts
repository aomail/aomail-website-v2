import { css } from '@theme/stitches.config'

export const visuallyHidden = css({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
})

export const visuallyHiddenUnlessActive = css({
  '$:not(:focus):not(:active)': {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },
})

export const fullHeight = css({
  height: '100%',
  flex: '1 1 100%',
})

export const fullWidth = css({
  position: 'relative',
  width: '100vw',
  mx: '-50vw',
  left: '50%',
  right: '50%',
})
