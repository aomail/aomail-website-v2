import { ArrowForward } from '@theme/icons'
import { css, styled } from '@theme/stitches.config'
import { Paragraph } from '@theme/typography'
import { __DEV__ } from '@utils'
import { default as NextLink } from 'next/link'

import React, { forwardRef } from 'react'
import { HoverGroup, HoverGroupFlex } from './layout'

interface LinkTextProps
  extends Partial<React.ComponentProps<typeof HoverGroupFlex>> {
  text: string
  href?: string
  to?: string
  onClick?: (e: React.MouseEvent) => void
}

export const resetLink = css({
  textDecoration: 'none',
  color: 'unset',
})

export const CtaLinkWrapper = styled('a', HoverGroupFlex, {
  textDecoration: 'none',
  color: 'unset',
})

const Cta = forwardRef<HTMLAnchorElement, LinkTextProps>(
  ({ href, text, onClick, ...props }: LinkTextProps, ref) => {
    const LinkEl = href ? 'a' : 'span'
    function handleClick(e: React.MouseEvent) {
      e.stopPropagation()
      onClick && onClick(e)
    }
    return (
      <CtaLinkWrapper
        //@ts-expect-error ref issue
        ref={ref}
        as={LinkEl}
        onClick={handleClick}
        href={href}
        {...props}
      >
        <Paragraph
          size="s"
          as="span"
          css={{
            color: '$blue',
            m: 0,
            [`&:hover, ${HoverGroupFlex}:hover &, ${HoverGroup}:hover &`]: {
              color: '$B40',
            },
          }}
        >
          {text}
        </Paragraph>
        <ArrowForward
          css={{
            willChange: 'transform',
            transition: 'transform 0.2s ease-out',
            color: '$blue',
            ml: '$2',
            alignSelf: 'center',
            [`${HoverGroupFlex}:hover &, ${HoverGroup}:hover &`]: {
              transform: 'translateX($space$1)',
              color: '$B40 ',
            },
          }}
        />
      </CtaLinkWrapper>
    )
  }
)

if (__DEV__) {
  Cta.displayName = 'Cta'
}

export const CtaLink = forwardRef<HTMLAnchorElement, LinkTextProps>(
  ({ text, href, to, ...props }: LinkTextProps, ref) => {
    if (to) {
      return (
        <NextLink href={to} passHref>
          <Cta
            //@ts-expect-error ref issue
            ref={ref}
            href={to}
            text={text}
            {...props}
          />
        </NextLink>
      )
    }
    return (
      <Cta
        //@ts-expect-error ref issue
        ref={ref}
        href={href}
        text={text}
        {...props}
      />
    )
  }
)

if (__DEV__) {
  CtaLink.displayName = 'CtaLink'
}

export const Anchor = styled('a', {
  color: '$blue',
  [`&:hover, ${HoverGroupFlex}:hover > &, ${HoverGroup}:hover > &`]: {
    color: '$B40',
  },
  variants: {
    underline: {
      false: {
        textDecoration: 'none',
      },
    },
  },
})

export const StyledLink = forwardRef<HTMLAnchorElement, LinkTextProps>(
  ({ text, href, to, ...props }: LinkTextProps, ref) => {
    const link = (
      <Anchor
        //@ts-expect-error ref issue
        ref={ref}
        href={href}
        {...props}
      >
        {text}
      </Anchor>
    )
    if (to)
      return (
        <NextLink href={to} passHref>
          {link}
        </NextLink>
      )
    return link
  }
)

if (__DEV__) {
  StyledLink.displayName = 'StyledLink'
}
