import { __DEV__ } from '@utils'
import { forwardRef } from 'react'
import { styled, Paragraph } from '..'

const Input = styled(Paragraph, {
  backgroundColor: '$DA10',
  px: 'calc($3 - 2px)',
  py: 'calc($2 - 2px)',
  br: '$3',
  color: '$DBA70',
  overflow: 'hidden',
  borderColor: '$DBA20',
  borderStyle: 'solid',

  '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button,': {
    '-webkit-appearance': 'none',
    '@m': '0',
  },
  '&:hover': {
    borderColor: '$DBA40',
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$blue',
    color: '$DBA80',
  },
})

export const NumberInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>((props, ref) => (
  //@ts-expect-error https://github.com/modulz/stitches/issues/749
  <Input alignCenter as="input" ref={ref} {...props}></Input>
))

if (__DEV__) {
  NumberInput.displayName = 'NumberInput'
}
