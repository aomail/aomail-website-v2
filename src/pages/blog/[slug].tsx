import { Awaited } from '@utils/src'
import { fetchGlobalCompanyInformation, request } from '@lib/datocms/datocms'
import {
  GetBlogPostQuery,
  GetBlogPostPathsQuery,
} from '@lib/datocms/__generated__/types'
import { Layout } from '@components/layout'
import {
  Box,
  Container,
  TextHolder,
  styled,
  ColumnWrapper,
  Column,
} from '@theme'
import { ArticleSummary } from '@components/article-summary'
import { Image } from 'react-datocms'
import { StructuredText } from '@lib/datocms/structuredText'
import { QuoteCta } from '@components/quote-cta'
import { parseMetaTags } from '@lib/datocms/typeGuards'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

const Img = styled(Image, {
  position: 'relative',
  width: '100vw',
  mx: '-50vw',
  left: '50%',
  right: '50%',
  top: '-$4',
  order: '-1',
  '@l': {
    br: '$2',
    width: 'auto',
    mx: '0',
    left: 'auto',
    right: 'auto',
  },
})

function Blog({ data }: PageProps): JSX.Element {
  const { blogArticle, companyInformationGlobal } = data
  return (
    <Layout
      canonicalPath={`https://www.aomail.com.au/blog/${blogArticle.slug}`}
      metaData={blogArticle._seoMetaTags}
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
              title={blogArticle.title}
              lastUpdated={blogArticle.lastUpdated}
              summary={blogArticle.summary.value}
              breadcrumbLinks={[{ name: 'Blog', url: '/blog' }]}
              //@ts-expect-error Stitches as prop issue
              as="section"
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
                  data={blogArticle.article.value}
                  config={{
                    paragraphProps: { size: 'm' },
                    headingProps: { css: { mt: '$6' }, fromSize: 3 },
                  }}
                />
              </TextHolder>
              <Img data={blogArticle.mainImage.responsiveImage} />
            </Column>
            <Column
              as="aside"
              css={{
                display: 'none',
                '@l': { display: 'block', order: 1, flex: '0 0 8.33%' },
              }}
            ></Column>
            <Column
              css={{ '@l': { order: -1, flex: '0 0 16.67%' } }}
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
  const { allBlogArticles } = await request<GetBlogPostPathsQuery>({
    query: 'getBlogPostPaths',
  })
  return {
    paths: allBlogArticles.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ preview = false, params }) {
  const {
    blogArticle: { _seoMetaTags, updatedAt, ...rest },
  } = await request<GetBlogPostQuery>({
    query: 'getBlogPost',
    preview,
    variables: { pageSlug: params.slug },
  })
  const englishOrdinalRules = new Intl.PluralRules('en', { type: 'ordinal' })
  const suffixes = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  }
  function appendOrdinal(number: number) {
    return number + suffixes[englishOrdinalRules.select(number)]
  }
  const date = new Date(updatedAt)
  const lastUpdated = `${appendOrdinal(
    date.getDate()
  )} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`

  const { companyInformationGlobal } = await fetchGlobalCompanyInformation(
    preview
  )

  return {
    props: {
      data: {
        blogArticle: {
          _seoMetaTags: parseMetaTags(_seoMetaTags),
          lastUpdated,
          ...rest,
        },
        companyInformationGlobal,
      },
    },
  }
}

export default Blog
