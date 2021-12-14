import React from 'react'
import { StepControls } from '../hooks/useQuerySteps'
import { Step } from '../types/schemaTypes'
import { StepTitleBar } from './stepTitleBar'

export interface FormStepProps extends Step {
  stepControls: StepControls
}

export const FormStep: React.FC<FormStepProps> = ({
  step_title,
  mandatory,
  stepControls,
  //fields,
}) => {
  function handleSkip(e: React.MouseEvent) {
    e?.preventDefault()
    if (!mandatory) {
      stepControls.nextStep()
    }
  }
  return (
    <>
      <StepTitleBar
        mandatory={mandatory}
        step_title={step_title}
        handleSkip={handleSkip}
      ></StepTitleBar>
    </>
  )
}
