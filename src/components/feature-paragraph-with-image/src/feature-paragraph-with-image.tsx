import { FeatureParagraphImageRecord } from '@lib/datocms/__generated__/types'
import {
  TextHolder,
  styled,
  css,
  Heading2,
  Column,
  ColumnWrapper,
} from '@theme'
import { structuredTextRules } from '@lib/datocms/structuredText'
import { StructuredText } from 'react-datocms'
import { Image } from 'react-datocms'

export interface FeatureParagraphWithImageProps
  extends React.ComponentProps<typeof FeatureParagraphColumnWrapper> {
  image?: FeatureParagraphImageRecord['image']
  heading?: string
  paragraph?: FeatureParagraphImageRecord['paragraph']
  background?: FeatureParagraphImageRecord['patternBackground']
  crop?: boolean
  imagePosition?: FeatureParagraphImageRecord['imagePosition']
}

const FeatureImage = styled(Image, {
  mt: '$5',
  height: 'auto',
  size: '$12',
  '@l': {
    mx: '16.67%',
    size: 'unset',
  },
  variants: {
    oval: {
      true: {
        br: '50%',
      },
    },
  },
})

const innerImageStyle = css({
  m: '$4',
})

const FeatureParagraphColumnWrapper = styled(ColumnWrapper, {
  flexDirection: 'column',
  mt: '$4',
  '@m': { flexDirection: 'row', alignItems: 'center', mt: '$5' },
  '@l': { mt: '$6' },
})

export function FeatureParagraphWithImage({
  image,
  paragraph,
  heading,
  crop,
  imagePosition,
  ...props
}: FeatureParagraphWithImageProps): JSX.Element {
  return (
    //@ts-expect-error stitches css compatability error
    <FeatureParagraphColumnWrapper {...props}>
      <Column
        css={{
          '@m': { pr: '$2' },
          '@xl': imagePosition === 'left' ? { mr: '8.33%' } : { ml: '8.33%' },
        }}
      >
        <TextHolder>
          <Heading2 as="h2" css={{ mt: '$2' }}>
            {heading}
          </Heading2>
          <StructuredText
            customRules={structuredTextRules({})}
            data={paragraph.value}
          />
        </TextHolder>
      </Column>
      <Column
        //@ts-expect-error stitches css compatability error
        css={{
          alignSelf: 'center',
          flex: '0 0 auto',
          '@m': { flex: '0 0 40%' },
          '@l': { flex: '0 0 40%', order: imagePosition === 'left' ? '-1' : 1 },
        }}
      >
        <TextHolder>
          <FeatureImage
            className={innerImageStyle()}
            oval={crop}
            data={image.responsiveImage}
          />
        </TextHolder>
      </Column>
    </FeatureParagraphColumnWrapper>
  )
}
