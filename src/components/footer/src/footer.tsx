import type * as Stitches from '@stitches/react'
import {
  styled,
  ContentWrapper,
  Container,
  Logo,
  Paragraph,
  Phone,
  CovidSafeBanner,
  Flex,
  Box,
  Facebook,
  LinkedIn,
  ColumnWrapper,
} from '@theme'
import { Button, IconButton } from '@components/button'
import Link from 'next/link'

interface FooterProps extends React.ComponentProps<typeof FooterWrapper> {
  beforeFooter?: React.ReactNode
  footerCss?: Stitches.CSS
  landing?: boolean
  gmbPageUrl: string
  address: string
  mainTelephone: string
  facebookUrl?: string
  linkedInUrl?: string
  mainTelephoneRaw: string
}

const FooterWrapper = styled(ContentWrapper, {
  flex: '0',
  variants: {
    style: {
      none: {},
      normal: {
        backgroundColor: '$N90',
      },
    },
  },
  defaultVariants: {
    style: 'normal',
  },
})

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
  {
    section_label: 'Legal',
    menu_items: [
      { name: 'Privacy policy', link: '/legal/privacy' },
      { name: 'Terms of service', link: '/legal/terms' },
    ],
  },
]

const Column = styled('section', {
  px: '$2',
  width: '50%',
  mb: '$3',
  '@m': { px: '$3', width: '33.3%' },
  '@l': { px: '$4', width: '16.6%' },
})

const SectionLabel = styled(Paragraph, {
  ml: '$2',
  color: '$LA60',
  fontWeight: '600',
})

const LinkText = styled(Paragraph, {
  color: '$N30',
  p: '$2',
  mt: '$1',
  '&:hover': {
    color: '$grey',
  },
})

function Section({
  data,
}: {
  data: typeof staticData[0]['menu_items']
}): JSX.Element {
  return (
    <Box css={{ mt: '$3' }}>
      {data.map((d) => (
        <Link href={d.link} key={d.name} prefetch={false}>
          <a style={{ textDecoration: 'none' }}>
            <LinkText size="xs">{d.name}</LinkText>
          </a>
        </Link>
      ))}
    </Box>
  )
}

interface MainFooterProps extends FooterProps {
  data?: typeof staticData
}

export function MainFooter({
  data = staticData,
  gmbPageUrl,
  address,
  mainTelephone,
  mainTelephoneRaw,
  facebookUrl = 'https://www.facebook.com/aoprintmail',
  linkedInUrl = 'https://www.linkedin.com/company/aomail',
}: MainFooterProps): JSX.Element {
  return (
    <Box css={{ backgroundColor: '$black' }}>
      <Container css={{ pt: '$5' }}>
        <Flex
          as="nav"
          wrap
          css={{
            mx: '-$2',
            mb: '$4',
            position: 'relative',
            '@m': { mx: '-$3' },
            '@l': { mx: '-$4' },
          }}
        >
          <Column
            css={{
              width: '100%',
              mb: '$2',
              ml: '$2',
              '@l': { width: '16.6%', ml: '0', mt: '$3' },
            }}
          >
            <Link href="/">
              <a>
                <Logo
                  color="white"
                  size={{ '@initial': 'small', '@xl': 'regular' }}
                />
              </a>
            </Link>
          </Column>
          {data.map((section) => (
            <Column
              key={`${section.section_label}`}
              as="section"
              css={{ mt: '$3', mb: '$5' }}
            >
              {/* @ts-expect-error https://github.com/modulz/stitches/issues/749 */}
              <SectionLabel size="s" as="h3">
                {section.section_label}
              </SectionLabel>
              <Section data={section.menu_items} />
            </Column>
          ))}
        </Flex>
      </Container>
      <Box css={{ backgroundColor: '$N90', py: '$5' }}>
        <Container>
          <Flex
            css={{
              mx: '-$2',
              position: 'relative',
              flexDirection: 'column',
              '@m': {
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                mx: '-$3',
              },
              '@l': {
                mx: '-$4',
              },
            }}
          >
            <Column
              css={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                '@m': {
                  width: '40%',
                },
                '@l': {
                  width: '33.33%',
                  ml: '8.33%',
                },
              }}
            >
              <Button
                as="a"
                href={gmbPageUrl}
                color="light"
                style="naked"
                size="small"
                css={{ mt: '$3', color: '$LA60' }}
              >
                <Paragraph size="s" color="light" css={{ my: 0 }}>
                  {`${address}`}
                </Paragraph>
              </Button>
              <Button
                as="a"
                href={`tel:${mainTelephoneRaw}`}
                leftIcon={<Phone size="matchFontSize" />}
                color="light"
                style="naked"
                size="small"
                css={{ mt: '$2', color: '$LA60' }}
                clickEvent="telephone_number_clicked"
              >
                <Paragraph size="xs" color="light" css={{ my: 0 }}>
                  {mainTelephone}
                </Paragraph>
              </Button>
              <Flex css={{ justifyContent: 'flex-start' }}>
                <IconButton
                  as="a"
                  href={facebookUrl}
                  color="light"
                  style="naked"
                  size="small"
                  css={{ mt: '$2', color: '$LA60' }}
                  label="Visit our Facebook page"
                  clickEvent="visit_facebook_page"
                >
                  <Facebook size="regular" />
                </IconButton>
                <IconButton
                  as="a"
                  href={linkedInUrl}
                  color="light"
                  style="naked"
                  size="small"
                  css={{ mt: '$2', color: '$LA60' }}
                  label="Visit our LinkedIn page"
                  clickEvent="visit_linkedin_page"
                >
                  <LinkedIn size="regular" />
                </IconButton>
              </Flex>
            </Column>
            <Column
              css={{
                width: '100% !important',
                mt: '$3',
                '@m': { width: '50% !important' },
                '@l': { width: '33.3% !important', mr: '8.33%' },
              }}
            >
              <CovidSafeBanner css={{ m: '0', width: '100%' }} />
              <Paragraph
                size="xs"
                css={{ color: '$LA40', mt: '$3', '@m': { textAlign: 'right' } }}
              >
                &copy; ANO PTY Ltd. All rights reserved.
              </Paragraph>
            </Column>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

function LandingFooter({
  footerCss,
  gmbPageUrl,
  address,
  mainTelephone,
  mainTelephoneRaw,
}: FooterProps & {
  footerCss?: Stitches.CSS
}): JSX.Element {
  return (
    <>
      <Container css={{ width: '100%' }}>
        <ColumnWrapper
          css={{
            pb: '$5',
            justifyContent: 'space-between',
            flexDirection: 'column',
            '@m': { flexDirection: 'row' },
          }}
        >
          <Column
            css={{
              width: '100% !important',
              mt: '$3',
              ml: '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              '@m': {
                width: '50% !important',
              },
              '@l': { width: '33.3% !important', mr: '8.33%' },
            }}
          >
            <Link href="/">
              <a>
                <Logo
                  color="white"
                  size={{
                    '@initial': 'regular',
                    '@m': 'large',
                  }}
                />
              </a>
            </Link>
            <Button
              as="a"
              href={gmbPageUrl}
              color="light"
              style="naked"
              size="small"
              offset="left"
              css={{ mt: '$3', color: '$LA60' }}
              clickEvent="address_clicked_gtm"
            >
              <Paragraph size="s" color="light" css={{ my: 0 }}>
                {`${address}`}
              </Paragraph>
            </Button>
            <Button
              as="a"
              href={`tel:${mainTelephoneRaw}`}
              leftIcon={<Phone size="matchFontSize" />}
              color="light"
              style="naked"
              size="small"
              offset="left"
              css={{ mt: '$3', color: '$LA60' }}
              clickEvent="telephone_number_clicked"
            >
              {mainTelephone}
            </Button>
          </Column>
          <Column
            css={{
              width: '100% !important',
              mt: '$3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              '@m': {
                width: '50% !important',
                alignItems: 'flex-end',
              },
              '@l': { width: '33.3% !important', ml: '8.33%' },
            }}
          >
            <CovidSafeBanner css={{ m: '0', width: '100%' }} />
            <Button
              as="a"
              href="/legal/privacy"
              color="light"
              style="naked"
              size="small"
              offset="left"
              css={{ mt: '$4', color: '$LA60' }}
            >
              Privacy and Cookie Policies
            </Button>
            <Button
              as="a"
              href="/legal/terms"
              color="light"
              style="naked"
              size="small"
              offset="left"
              css={{ mt: '$1', color: '$LA60' }}
            >
              Terms of Service
            </Button>
          </Column>
        </ColumnWrapper>
      </Container>
      <ContentWrapper css={{ backgroundColor: '$black' }}>
        <Container>
          <Paragraph
            size="xs"
            //@ts-expect-error css override bug with stitches
            css={{ color: '$LA60', my: '$2', pb: `$1`, ...footerCss }}
          >
            &copy; ANO PTY Ltd. All rights reserved.
          </Paragraph>
        </Container>
      </ContentWrapper>
    </>
  )
}

export function Footer({
  beforeFooter,
  footerCss,
  landing,
  gmbPageUrl,
  address,
  mainTelephone,
  mainTelephoneRaw,
  facebookUrl = 'https://www.facebook.com/aoprintmail',
  linkedInUrl = 'https://www.linkedin.com/company/aomail',
  ...props
}: FooterProps): JSX.Element {
  const contactData = {
    gmbPageUrl,
    address,
    mainTelephone,
    mainTelephoneRaw,
    facebookUrl,
    linkedInUrl,
  }
  const inner = landing ? (
    <LandingFooter footerCss={footerCss} {...contactData} />
  ) : (
    <MainFooter {...contactData} />
  )
  if (beforeFooter) {
    return (
      //@ts-expect-error stitches css compatability error
      <FooterWrapper style="none" {...props}>
        {beforeFooter}
        <FooterWrapper as="footer">{inner}</FooterWrapper>
      </FooterWrapper>
    )
  }
  return (
    //@ts-expect-error stitches css compatability error
    <FooterWrapper as="footer" {...props}>
      {inner}
    </FooterWrapper>
  )
}
