import { fetchGlobalCompanyInformation, request } from '@lib/datocms/datocms'
import { Title, Box, Container, styled, Spacer } from '@theme'
import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import {
  GetLandingPagesQuery,
  GetLandingPageQuery,
} from '@lib/datocms/__generated__/types'
import { Awaited } from '@utils/src'
import { StructuredText } from '@lib/datocms/structuredText'
import { Header } from '@components/header-landing'
import { QuoteFormDirectMail } from '@components/quote-form-direct-mail'
import { parseMetaTags } from '@lib/datocms/typeGuards'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
  pageSlug: string
}

const HeroText = styled('div', {
  '@l': {
    pr: '$2',
    pl: '$3',
    width: '50%',
  },
  '@xl': {
    pr: '$3',
    pl: '$4',
  },
})

function LandingPageContent({ data }: PageProps): JSX.Element {
  const { companyInformationGlobal, landingPageV1 } = data
  const beforeFooter = (
    <>
      <Container>
        <ClientLogoBanner />
      </Container>
      <Spacer size="large" />
      <Box css={{ backgroundColor: '$white', py: '$4' }}>
        <Container>
          <ReviewsIoWidget />
        </Container>
      </Box>
    </>
  )

  return (
    <Layout
      beforeFooter={beforeFooter}
      metaData={landingPageV1._seoMetaTags}
      canonicalPath={landingPageV1.canonicalPath}
      footerCss={{
        paddingBottom: '$7',
        '@l': { paddingBottom: '$1' },
      }}
      landing
      altHeader={<Header />}
      globalCompanyInformation={companyInformationGlobal}
    >
      <Container as="section" css={{ py: '$3', '@l': { display: 'flex' } }}>
        <HeroText>
          <Title level="2">{landingPageV1.title}</Title>
          <Spacer />
          <StructuredText
            data={landingPageV1.content}
            config={{
              paragraphProps: { size: 'm', css: { maxWidth: '50ch' } },
              headingProps: { color: 'primary' },
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
        </HeroText>
        <QuoteFormDirectMail />
      </Container>
    </Layout>
  )
}

export default LandingPageContent

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
  const allLandingPages = await request<GetLandingPagesQuery>({
    query: 'GetLandingPages',
  })
  return {
    paths: allLandingPages.allLandingPageV1s.map(({ pageSlug }) => ({
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
    landingPageV1: { pageContent, _seoMetaTags, ...rest },
  } = await request<GetLandingPageQuery>({
    query: 'GetLandingPage',
    preview,
    variables: { pageSlug: params.pageSlug },
  })

  const markdownToDast = (await import('@utils/src')).markdownToDast

  const content = await markdownToDast(pageContent)

  const { companyInformationGlobal } = await fetchGlobalCompanyInformation(
    preview
  )

  return {
    props: {
      data: {
        companyInformationGlobal,
        landingPageV1: {
          _seoMetaTags: parseMetaTags(_seoMetaTags),
          content,
          ...rest,
        },
        pageSlug: params.pageSlug,
      },
    },
  }
}
