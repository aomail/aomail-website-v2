import Pattern from '@svg/cornerPatternDark.svg'
import { styled } from '@theme/stitches.config'
import { Container } from './container'

const Background = styled('div', {
  position: 'relative',
  background: '$N90',
  minHeight: '$10',
  pt: '$7',
  pb: '$6',
})

const BackgroundImage = styled(Pattern, {
  opacity: '0.8',
  position: 'absolute',
  pointerEvents: 'none',
  maxWidth: '100%',
  width: '75%',
  top: '0',
  left: '0',
  '@m': {
    width: '50%',
  },
  '@l': {
    width: 'auto',
    height: '$10',
  },
})

export interface FullWidthFeatureContainerProps
  extends React.ComponentProps<typeof Background> {
  children?: React.ReactNode
}

export function FullWidthFeatureContainer({
  children,
  ...props
}: FullWidthFeatureContainerProps): JSX.Element {
  return (
    //@ts-expect-error I think this is a Stitches bug https://github.com/microsoft/TypeScript/issues/32689
    <Background {...props}>
      <BackgroundImage />
      <Container>{children}</Container>
    </Background>
  )
}
