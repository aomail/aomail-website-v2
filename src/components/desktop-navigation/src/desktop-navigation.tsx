import { Box, styled, Paragraph } from '@theme'
import Link from 'next/link'
import React from 'react'

type DesktopNavigationProps = React.ComponentProps<typeof MenuWrapper>

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

const NavLinkText = styled(Paragraph, {
  cursor: 'pointer',
  color: '$B80',
  lineHeight: '24px',
  textDecoration: 'none',
  '&:hover': {
    color: '$DBA60',
  },
})

const NavLinkWrapper = styled('li', Box, {
  mr: '$4',
  '& > a': { textDecoration: 'none' },
  '@xl': { mr: '$5' },
})

interface NavlinkProps extends React.ComponentProps<typeof NavLinkWrapper> {
  name: string
  link: string
}

function NavLink({ name, link, ...props }: NavlinkProps): JSX.Element {
  return (
    //@ts-expect-error stitches css compatability error
    <NavLinkWrapper {...props}>
      <Link href={link} passHref>
        <NavLinkText as="a">{name}</NavLinkText>
      </Link>
    </NavLinkWrapper>
  )
}

const MenuWrapper = styled('nav', {
  display: 'flex',
  mx: '0',
  my: '$2',
  listStyle: 'none',
})

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  ...props
}) => {
  const menuItems = staticData.reduce((acc, i) => [...acc, ...i.menu_items], [])
  return (
    //@ts-expect-error stitches css compatability error AND https://github.com/modulz/stitches/issues/749
    <MenuWrapper as="ul" {...props}>
      {[
        menuItems.map((service) => (
          <NavLink key={`service-${service.name}`} {...service} />
        )),
      ]}
    </MenuWrapper>
  )
}
