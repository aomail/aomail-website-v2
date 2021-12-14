import { Field } from './inputTypes'
import { ServiceType } from './quoteFormTypes'

export interface Schema {
  id: ServiceType | 'contact_information'
  conversion_value?: number
  steps: (Step | SchemaLink)[]
  success_title?: string
  success_description?: string
}

export interface ResolvedSchema extends Schema {
  steps: Step[]
}

export interface Step {
  step_id: string
  step_type: 'step'
  step_title: string
  mandatory?: boolean
  fields: Field[]
  notes?: string
  next_step?: StepLink[]
  skip?: boolean
}

export interface StepLink {
  field_id: string
  value: string
  target: string
}

export interface SchemaLink {
  step_type: 'link'
  schema_id: Schema['id']
}
