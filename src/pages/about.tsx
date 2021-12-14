import { Awaited } from '@utils/src'
import { styled, Container, Box, Title, Spacer, Paragraph } from '@theme'
import { Layout } from '@components/layout'
import { GetAboutUsQuery } from '@lib/datocms/__generated__/types'
import { fetchGlobalCompanyInformation, request } from '@lib/datocms/datocms'
import { StructuredText } from '@lib/datocms/structuredText'
import type * as Stitches from '@stitches/react'
import { parseMetaTags } from '@lib/datocms/typeGuards'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
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
        headingProps: {
          color: 'primary',
          css: { mt: '$7', '@xl': { ml: '8.335%' } },
        },
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

function AboutUsPage({ data }: PageProps): JSX.Element {
  const { aboutUsPage, companyInformationGlobal } = data
  return (
    <Layout
      canonicalPath="https://www.aomail.com.au/about"
      metaData={aboutUsPage._seoMetaTags}
      globalCompanyInformation={companyInformationGlobal}
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
            '@m': { height: '680px' },
            '@l': { display: 'flex', height: '768px', pt: '$5' },
          }}
        >
          <HeroText>
            <Title color="primaryGradient">{aboutUsPage.mainHeading}</Title>
            <Spacer />
            <Box css={{ maxWidth: '60ch' }}>
              <ConfiguredText data={aboutUsPage.heroParagraph} size="l" />
            </Box>
          </HeroText>
        </Container>
      </Box>
      <Container>
        <ConfiguredText data={aboutUsPage.pageContent} size="l" />
      </Container>
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ preview = false }) {
  const {
    aboutUsPage: { _seoMetaTags, ...rest },
  } = await request<GetAboutUsQuery>({
    query: 'GetAboutUs',
    preview,
    variables: {},
  })
  const { companyInformationGlobal } = await fetchGlobalCompanyInformation(
    preview
  )
  return {
    props: {
      data: {
        aboutUsPage: { _seoMetaTags: parseMetaTags(_seoMetaTags), ...rest },
        companyInformationGlobal,
      },
    },
  }
}

export default AboutUsPage
