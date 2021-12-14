import {
  styled,
  Paragraph,
  TextHolder,
  Flex,
  Box,
  Column,
  ColumnWrapper,
  FullWidthFeatureContainer,
  Title,
} from '@theme'
import { Image, ResponsiveImageType } from 'react-datocms'

export interface TestimonialProps
  extends React.ComponentProps<typeof FullWidthFeatureContainer> {
  image: ResponsiveImageType
  name: string
  company: string
  testimonial: string
}

const Photo = styled(Image, {
  objectFit: 'cover',
  br: '50%',
  size: '$9',
  mr: '$3',
  '@m': {
    mr: '$5',
  },
  '@l': {
    size: '$10',
    m: '0',
  },
})

const ProfileWrapper = styled(Flex, {
  mt: '$6',
  alignItems: 'center',
  '@l': {
    flexFlow: 'column nowrap',
    mb: '-$2',
  },
})

const ProfileText = styled(Paragraph, {
  my: '$1',
  variants: {
    name: {
      true: {
        color: '$white',
        fontWeight: '600',
      },
    },
  },
  '@l': {
    textAlign: 'center',
  },
})

const TestimonialTextHolder = styled(ColumnWrapper, {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
  '@l': {
    flexFlow: 'row-reverse nowrap',
    alignItems: 'flex-end',
    mb: '$6',
  },
})

const Quote = styled(Title, {
  color: '$white',
  mx: '0',
  p: '0',
  position: 'relative',
  '&:after': { content: '”', ml: '$1' },
  '&:before': { content: '“', ml: '$2', position: 'absolute', left: '-$4' },
})

export function Testimonial({
  testimonial,
  image,
  name,
  company,
  ...props
}: TestimonialProps): JSX.Element {
  return (
    //@ts-expect-error Stitches css compatability issue
    <FullWidthFeatureContainer {...props}>
      <TestimonialTextHolder>
        <Column>
          <TextHolder>
            {/* @ts-expect-error https://github.com/modulz/stitches/issues/749 */}
            <Quote level="3" as="blockquote">
              {testimonial}
            </Quote>
          </TextHolder>
        </Column>
        <Column css={{ '@l': { flex: '0 0 25%' } }}>
          <TextHolder>
            <ProfileWrapper>
              <Photo data={image} />
              <Box css={{ my: '$4' }}>
                <ProfileText size="s" name>
                  {name}
                </ProfileText>
                <ProfileText size="s" color="light">
                  {company}
                </ProfileText>
              </Box>
            </ProfileWrapper>
          </TextHolder>
        </Column>
      </TestimonialTextHolder>
    </FullWidthFeatureContainer>
  )
}
