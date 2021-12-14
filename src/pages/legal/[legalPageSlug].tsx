import { Awaited } from '@utils/src'
import { fetchGlobalCompanyInformation, request } from '@lib/datocms/datocms'
import {
  GetLegalPagesQuery,
  GetLegalPageQuery,
} from '@lib/datocms/__generated__/types'
import { Layout } from '@components/layout'
import { Box, Container, TextHolder, ColumnWrapper, Column } from '@theme'
import { ArticleSummary } from '@components/article-summary'
import { StructuredText } from '@lib/datocms/structuredText'
import { QuoteCta } from '@components/quote-cta'
import { parseMetaTags } from '@lib/datocms/typeGuards'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

function LegalPage({ data }: PageProps): JSX.Element {
  const { companyInformationGlobal, legalPage } = data
  return (
    <Layout
      canonicalPath={`https://www.aomail.com.au/legal/${legalPage.legalPageSlug}`}
      metaData={legalPage._seoMetaTags}
      layoutElement="article"
      globalCompanyInformation={companyInformationGlobal}
    >
      <Box
        css={{
          backgroundColor: '$N10',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container
          css={{
            py: '$7',
            minHeight: '$280px',
            '@m': { minHeight: '400px' },
          }}
        >
          <TextHolder
            css={{
              mt: '$6',
              '@m': { mr: '16.67%' },
              '@l': { ml: '8.33%', mr: '33.3%' },
              '@xl': { ml: '8.33%', mr: '50%' },
            }}
          >
            <ArticleSummary
              //@ts-expect-error Stitches issue with as prop
              as="section"
              breadcrumbLinks={[{ name: 'Legal', url: '/legal' }]}
              title={legalPage.title}
              summary={legalPage.summary.value}
            />
          </TextHolder>
        </Container>
      </Box>
      <Box>
        <Container css={{ mb: '$7' }}>
          <ColumnWrapper
            css={{
              flexFlow: 'column nowrap',
              justifyContent: 'stretch',
              pb: '$7',
              '@l': { flexFlow: 'row nowrap' },
            }}
          >
            <Column
              css={{ flex: '1 1', display: 'flex', flexFlow: 'column nowrap' }}
            >
              <TextHolder css={{ maxWidth: '80ch', alignSelf: 'center' }}>
                <StructuredText
                  data={legalPage.legalText}
                  config={{
                    paragraphProps: { size: 's' },
                    headingProps: { css: { mt: '$6' }, fromSize: 3 },
                  }}
                />
              </TextHolder>
            </Column>
            <Column
              as="aside"
              //@ts-expect-error Stitches css Compatability issue
              css={{
                display: 'none',
                '@l': { display: 'block', order: '1', flex: '0 0 8.33%' },
              }}
            ></Column>
            <Column
              //@ts-expect-error Stitches css Compatability issue
              css={{ '@l': { order: '-1', flex: '0 0 16.67%' } }}
              as="aside"
            ></Column>
          </ColumnWrapper>
          <QuoteCta />
        </Container>
      </Box>
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
  const { allLegalPages } = await request<GetLegalPagesQuery>({
    query: 'GetLegalPages',
  })
  return {
    paths: allLegalPages.map(({ legalPageSlug }) => ({
      params: { legalPageSlug },
    })),
    fallback: false,
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ preview = false, params }) {
  const {
    legalPage: { _seoMetaTags, ...rest },
  } = await request<GetLegalPageQuery>({
    query: 'GetLegalPage',
    preview,
    variables: { legalPageSlug: params.legalPageSlug },
  })

  const { companyInformationGlobal } = await fetchGlobalCompanyInformation(
    preview
  )

  return {
    props: {
      data: {
        companyInformationGlobal,
        legalPage: { _seoMetaTags: parseMetaTags(_seoMetaTags), ...rest },
      },
    },
  }
}

export default LegalPage
