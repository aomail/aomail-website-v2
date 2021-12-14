import { Box, Container, TextHolder, Heading } from '@theme'

interface HeroSectionProps extends React.ComponentProps<typeof Box> {
  title: string
  subtext: string
}

export function HeroSection({ title }: HeroSectionProps): JSX.Element {
  return (
    <Box
      as="section"
      css={{
        backgroundColor: '$N10',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        css={{
          pt: '$6',
          minHeight: '280px',
          '@m': { minHeight: '400px' },
        }}
      >
        <TextHolder
          css={{ mt: '$7', '@m': { mt: '$8' }, '@l': { ml: '8.33%' } }}
        >
          <Heading level="1" as="h1">
            {title}
          </Heading>
        </TextHolder>
      </Container>
    </Box>
  )
}
