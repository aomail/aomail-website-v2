import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import type { ButtonSelectProps } from '../components/buttonSelect'

export const loadField = (type: string): ComponentType =>
  ({
    button_select: dynamic<ButtonSelectProps>(() =>
      import('../components/buttonSelect').then((res) => res.ButtonSelect)
    ),
    input: null,
    textarea: null,
  }[type])
