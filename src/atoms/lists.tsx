import type * as Stitches from '@stitches/react'
import { styled } from '@theme/stitches.config'
import { __DEV__ } from '@utils'
import React, { forwardRef } from 'react'
import * as icons from '@theme/icons'

export interface ListProps extends React.ComponentProps<typeof List> {
  icon?: React.ReactNode
  as?: React.ReactNode
}

export interface listItemProps extends React.ComponentProps<typeof _ListItem> {
  icon?: React.ReactNode | keyof typeof icons
  iconProps?: {
    css?: Stitches.CSS
  }
}

export const List = styled('ul', {
  position: 'relative',
  marginLeft: '0',
  listStyle: 'none',
  pl: '0',
  my: '$5',
})

export const _ListItem = styled('li', {
  display: 'flex',
  mt: '$3',
  variants: {
    marks: {
      enabled: {
        '&::before': {
          position: 'relative',
          top: '0.125em',
          alignSelf: 'flex-start',
          color: '$DA70',
          left: '0',
          content: `'•'`,
          textAlign: 'center',
          marginRight: '0.5em',
          verticalAlign: 'middle',
        },
      },
      disabled: {},
    },
    defaultVariants: {
      //@ts-expect-error stitches error I think
      marks: 'enabled',
    },
  },
})

export const UnorderedList = forwardRef<
  HTMLUListElement,
  React.ComponentProps<typeof List>
>((props, ref) => (
  //@ts-expect-error incompatible css possibly related to https://github.com/modulz/stitches/issues/749*/
  <List role="list" ref={ref} {...props} />
))

if (__DEV__) {
  UnorderedList.displayName = 'UnorderedList'
}

export const OrderedList = forwardRef<HTMLUListElement, ListProps>(
  ({ as, ...props }: ListProps, ref) => (
    <List
      role="list"
      ref={ref}
      //@ts-expect-error https://github.com/modulz/stitches/issues/749
      as={as ?? 'ol'}
      {...props}
    />
  )
)

if (__DEV__) {
  OrderedList.displayName = 'OrderedList'
}

export const ListItem = forwardRef<HTMLLIElement, listItemProps>(
  ({ children, icon, iconProps = {}, ...props }: listItemProps, ref) => {
    const Mark = typeof icon === 'string' ? icons[icon] : icon
    const { css = {}, ...iconRest } = iconProps
    return (
      //@ts-expect-error stitches css compatability error
      <_ListItem
        marks={Mark ? 'disabled' : 'enabled'}
        role={'list'}
        ref={ref}
        {...props}
      >
        {Mark && (
          <Mark
            {...iconRest}
            css={{
              marginRight: '$3',
              mt: '$1',
              alignSelf: 'flex-start',
              flex: '0 0 $2',
              position: 'relative',
              '& + p': {
                flex: '1 1',
              },
              ...css,
            }}
          />
        )}
        {children}
      </_ListItem>
    )
  }
)
if (__DEV__) {
  ListItem.displayName = 'ListItem'
}
