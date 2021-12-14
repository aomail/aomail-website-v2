import {
  Card as CardBg,
  Flex,
  styled,
  CSS,
  Spacer,
  Paragraph,
  Heading6,
  CtaLink,
  HoverGroup,
} from '@theme'
import {
  Image,
  renderRule,
  ResponsiveImageType,
  StructuredText,
} from 'react-datocms'
import { isParagraph } from 'datocms-structured-text-utils'

interface LinkCardProps extends Partial<React.ComponentProps<typeof CtaLink>> {
  title?: string
  image?: ResponsiveImageType
  description?: unknown
  css?: CSS
  onClick?: (e: React.MouseEvent) => void
  link?: string
}

const CardBackground = styled(CardBg, {
  display: 'flex',
  flexFlow: 'column nowrap',
  position: 'relative',
  color: '$DBA70',
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  minHeight: '100%',
  '&:hover': {
    transform: 'translateY(-$space$1)',
    cursor: 'pointer',
  },
})

const textRules = [
  renderRule(isParagraph, (node) => (
    <Paragraph size="s" css={{ mt: '$1' }} key={node.key}>
      {node.children}
    </Paragraph>
  )),
]

const ImgWrapper = styled('div', {
  order: '-1',
  br: '$2',
  overflow: 'hidden',
})

const Img = styled(Image, {
  transition: 'transform 0.2s ease-out',
  willChange: 'transform',
  [`${HoverGroup}:hover > ${ImgWrapper} &`]: {
    transform: 'scale(1.02)',
  },
})

export function LinkCard({
  description,
  image,
  link,
  title,
  ...props
}: LinkCardProps): JSX.Element {
  return (
    //@ts-expect-error stitchess css issue and as prop issue
    <CardBackground as={HoverGroup} {...props}>
      <Heading6 as="h2" marginTop="small">
        <a
          href={link}
          style={{
            textDecoration: 'none',
            color: 'unset',
            fontFamily: 'unset',
          }}
        >
          {title}
        </a>
      </Heading6>
      <Spacer />
      <Flex
        css={{
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          flex: '1 1',
        }}
      >
        {/* @ts-expect-error haven't provided proper typings for data */}
        <StructuredText data={description} customRules={textRules} />
        <Spacer size="large" />
        <CtaLink text="Read more" />
      </Flex>
      {image && (
        <ImgWrapper>
          <Img data={image} />
        </ImgWrapper>
      )}
    </CardBackground>
  )
}
