import React, { forwardRef } from 'react'
import { styled } from '@theme/stitches.config'
import { Paragraph } from '@theme/typography'
import { __DEV__ } from '@utils'

interface RadioButtonProps extends React.ComponentProps<typeof Block> {
  id?: string
  value?: string
  name: string
  checked?: boolean
  defaultChecked?: boolean
  children?: React.ReactNode
  onChange?: React.FormEventHandler<HTMLInputElement>
  onBlur?: (e?: React.FocusEvent) => void
}

const HiddenRadio = styled('input', {
  opacity: 0,
  position: 'fixed',
  width: 0,
})

const Block = styled('div', {
  mr: '$2',
  mt: '$2',
  '& > label:hover': {
    color: '$DBA80',
    backgroundColor: '$GA20',
    cursor: 'pointer',
  },
  '& > input[type="radio"]:focus + label': {
    boxShadow: '$1',
    backgroundColor: '$DA20',
    border: '2px solid $GA75',
    color: '$DBA80',
    py: 'calc($2 - 2px)',
    px: 'calc($2 - 2px)',
    '&:hover': { backgroundColor: '$GA40' },
  },
  '& > input[type="radio"]:checked + label': {
    backgroundColor: '$green',
    color: '$LA90',
    '&:hover': { backgroundColor: '$G40' },
    '&:focus': { border: '1px solid black' },
  },
})

const Label = styled(Paragraph, {
  py: '$2',
  px: '$2',
  display: 'block',
  br: '$3',
  backgroundColor: '$DA10',
  color: '$DBA70',
  lineHeight: '1',
})

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      id,
      children,
      value,
      name,
      defaultChecked,
      checked,
      onChange,
      onBlur,
      ...props
    }: RadioButtonProps,
    ref
  ) => {
    return (
      //@ts-expect-error stitches css compatability error
      <Block {...props}>
        <HiddenRadio
          type="radio"
          id={id}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          checked={checked}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
        {/*@ts-expect-error https://github.com/modulz/stitches/issues/749 */}
        <Label as="label" size="s" htmlFor={id}>
          {children}
        </Label>
      </Block>
    )
  }
)

if (__DEV__) {
  RadioButton.displayName = 'RadioButton'
}
