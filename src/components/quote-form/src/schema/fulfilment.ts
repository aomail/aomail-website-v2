import { Schema } from '../types/schemaTypes'

export const fufilmentSchema: Schema = {
  id: 'fulfilment',
  steps: [
    {
      step_id: 'fulfilment_type',
      step_type: 'step',
      step_title: 'How would you best describe your fulfilment needs?',
      mandatory: false,
      fields: [
        {
          field_type: 'button_select',
          display: 'row_wrap',
          field_id: 'fulfilment_type',
          format: 'string',
          label: 'What type of fulfilment do you require',
          defaultValue: '(not provided)',
          select_options: [
            { label: 'eCommerce / 3PL', value: '3pl', id: '3pl' },
            {
              label: 'Hand line pick & pack',
              value: 'pick_pack',
              id: 'pick_pack',
            },
            {
              label: 'Product / packaging reworks',
              value: 'reworks',
              id: 'reworks',
            },
            {
              label: 'Something Else',
              value: 'other',
              id: 'other',
            },
          ],
        },
      ],
    },
    { schema_id: 'contact_information', step_type: 'link' },
    {
      step_id: 'additional_information',
      step_type: 'step',
      step_title: 'Additional information',
      mandatory: false,
      fields: [
        {
          field_type: 'textarea',
          field_id: 'additional_information',
          format: 'string',
          label: 'Your brief',
          defaultValue: '(not provided)',
          placeholder:
            'Please include any information or requirements that will help us to prepare your quote in an accurate and timely manner.',
        },
      ],
    },
  ],
  success_title: 'Request sent!',
  success_description:
    'Thanks for requesting a quote for our mail services. Our team is reviewing your requirements and will be in touch with you very soon!',
}
