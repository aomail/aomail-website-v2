import { Border, TextHolder } from '@atoms'
import { styled } from '@theme/stitches.config'
import { m as motion, Variants } from 'framer-motion'

export interface LayoutProps {
  controls?: React.ReactNode
  main?: React.ReactNode
  children?: React.ReactNode
  hideControlsBorder?: boolean
}

const ContentWrapper = styled(TextHolder, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  zIndex: '$3',
  overflow: 'hidden',
})

const borderMotionVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 48 },
}

export function ModalLayout({
  controls,
  main,
  hideControlsBorder,
  children,
}: LayoutProps): JSX.Element {
  return (
    <>
      {controls && (
        <TextHolder
          padX="xLarge"
          padY="default"
          css={{ flex: '0 0 auto', py: '$2', '@m': { py: '$3' } }}
        >
          {controls}
        </TextHolder>
      )}
      {controls && !hideControlsBorder && (
        //@ts-expect-error Stitches as prop issue
        <Border
          as={motion.span}
          inherit
          aria-hidden
          intial="hidden"
          animate="visible"
          exit="hidden"
          css={{ position: 'relative' }}
          variants={borderMotionVariants}
        />
      )}
      {(main || children) && (
        <ContentWrapper padX="xLarge" padY="default" css={{ flex: '1 1 auto' }}>
          {main || children}
        </ContentWrapper>
      )}
    </>
  )
}
