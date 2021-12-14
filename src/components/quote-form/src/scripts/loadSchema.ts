import { Schema, ResolvedSchema, Step, SchemaLink } from '../types/schemaTypes'

const asyncSchemas: { [key: string]: Promise<Schema> } = {
  mail: import('../schema/direct-mail').then((res) => res.directMailSchema),
  contact_information: import('../schema/contact-information').then(
    (res) => res.contactInformationSchema
  ),
  callback: import('../schema/callback').then((res) => res.callback),
  fulfilment: import('../schema/fulfilment').then((res) => res.fufilmentSchema),
  print: import('../schema/printing').then((res) => res.printSchema),
}

export async function loadSchema(schemaName: Schema['id']): Promise<Schema> {
  return await asyncSchemas[schemaName]
}

function isLinkStep(step: Step | SchemaLink): step is SchemaLink {
  return step.step_type === 'link'
}

function isStep(step: Step | SchemaLink): step is Step {
  return step.step_type === 'step'
}

function filterSteps(stepAry: (Step | SchemaLink)[]) {
  return stepAry.filter(isStep)
}

async function loadLinkedSteps(schemaName: Schema['id']) {
  const steps = (await loadSchema(schemaName)).steps
  return filterSteps(steps)
}

async function resolveLinkedSteps(
  steps: (Step | SchemaLink)[]
): Promise<Step[]> {
  const resolved = []
  for (const step of steps) {
    if (isLinkStep(step)) {
      const linkedSteps = await loadLinkedSteps(step.schema_id)
      resolved.push(...linkedSteps)
    } else {
      resolved.push(step)
    }
  }
  return resolved
}

export async function resolveSchema(
  schemaName: Schema['id']
): Promise<ResolvedSchema> {
  const { steps, ...rootSchema } = await loadSchema(schemaName)
  const resolvedSteps = await resolveLinkedSteps(steps)
  return { ...rootSchema, steps: resolvedSteps }
}
