import { UseFormRegister } from 'react-hook-form'

export type Field = ButtonSelectType | InputType | TextareaType

export interface ButtonSelectType extends DefaultFieldType {
  field_type: 'button_select'
  display?: string
  select_options: Option[]
}

export interface InputType extends DefaultFieldType {
  field_type: 'input'
}
export interface TextareaType extends DefaultFieldType {
  field_type: 'textarea'
}

interface DefaultFieldType {
  field_type: string
  field_id: string
  format?: 'string' | 'phone' | 'email' | 'number'
  input_type?: 'email' | 'tel' | 'number'
  pattern?: string | RegExp
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  defaultValue?: string
  required?: boolean
  placeholder?: string
  default?: string
  display?: string
  auto_complete_field?: Field
  text_mask?: string
}

interface Option {
  label: string
  value?: string | number
  id: string
}
