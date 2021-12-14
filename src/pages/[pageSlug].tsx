import { fetchGlobalCompanyInformation, request } from '@lib/datocms/datocms'
import {
  Box,
  Container,
  styled,
  TextHolder,
  BreakoutTextHolder,
  Title,
  Spacer,
  Paragraph,
} from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import {
  GetServicePageQuery,
  GetServicePagesQuery,
} from '@lib/datocms/__generated__/types'
import { Awaited } from '@utils/src'
import { StructuredText } from '@lib/datocms/structuredText'
import { ModularContent } from '@lib/datocms/blockRules'
import dynamic from 'next/dynamic'
import { QuoteButton } from '@components/quoteButton'
import type * as Stitches from '@stitches/react'
import { parseMetaTags, parseModularBlocks } from '@lib/datocms/typeGuards'

const Printer = dynamic(() => import('../svg/printer.svg'))
const Inserter = dynamic(() => import('../svg/inserter.svg'))

const heroGraphics = {
  printing: dynamic(() => import('../svg/printHero.svg')),
  'direct-mail': dynamic(() => import('../svg/directMailHero.svg')),
  'package-fulfilment': dynamic(() => import('../svg/fulfilmentHero.svg')),
}

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
  pageSlug: string
}

const HeroText = styled('div', {
  willChange: 'opacity',
  '@s': {
    pr: '$2',
    pl: '$2',
    pt: '$3',
    pb: '$6',
  },
  '@m': {
    pr: '$2',
    pl: '$3',
    pt: '$6',
    width: '75%',
  },
  '@l': {
    pr: '$2',
    pl: '$4',
    width: '50%',
  },
  '@xl': {
    pr: '$3',
    pl: '$4',
  },
})

interface ConfiguredTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { value: any; [key: string]: any }
  size: Stitches.VariantProps<typeof Paragraph>['size']
}

export const ConfiguredText = ({
  data,
  size,
}: ConfiguredTextProps): JSX.Element => {
  return (
    <StructuredText
      data={data}
      config={{
        headingProps: { color: 'primary' },
        //@ts-expect-error size types are not compatible unsure why
        paragraphProps: { size },
        listItemProps: {
          icon: 'CheckLeaf',
          iconProps: {
            css: {
              color: '$green',
              size: '1.125em',
              marginBottom: '0.125em',
            },
          },
        },
      }}
    />
  )
}

function ServicePage({ data, pageSlug }: PageProps): JSX.Element {
  const { companyInformationGlobal, service } = data

  const Illustration = (props) => {
    if (service.illustration === 'inserter') {
      return <Inserter {...props} />
    }
    if (service.illustration === 'printer') {
      return <Printer {...props} />
    }
    return null
  }
  const beforeFooter = (
    <>
      <Container css={{ mb: '$5' }}>
        <ClientLogoBanner />
      </Container>
      <Box css={{ backgroundColor: '$white', py: '$4' }}>
        <Container>
          <ReviewsIoWidget />
        </Container>
      </Box>
    </>
  )

  const HeroSvg = styled(heroGraphics[pageSlug], {
    position: 'absolute',
    bottom: '-$7',
    minHeight: '600px',
    left: '50%',
    display: 'none',
    '@l': {
      display: 'block',
      height: '80%',
    },
  })

  return (
    <Layout
      beforeFooter={beforeFooter}
      metaData={service._seoMetaTags}
      canonicalPath={`https://www.aomail.com.au/${service.canonicalPath}`}
      globalCompanyInformation={companyInformationGlobal}
    >
      <Box
        as="section"
        css={{
          backgroundColor: '$N10',
          position: 'relative',
          overflow: 'hidden',
          '@m:': { minHeight: '640px' },
        }}
      >
        <Container
          css={{
            pt: '$7',
          }}
        >
          <HeroText>
            <Title
              css={{ marginTop: '0', '@m': { mt: '$2' }, '@l': { mt: '$4' } }}
            >
              {service.mainHeading}
            </Title>
            <Spacer />
            <Box css={{ maxWidth: '60ch', mt: '$4' }}>
              <ConfiguredText data={service.heroParagraph} size="m" />
            </Box>
            <QuoteButton
              css={{
                my: '$6',
                width: '$11',
                minHeight: '$5',
                '@m': { width: '$12' },
              }}
            />
          </HeroText>
          <HeroSvg />
        </Container>
      </Box>
      <Box>
        <Container>
          <ModularContent data={service.leftRightParagraphs} />
          <TextHolder
            css={{
              mt: '$7',
              '@l': {
                mx: '16.67%',
              },
            }}
          >
            <StructuredText
              data={service.pageContent}
              config={{
                paragraphProps: {
                  size: 'm',
                },
              }}
            />
          </TextHolder>
          <BreakoutTextHolder
            css={{ mr: '16.67%', mt: '$6', overflow: 'hidden' }}
          >
            <Box css={{ position: 'relative', bottom: '-$3' }}>
              <Illustration />
            </Box>
          </BreakoutTextHolder>
        </Container>
        <ModularContent data={service.modularContent} />
      </Box>
    </Layout>
  )
}

export default ServicePage

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
  const allServicePages = await request<GetServicePagesQuery>({
    query: 'GetServicePages',
  })
  return {
    paths: allServicePages.allServices.map(({ pageSlug }) => ({
      params: {
        pageSlug,
      },
    })),
    fallback: false,
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ params, preview = false }) {
  const {
    service: { _seoMetaTags, leftRightParagraphs, modularContent, ...rest },
  } = await request<GetServicePageQuery>({
    query: 'GetServicePage',
    preview,
    variables: { pageSlug: params.pageSlug },
  })

  const { companyInformationGlobal } = await fetchGlobalCompanyInformation(
    preview
  )

  return {
    props: {
      data: {
        service: {
          _seoMetaTags: parseMetaTags(_seoMetaTags),
          leftRightParagraphs: parseModularBlocks(leftRightParagraphs),
          modularContent: parseModularBlocks(modularContent),
          ...rest,
        },
        companyInformationGlobal,
      },
      pageSlug: params.pageSlug,
    },
  }
}
