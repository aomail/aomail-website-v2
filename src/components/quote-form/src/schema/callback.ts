import { Schema } from '../types/schemaTypes'

export const callback: Schema = {
  id: 'callback',
  conversion_value: 50,
  steps: [
    {
      step_id: 'callback',
      step_type: 'step',
      step_title: 'Get a callback',
      mandatory: true,
      fields: [
        {
          field_type: 'input',
          field_id: 'first_name',
          required: true,
          format: 'string',
          label: 'First name',
          placeholder: 'Jane',
          default: '',
          display: 'inline',
        },
        {
          field_type: 'input',
          field_id: 'last_name',
          required: false,
          format: 'string',
          label: 'Last name',
          placeholder: 'Appleseed',
          default: '',
          display: 'inline',
        },
        {
          field_type: 'input',
          field_id: 'email',
          default: '',
          format: 'phone',
          label: 'Please enter your phone number',
          placeholder: '04xx xxx xxx',
        },
      ],
    },
  ],
  success_title: 'We will call you ASAP',
  success_description:
    'Thanks for requesting a callback. One of our team will call you very soon.',
}
