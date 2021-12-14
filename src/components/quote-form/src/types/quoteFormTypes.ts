export interface Quote {
  id: string
  service_id: ServiceType
  created_at: Date
  updated_at?: Date
  validated_at?: Date
  submitted_at?: Date
  submission_response?: 'Success' | 'Error'
  is_valid?: boolean
  validation_messages?: ValidationMessage[]
  brief?: MailSubmission | PrintSubmission | FulfilmentSubmission
  contact_information?: ContactInformation
  current_step: string
  previous_step?: string
}

export interface ContactInformation {
  first_name: string
  surname: string
  preferred_contact: PreferredContactMethod
  email: string
  phone: string
}

export type ServiceType = 'print' | 'mail' | 'fulfilment' | 'callback'

export type FormSeedData = Partial<
  Quote['contact_information'] & Quote['brief']
>

type PreferredContactMethod = 'phone' | 'email'

interface ValidationMessage {
  step_id: string
  field_id: string
  message: string
}

type Deadline =
  | 'No deadline yet'
  | '3 weeks or more'
  | '2 weeks or more'
  | 'Next week'
  | 'Urgently!'

interface MailSubmission {
  mail_format?: MailFormat
  delivery_type?: DeliveryType
  mail_quantity?: number
  deadline?: Deadline
  mail_service: MailService
  additional_information?: string
}

interface PrintSubmission {
  print_format?: PrintFormat
  print_quantity?: number
  deadline?: Deadline
  additional_information?: string
}

interface FulfilmentSubmission {
  fulfilment_type?: FulfilmentType
  additional_information?: string
}

type FulfilmentType = '3pl' | 'pick_pack' | 'reworks' | 'other'

type DeliveryType = 'Addressed/Bulk Mail' | 'Unaddressed Mail' | 'Unsure/Other'

type MailFormat =
  | 'Flyers'
  | 'Letters'
  | 'Postcards'
  | 'Brochures'
  | 'Invoices/Bills'
  | 'Reports'
  | 'Plastic wrapped items'
  | 'Art'
  | 'Magazine'
  | 'Product Samples'
  | 'Retail/eCommerce Products'
  | 'Books'
  | 'Something else'

type PrintFormat =
  | 'Flyers'
  | 'Letters'
  | 'Postcards'
  | 'Brochures'
  | 'Invoices/Bills'
  | 'Reports'
  | 'Business Cards'
  | 'Art'
  | 'Magazines'
  | 'Packaging'
  | 'Envelopes'
  | 'ID Cards'
  | 'Something else'

type MailService = 'Print & Mail' | 'Mail only'
