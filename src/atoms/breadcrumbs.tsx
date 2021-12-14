import { forwardRef } from 'react'
import { styled } from '@theme/stitches.config'
import { Flex } from './layout'
import { Paragraph } from '@theme/typography/text'
import Link from 'next/link'
import { ChevronRight } from '@theme/icons/arrows'
import { visuallyHidden } from '@theme/utils/utilityClasses'

export interface BreadcrumbsProps {
  links: { name: string; url: string }[]
}

const A = styled(Paragraph, {
  color: '$DBA70',
  textDecoration: 'none',
  p: '$1',
  br: '$2',
  '&:hover': {
    color: '$DBA80',
    background: '$DBA10',
  },
})

const Symbol = styled(ChevronRight, {
  color: '$DBA50',
  size: '$2',
})

const Ul = styled('ul', {
  listStyle: 'none',
  p: '0',
  m: '0',
})
const Li = styled('li', {
  display: 'inline-block',
})

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  function ({ links }: BreadcrumbsProps, ref): JSX.Element {
    const bdLinks = [{ name: 'Home', url: '/' }, ...links]
    return (
      <Flex as="nav" css={{ alignItems: 'center' }} ref={ref}>
        <span className={visuallyHidden()}>Breadcrumb Navigation</span>
        <Ul>
          {bdLinks.map((link, i) => (
            <Li key={i}>
              {i > 0 && <Symbol />}
              <Link key={i} href={link.url} passHref>
                {/* @ts-expect-error https://github.com/modulz/stitches/issues/749*/}
                <A size="m" as="a">
                  <span className={visuallyHidden()}>Back to</span>
                  {link.name}
                  <span className={visuallyHidden()}>page</span>
                </A>
              </Link>
            </Li>
          ))}
        </Ul>
      </Flex>
    )
  }
)
