import { styled } from '@theme/stitches.config'
import { m as motion, MotionValue } from 'framer-motion'
import { forwardRef, useEffect, useState } from 'react'

export interface ProgressBarProps extends React.ComponentProps<typeof Bg> {
  progress: MotionValue<number>
}

const Bg = styled('div', {
  backgroundColor: '$N10',
  br: '$pill',
  height: '8px',
  overflow: 'hidden',
  '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
  position: 'relative',
  mx: '$2',
  '@m': { mx: '$3' },
  '@l': { mx: '$4' },
  my: '$2',
})

const Fill = styled('div', {
  br: '$pill',
  backgroundColor: '$GA75',
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  width: '100%',
  willChange: 'transform',
})

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress, ...props }: ProgressBarProps, ref) => {
    const [{ newProgress, previousProgress }, setProgress] = useState({
      newProgress: 0,
      previousProgress: 0,
    })
    useEffect(() => {
      const updateProgress = () =>
        setProgress({
          newProgress: progress.get(),
          previousProgress: progress.getPrevious(),
        })
      updateProgress()
      const listener = progress.onChange(updateProgress)
      return listener
    }, [])

    return (
      //@ts-expect-error stitches css compatability error
      <Bg ref={ref} {...props}>
        <Fill
          as={motion.div}
          initial={{ x: `-${100 - previousProgress}%` }}
          animate={{ x: `-${100 - newProgress}%` }}
        />
      </Bg>
    )
  }
)
