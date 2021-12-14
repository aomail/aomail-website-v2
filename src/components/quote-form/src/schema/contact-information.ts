import { Schema } from '../types/schemaTypes'

export const contactInformationSchema: Schema = {
  id: 'contact_information',
  steps: [
    {
      step_id: 'name',
      step_type: 'step',
      step_title: 'Please enter your name',
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
          field_id: 'surname',
          required: false,
          format: 'string',
          label: 'Last name',
          placeholder: 'Appleseed',
          default: '',
          display: 'inline',
        },
      ],
    },
    {
      step_id: 'preferred_contact',
      step_type: 'step',
      step_title: 'How should we contact you?',
      mandatory: true,
      fields: [
        {
          field_type: 'button_select',
          display: 'row_wrap',
          field_id: 'preferred_contact',
          default: '',
          format: 'string',
          label: 'Choose a preferred contact method',
          select_options: [
            { label: 'Phone', value: 'phone', id: 'phone' },
            { label: 'Email', value: 'email', id: 'email' },
          ],
        },
      ],
      notes:
        'Our team will contact you via your preferred contact method to ensure we understand your requirements properly',
      next_step: [
        { field_id: 'preferred_contact', value: 'phone', target: 'phone' },
        { field_id: 'preferred_contact', value: 'email', target: 'email' },
      ],
    },
    {
      step_id: 'email',
      step_type: 'step',
      step_title: 'Email address',
      mandatory: true,
      skip: true,
      fields: [
        {
          field_type: 'input',
          input_type: 'email',
          field_id: 'email',
          default: '',
          format: 'email',
          label: 'Please enter an email address',
          placeholder: 'jane@example.com',
        },
      ],
    },
    {
      step_id: 'phone',
      step_type: 'step',
      step_title: 'Telephone number',
      mandatory: true,
      skip: true,
      fields: [
        {
          field_type: 'input',
          input_type: 'tel',
          field_id: 'email',
          default: '',
          format: 'phone',
          label: 'Please enter your phone number',
          placeholder: '04xx xxx xxx',
        },
      ],
    },
  ],
}
