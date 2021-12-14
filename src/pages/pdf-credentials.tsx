import { renderMetaTags } from 'react-datocms'
import { Box, PageWrapper } from '@theme'
import { Header } from '@components/header-resources'
import { fetchGlobalCompanyInformation, request } from '@lib/datocms/datocms'
import { GetPdfCredentialsPageQuery } from '@lib/datocms/__generated__/types'
import { Awaited } from '@utils/src'
import Head from 'next/head'
import { parseMetaTags } from '@lib/datocms/typeGuards'

interface PageProps {
  data: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

function PdfCredentialsPage({ data }: PageProps): JSX.Element {
  const meta = renderMetaTags(data.credentialsPage._seoMetaTags)

  return (
    <>
      <Head>
        {meta}
        <link rel="canonical" href="https://aomail.com.au/pdf-credentials" />
      </Head>
      <PageWrapper css={{ flexDirection: 'row' }}>
        <Header
          css={{ position: 'fixed' }}
          downloadLink={data.credentialsPage.fileDownload.url}
        />
        <Box css={{ flex: '1 1 100%' }}>
          <iframe
            src={data.credentialsPage.flipsnackEmbedUrl}
            width="100%"
            height="100%"
            seamless
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>
      </PageWrapper>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ preview = false }) {
  const {
    credentialsPage: { _seoMetaTags, ...rest },
  }: GetPdfCredentialsPageQuery = await request({
    query: 'GetPdfCredentialsPage',
    preview,
  })

  return {
    props: {
      data: {
        credentialsPage: { _seoMetaTags: parseMetaTags(_seoMetaTags), ...rest },
      },
    },
  }
}

export default PdfCredentialsPage
