import { Awaited } from '@utils/src'
import { fetchGlobalCompanyInformation, request } from '@lib/datocms/datocms'
import {
  GetBlogPostSummariesQuery,
  GetBlogPageQuery,
} from '@lib/datocms/__generated__/types'
import { Layout } from '@components/layout'
import {
  Box,
  Container,
  Heading1,
  TextHolder,
  ColumnWrapper,
  styled,
  Column,
} from '@theme'
import { LinkCard } from '@components/link-card'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { parseMetaTags } from '@lib/datocms/typeGuards'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

const PREFETCH_ARTICLES = 3

const ListWrapper = styled(ColumnWrapper, {
  position: 'relative',
  top: '-$4',
  flexFlow: 'column wrap',
  '@m': {
    flexFlow: 'row wrap',
  },
  '@l': {
    ml: '16.67%',
  },
  '@xl': {
    ml: '25%',
    mr: '8.33%',
  },
})
const CardWrapper = styled(Column, {
  flex: '0 0 100%',
  mb: '$5',
  '@m': {
    flex: '0 0 50%',
    alignSelf: 'stretch',
  },
})

function Blog({ data }: PageProps): JSX.Element {
  const router = useRouter()
  useEffect(
    () => {
      data.articleSummaries
        .slice(0, PREFETCH_ARTICLES)
        .forEach((article) => router.prefetch(`/blog/${article.slug}`))
    },
    //need to add param here if filtering is being used
    //if queries being made on the client, need to check package.json[browser]
    []
  )

  const handleClick = (link: string) => (e: React.MouseEvent) => {
    e?.preventDefault()
    router.push(link)
  }

  return (
    <Layout
      canonicalPath="https://www.aomail.com.au/blog"
      metaData={data.blogPage._seoMetaTags}
      globalCompanyInformation={data.companyInformationGlobal}
    >
      <Box
        as="section"
        css={{
          backgroundColor: '$N10',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container
          css={{
            pt: '$6',
            minHeight: '280px',
            '@m': { minHeight: '400px' },
          }}
        >
          <TextHolder
            css={{ mt: '$7', '@m': { mt: '$8' }, '@l': { ml: '8.33%' } }}
          >
            <Heading1>{data.blogPage.title}</Heading1>
          </TextHolder>
        </Container>
      </Box>
      <Container>
        <ListWrapper>
          {data.articleSummaries.map((article) => {
            const targetUrl = `/blog/${article.slug}`
            return (
              <CardWrapper as="article" key={article.id}>
                <LinkCard
                  title={article.title}
                  description={article.summary.value}
                  image={article.mainImage.responsiveImage}
                  link={targetUrl}
                  css={{ height: '100%' }}
                  onClick={handleClick(targetUrl)}
                />
              </CardWrapper>
            )
          })}
        </ListWrapper>
      </Container>
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ preview = false }) {
  const summaries = await request<GetBlogPostSummariesQuery>({
    query: 'getBlogPostSummaries',
    preview,
  })

  const {
    blogPage: { _seoMetaTags, ...rest },
  } = await request<GetBlogPageQuery>({
    query: 'GetBlogPage',
    preview,
  })

  const { companyInformationGlobal } = await fetchGlobalCompanyInformation(
    preview
  )

  return {
    props: {
      data: {
        articleSummaries: summaries.allBlogArticles,
        blogPage: {
          _seoMetaTags: parseMetaTags(_seoMetaTags),
          ...rest,
        },
        companyInformationGlobal,
      },
    },
  }
}

export default Blog
