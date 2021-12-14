import React, { useRef } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'
import {
  Border,
  Box,
  Card,
  CtaLink,
  HoverGroupFlex,
  ListCardWrapper,
  Spacer,
} from '@atoms'
import { Heading3, Paragraph } from '@theme/typography'
import { styled } from '@theme/stitches.config'

interface ArticleListCardProps
  extends Partial<React.ComponentProps<typeof Background>> {
  data: CardProps[]
}

interface CardProps extends Partial<React.ComponentProps<typeof Box>> {
  title?: string
  image?: ResponsiveImageType
  description?: string
  link?: string
  linkText?: string
  linkRef?: React.ForwardedRef<HTMLAnchorElement>
}

const Background = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  py: '0',
  '@l': {
    flexDirection: 'row',
    py: '$5',
  },
})

const ServiceEntryLayout = styled(HoverGroupFlex, {
  flex: '0 0 100%',
  position: 'relative',
  '@l': {
    flexDirection: 'column',
    flex: '1 1',
  },
})

const ServiceEntryText = styled(Box, {
  '@l': {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

const ServiceImage = styled(Image, {
  br: '$3',
  flex: '0 0 $sizes$8',
  height: '$7',
  mr: '$3',
  display: 'none !important',
  '@s': {
    display: 'block !important',
  },
  '@m': {
    flexBasis: '$sizes$10',
    height: 'auto',
  },
  '@l': {
    maxWidth: '$12',
  },
})

function ServiceEntry({
  image,
  title,
  description,
  linkText,
  link,
  linkRef,
}: CardProps): JSX.Element {
  return (
    <ServiceEntryLayout>
      <ServiceImage pictureStyle={{ objectFit: 'cover' }} data={image} />
      <ServiceEntryText>
        <Heading3 marginTop={{ '@initial': 'none', '@l': 'small' }}>
          {title}
        </Heading3>
        <Paragraph
          marginTop={{ '@m': 'small' }}
          size="s"
          css={{ color: '$DA70', '@l': { flexBasis: '100%', mr: '$4' } }}
        >
          {description}
        </Paragraph>
        <Spacer />
        <CtaLink ref={linkRef} text={linkText} to={link} />
      </ServiceEntryText>
    </ServiceEntryLayout>
  )
}

interface ListCardProps extends React.ComponentProps<typeof Background> {
  children?: JSX.Element[]
}

export function ListCard({ children, ...props }: ListCardProps): JSX.Element {
  const linkRefs = useRef({})
  function setLinkRef(refId: string | React.Key) {
    return function (el: React.Ref<HTMLAnchorElement>) {
      linkRefs.current[refId] = el
    }
  }
  function handleClick(refId: string) {
    return function (e: React.MouseEvent) {
      e?.preventDefault()
      linkRefs.current[refId].click()
    }
  }
  return children ? (
    //@ts-expect-error stitches bug as prop and css compatibility
    <Background as={Card} {...props}>
      {React.Children.map(children, (child, i) => {
        const id =
          typeof child === 'object' && Object.hasOwnProperty.call(child, 'key')
            ? child.key.toString()
            : i.toString()
        const innerChild = React.cloneElement(child, {
          onClick: handleClick(id),
          linkRef: setLinkRef(id),
        })
        return (
          <ListCardWrapper key={id} onClick={handleClick(id)}>
            <Border
              position={{ '@initial': 'bottom', '@l': 'right' }}
              aria-hidden
            />

            {innerChild}
          </ListCardWrapper>
        )
      })}
    </Background>
  ) : null
}

export function ArticleListCard({
  data,
  ...props
}: ArticleListCardProps): JSX.Element {
  return (
    //@ts-expect-error Stitches css compatibility error
    <ListCard {...props}>
      {data.map((d) => (
        //@ts-expect-error Stitches css compatibility error
        <ServiceEntry key={d.title} {...d} />
      ))}
    </ListCard>
  )
}
