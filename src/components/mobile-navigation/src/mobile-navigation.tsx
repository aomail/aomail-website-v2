import React from 'react'
import Link from 'next/link'
import { styled, Box, Container, Flex, Heading4 } from '@theme'
import { Button } from '@components/button'
interface MobileNavigationProps
  extends React.ComponentProps<typeof NavWrapper> {
  navIsOpen: boolean
  data?: typeof staticData
  layout?: boolean
  toggleNav?: (e?: React.MouseEvent) => void
}

const staticData = [
  {
    section_label: 'Services',
    menu_items: [
      { name: 'Direct Mail', link: '/direct-mail' },
      { name: 'Fulfilment', link: '/package-fulfilment' },
      { name: 'Printing', link: '/printing' },
    ],
  },
  {
    section_label: 'Company',
    menu_items: [
      { name: 'About Us', link: '/about' },
      { name: 'Contact', link: '/contact' },
      { name: 'Blog', link: '/blog' },
    ],
  },
]

const NavWrapper = styled('div', {
  pointerEvents: 'none',
  opacity: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  variants: {
    open: {
      true: {
        clip: 'none',
        clipPath: 'none',
        overflow: 'auto',
        position: 'relative',
        whiteSpace: 'auto',
        size: 'auto',
        pointerEvents: 'auto',
        opacity: 1,
        mt: '$4',
        height: '100%',
      },
    },
  },
})

const BottomBorder = styled('span', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '1px',
  background: '$dotted-horizontal',
  backgroundSize: '16px 1px',
})

interface NavSectionProps {
  section_label: string
  menu_items: typeof staticData[0]['menu_items']
  toggleNav?: (e?: React.MouseEvent) => void
}

const SectionLabel = styled(Heading4, {
  color: '$DA40',
  fontWeight: '$semibold',
  mt: '0',
  mb: '0',
  ml: '$2',
  '@m': {
    ml: '$3',
  },
})

function SectionLink({
  name,
  link,
  toggleNav,
}: typeof staticData[0]['menu_items'][0] &
  Pick<MobileNavigationProps, 'toggleNav'>): JSX.Element {
  return (
    <Box as="li" css={{ flex: '0 0 50%', '& > a': { textDecoration: 'none' } }}>
      <Link href={link} passHref>
        <Button
          style="naked"
          as="a"
          css={{ display: 'inline-block', mt: '$3', py: '$2' }}
          onClick={toggleNav}
        >
          {name}
        </Button>
      </Link>
    </Box>
  )
}

function NavSection({
  section_label,
  menu_items,
  toggleNav,
}: NavSectionProps): JSX.Element {
  return (
    <Box css={{ pt: '$5', pb: '$4', position: 'relative' }}>
      <BottomBorder />
      <Container as="section">
        <SectionLabel as="h3">{section_label}</SectionLabel>
        <Flex
          as="ul"
          css={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            mt: '$2',
            '@m': { width: '75%' },
          }}
          wrap
        >
          {menu_items.map((item) => (
            <SectionLink key={item.name} {...item} toggleNav={toggleNav} />
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

export function MobileNavigation({
  navIsOpen,
  data = staticData,
  toggleNav,
  ...props
}: MobileNavigationProps): JSX.Element {
  return (
    //@ts-expect-error Stitches css compatability error
    <NavWrapper open={navIsOpen} {...props}>
      <Flex column css={{ height: '100%', justifyContents: 'space-between' }}>
        {data.map((section) => (
          <NavSection
            key={section.section_label}
            section_label={section.section_label}
            menu_items={section.menu_items}
            toggleNav={toggleNav}
          />
        ))}
      </Flex>
    </NavWrapper>
  )
}
