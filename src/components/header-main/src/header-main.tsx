import React, { forwardRef, useState, useContext, useEffect } from 'react'
import { m as motion } from 'framer-motion'
import { MenuButton } from '@components/button'
import Link from 'next/link'
import { MobileNavigation } from '@components/mobile-navigation'
import { DesktopNavigation } from '@components/desktop-navigation'
import { styled } from '@theme/stitches.config'
import { Box, Container, Flex, Logo } from '@atoms'
import { LayoutContext } from '@components/layout/src/layoutContext'
import { QuoteButton } from '@components/quoteButton'
interface HeaderMainProps extends React.ComponentProps<typeof HeaderOuter> {
  show?: boolean
}
import { useRouter } from 'next/router'
import { __DEV__ } from '@utils/src/assertion'

const HeaderOuter = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '$3',
  variants: {
    expanded: {
      true: {
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
})

const Header = styled('header', {
  backgroundColor: '$LA80',
  backdropFilter: 'blur(12px)',
  '-webkit-backdrop-filter': 'blur(12px)',
  boxShadow: '0px 6px 12px $colors$DBA15',
  py: '$3',
  height: '100%',
  '@l': { pb: '$4' },
  moz: {
    backgroundColor: '$white',
  },
})

const NavContainer = styled('div', {
  flex: '1 1',
  alignSelf: 'flex-end',
  ml: '$3',
  '@xl': {
    ml: '$6',
  },
})

const headerVariants = {
  hide: {
    y: '-100%',
  },
  show: {
    y: 0,
  },
}

const spring = {
  type: 'spring',
  stiffness: 800,
  damping: 100,
}

export const HeaderMain = forwardRef<HTMLDivElement, HeaderMainProps>(
  ({ show, ...props }: HeaderMainProps, ref) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { toggleScrollLock } = useContext(LayoutContext)
    const router = useRouter()

    function handleMenuClick(e?: React.MouseEvent) {
      e?.preventDefault()
      toggleScrollLock()
      setMenuIsOpen(!menuIsOpen)
    }

    //close the menu if the route changes (navigating within dynmic links would leave it open)
    useEffect(() => {
      if (menuIsOpen) {
        handleMenuClick()
      }
    }, [router])

    return (
      //@ts-expect-error stitches css compatability error
      <HeaderOuter
        as={motion.header}
        variants={headerVariants}
        animate={show ? 'show' : 'hide'}
        expanded={menuIsOpen}
        transition={spring}
        ref={ref}
        {...props}
      >
        <Header as={motion.nav} layout>
          <Container
            as={motion.div}
            layout
            css={{ display: 'flex' }}
            transition={spring}
          >
            <Link href="/">
              <a style={{ flex: '0 0' }}>
                <Logo
                  size={{
                    '@initial': 'regular',
                    '@l': 'large',
                  }}
                />
              </a>
            </Link>
            <NavContainer>
              <Flex
                css={{
                  justifyContent: 'flex-end',
                  '@l': {
                    justifyContent: 'space-between',
                    fontSize: '$p4d',
                  },
                }}
              >
                <DesktopNavigation
                  css={{ display: 'none', mt: '$4', '@l': { display: 'flex' } }}
                />
                <QuoteButton
                  css={{
                    display: 'none',
                    mt: 'auto',
                    '@m': { display: 'inline-flex' },
                  }}
                />

                <MenuButton
                  open={menuIsOpen}
                  aria-expanded={menuIsOpen}
                  aria-controls="drawer-menu"
                  onClick={handleMenuClick}
                  css={{
                    mt: 'auto',
                    py: '$2',
                    ml: '$3',
                    '@l': { display: 'none' },
                  }}
                />
              </Flex>
            </NavContainer>
          </Container>
          <Box as={motion.div} css={{ '@l': { display: 'none' } }} layout>
            <MobileNavigation id="drawer-menu" navIsOpen={menuIsOpen} />
          </Box>
        </Header>
      </HeaderOuter>
    )
  }
)

if (__DEV__) {
  HeaderMain.displayName = 'HeaderMain'
}
