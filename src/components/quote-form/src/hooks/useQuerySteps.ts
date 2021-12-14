import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export interface StepControls {
  nextStep: () => void
  prevStep: () => void
  setCurrentStep: (s: string) => void
}

export interface QuerySteps {
  currentStep: string
  currentIndex: number
  stepControls: StepControls
  readyToSubmit: boolean
  exitSteps: boolean
  stepProgress: number
}

export function useQuerySteps(steps: string[]): QuerySteps {
  const router = useRouter()
  const [stepControls, setStepControls] = useState<StepControls>()
  const [readyToSubmit, setReadyToSubmit] = useState<boolean>()
  const [stepProgress, setStepProgress] = useState<number>(0)
  const [exitSteps, setExitSteps] = useState<boolean>()
  const [currentStep, setCurrentStep] = useState<string>()
  const [currentIndex, setCurrentIndex] = useState<number>()
  const currentPath = router.pathname

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function assertString(q: typeof router.query.step): string {
    if (Array.isArray(q)) {
      return q[0]
    }
    return q
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function setStepQuery(newStep: string) {
    const queries = router.query
    router.push(
      {
        pathname: currentPath,
        query: { ...queries, step: newStep },
      },
      null,
      { shallow: true }
    )
  }

  function configureIncrementControls(
    schemaSteps: string[],
    currentIndex: number
  ) {
    return {
      nextStep: function () {
        if (currentIndex + 1 > schemaSteps.length) {
          return setReadyToSubmit(true)
        }
        console.log('next step')
        setCurrentStep(schemaSteps[currentIndex + 1])
      },
      prevStep: function () {
        if (currentIndex - 1 < 0) {
          return setExitSteps(true)
        }
        setCurrentStep(schemaSteps[currentIndex - 1])
      },
    }
  }
  useEffect(() => {
    if (steps && !currentStep) {
      setCurrentStep(steps[0])
      setCurrentIndex(0)
    }
  }, [steps])

  useEffect(() => {
    if (currentStep) {
      const stepIndex = steps.indexOf(currentStep)
      setCurrentIndex(stepIndex)
      const progressFraction = (stepIndex + 1) / steps.length
      const progress = Math.sin((Math.PI / 2) * progressFraction)
      setStepProgress(progress * 100)
      const incrementControls = configureIncrementControls(steps, stepIndex)
      setStepControls({
        ...stepControls,
        ...incrementControls,
        setCurrentStep,
      })
    }
  }, [currentStep])

  // useEffect(() => {
  //   if (currentStep !== assertString(router.query?.step)) {
  //     setTimeout(setStepQuery, 200, currentStep)
  //   }
  // }, [currentStep])

  return {
    currentStep,
    currentIndex,
    stepControls,
    readyToSubmit,
    exitSteps,
    stepProgress,
  }
}
