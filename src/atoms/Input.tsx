import React, { FormEventHandler, forwardRef } from 'react'
import { visuallyHidden } from '@theme/utils/utilityClasses'
import { Box } from '@atoms/layout'
import { styled } from '@theme/stitches.config'
import { Paragraph } from '@theme/typography/text'
import { __DEV__ } from '@utils/src'
import type { FieldErrors } from 'react-hook-form'

interface InputProps extends React.ComponentProps<typeof InputWrapper> {
  id: string
  increment?: number
  value?: string
  defaultValue?: string
  placeholder?: string
  children?: React.ReactNode
  name: string
  type?: string
  required?: boolean
  onChange?: FormEventHandler<HTMLParagraphElement>
  onBlur?: (e?: React.FocusEvent) => void
  errors?: FieldErrors
}

export const InputStyles = styled(Paragraph, {
  willChange: 'border-color',
  backgroundColor: '$DA10',
  px: 'calc($3 - 2px)',
  py: 'calc($2 - 2px)',
  br: '$3',
  color: '$DBA70',
  overflow: 'hidden',
  borderColor: '$DBA20',
  borderStyle: 'solid',
  mt: '$2',
  mx: '0',
  mb: '0',
  width: '100%',
  '&::placeholder': {
    color: '$DBA50',
  },
  '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button,':
    {
      '-webkit-appearance': 'none',
    },
  '&:hover': {
    borderColor: '$DBA40',
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$blue',
    color: '$DBA80',
  },
  variants: {
    state: {
      error: {
        backgroundColor: '$R10',
        borderColor: '$R30',
        color: '$red',
        '&:hover': {
          borderColor: '$red',
        },
        '&:focus': {
          borderColor: '$R40',
          color: '$R40',
        },
        '&::placeholder': {
          color: '$R30',
        },
      },
    },
  },
})

const InputWrapper = styled(Box, { marginTop: '$3' })

export const TextArea = styled('textarea', InputStyles, {
  lineHeight: 1.5,
  variants: {
    resizeVertical: { true: { resize: 'vertical' } },
  },
})

export const InputLabel = styled(Paragraph, {
  color: '$DA70',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
})

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      children,
      value,
      defaultValue,
      name,
      type,
      placeholder,
      errors,
      required,
      onChange,
      onBlur,
      ...props
    }: InputProps,
    ref
  ) => {
    const inputProps = !children && props
    const error = errors?.[name]
    const _input = (
      // @ts-expect-error https://github.com/modulz/stitches/issues/749*/
      <InputStyles
        id={id}
        as="input"
        value={value}
        defaultValue={defaultValue}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        state={error ? 'error' : undefined}
        aria-invalid={error ? 'true' : 'false'}
        onChange={onChange}
        onBlur={onBlur}
        {...inputProps}
      />
    )
    if (!children) {
      return _input
    }
    return (
      <InputWrapper {...props}>
        {/* @ts-expect-error https://github.com/modulz/stitches/issues/749*/}
        <InputLabel as="label" size="s" htmlFor={id}>
          {children}
          {!required && (
            <>
              <span className={visuallyHidden()}>—</span>
              <Paragraph size="xs" css={{ color: '$DA50' }}>
                optional
              </Paragraph>
            </>
          )}
        </InputLabel>
        {_input}
        {error && (
          <Box
            css={{
              backgroundColor: '$R30',
              display: 'inline-block',
              mt: '$2',
              px: '$2',
              br: '$2',
            }}
          >
            <Paragraph
              size="xs"
              css={{ my: '0', display: 'inline-block', color: '$white' }}
              role="alert"
            >
              {errors[name].message}
            </Paragraph>
          </Box>
        )}
      </InputWrapper>
    )
  }
)

if (__DEV__) {
  Input.displayName = 'Input'
}
