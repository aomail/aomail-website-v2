import { Box, Flex, ProgressBar } from '@atoms'
import { ErrorCheck, SuccessCheck } from '@theme/icons'
import { Variants, m as motion, useMotionValue, animate } from 'framer-motion'
import { Paragraph } from '@theme/typography'
import { Button } from '@components/button'
import React, { useEffect } from 'react'

export interface FormSuccessProps extends React.ComponentProps<typeof Flex> {
  heading: string
  paragraph: string
  handleClose: (e?: React.MouseEvent) => void
  error?: boolean
}

const ParentAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.4 },
  },
}
const ChildAnimationVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export const FormSuccess: React.FC<FormSuccessProps> = ({
  heading,
  paragraph,
  handleClose,
  error,
  ...props
}) => {
  const progress = useMotionValue(0)
  useEffect(() => {
    !error && animate(progress, 100, { duration: 4, onComplete: handleClose })
  }, [])
  return (
    <Flex
      as={motion.div}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={ParentAnimationVariants}
      //@ts-expect-error Sitches css bug
      css={{
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        p: '$6',
        background: '$white',
        position: 'absolute',
        tlbr: '0',
      }}
      {...props}
    >
      {error ? (
        <ErrorCheck
          css={{ size: '$9', flex: '0 0 auto' }}
          as={motion.svg}
          variants={ChildAnimationVariants}
        />
      ) : (
        <SuccessCheck
          css={{ size: '$9', flex: '0 0 auto' }}
          as={motion.svg}
          variants={ChildAnimationVariants}
        />
      )}
      <Box css={{ pb: '$4', flex: '1 1 640px', maxWidth: '640px' }}>
        <Paragraph
          alignCenter
          size="l"
          as={motion.h2}
          variants={ChildAnimationVariants}
        >
          {heading}
        </Paragraph>
        <Paragraph
          alignCenter
          size="s"
          as={motion.h2}
          variants={ChildAnimationVariants}
        >
          {paragraph}
        </Paragraph>
        {error && (
          <Button
            css={{ display: 'block', mx: 'auto', mt: '$6' }}
            onClick={handleClose}
          >
            Close
          </Button>
        )}
      </Box>
      {!error && (
        <ProgressBar
          css={{
            alignSelf: 'stretch',
          }}
          progress={progress}
        />
      )}
    </Flex>
  )
}
