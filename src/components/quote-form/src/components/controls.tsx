import { Button } from '@components/button'
import { ControlLayout, ProgressBar } from '@atoms'
import { ArrowBack, Close } from '@theme/icons'
import { MotionValue } from 'framer-motion'
import React from 'react'

interface ControlsProps {
  progress: MotionValue
  handleClose: (e?: React.MouseEvent) => void
  handlePrevious: (e?: React.MouseEvent) => void
}

export const Controls: React.FC<ControlsProps> = ({
  progress,
  handleClose,
  handlePrevious,
}) => {
  function handleCloseClick(e: React.MouseEvent) {
    e?.preventDefault()
    handlePrevious(e)
  }
  return (
    <ControlLayout
      leftChild={
        <Button
          size="small"
          leftIcon={<ArrowBack css={{ color: '$N80' }} />}
          style="naked"
          onClick={handleCloseClick}
          offset="left"
        >
          Back
        </Button>
      }
      centerChild={<ProgressBar progress={progress} />}
      rightChild={
        <Button
          rightIcon={<Close />}
          size="small"
          style="naked"
          onClick={handleClose}
          offset="right"
        >
          Close
        </Button>
      }
    />
  )
}
