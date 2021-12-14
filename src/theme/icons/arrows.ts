import { createIcon } from './createIcon'
import { styled } from '..'

export const ArrowForward = createIcon({
  displayName: 'Forward Arrow',
  d: 'M3 13h14.2l-5.6 5.6L13 20l8-8-8-8-1.4 1.4 5.6 5.6H3v2z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Forward arrow',
  },
})
export const ArrowBack = createIcon({
  displayName: 'Back Arrow',
  d: 'M21 11H6.8l5.6-5.6L11 4l-8 8 8 8 1.4-1.4L6.8 13H21v-2z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Back arrow',
  },
})
export const ChevronUp = createIcon({
  displayName: 'Chevron Up',
  d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Up',
  },
})
export const ChevronDown = createIcon({
  displayName: 'Chevron Down',
  d: 'M7.4 7.8l4.6 4.6 4.6-4.6L18 9.2l-6 6-6-6 1.4-1.4z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Down',
  },
})
export const ChevronRight = createIcon({
  displayName: 'Chevron Right',
  d: 'M10 6L8.6 7.4l4.6 4.6-4.6 4.6L10 18l6-6-6-6z',
  viewBox: '0 0 24 24',
  defaultProps: {
    title: 'Chevron Right',
  },
})
