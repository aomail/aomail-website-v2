import { Awaited } from '@utils/src'
import { Layout } from '@components/layout'
import {
  ArrowForward,
  Box,
  Column,
  ColumnWrapper,
  Container,
  Heading2,
  Paragraph,
  Phone,
  Spacer,
  styled,
  TextHolder,
  Title,
} from '@theme'
import { fetchGlobalCompanyInformation, request } from '@lib/datocms/datocms'
import { GetContactPageQuery } from '@lib/datocms/__generated__/types'
import { Button } from '@components/button'
import { ContactForm } from '@components/contact-form'
import { parseMetaTags } from '@lib/datocms/typeGuards'
import { GoogleMap } from '@components/map'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

const openingHours = [
  { day: 'Monday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Tuesday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Wednesday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Thursday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Friday', hours: [{ open: '8.30am', close: '5pm' }] },
  { day: 'Saturday', hours: [] },
  { day: 'Sunday', hours: [] },
]

const Th = styled('th', {
  py: '$1',
  textAlign: 'left',
  pr: '$4',
  color: '$DA75',
  fontWeight: '$semibold',
})
const Td = styled('td', {
  py: '$1',
  color: '$DA80',
})
const Ul = styled('ul', {
  listStyle: 'none',
  m: '0',
  p: '0',
})

function OpeningHoursTable({
  data,
  ...props
}: {
  data: typeof openingHours
}): JSX.Element {
  return (
    <Box as="table" {...props}>
      <tbody>
        {data.map(({ day, hours }) => {
          return (
            <tr key={day}>
              <Th>{day}</Th>
              <Td>
                {hours.length === 0 ? (
                  'Closed'
                ) : (
                  <Ul>
                    {hours.map(({ open, close }) => (
                      <li key={open}>{`${open} – ${close}`}</li>
                    ))}
                  </Ul>
                )}
              </Td>
            </tr>
          )
        })}
      </tbody>
    </Box>
  )
}

function Contact({ data }: PageProps): JSX.Element {
  const { companyInformationGlobal, contactPage } = data
  const { officeLocation } = companyInformationGlobal
  return (
    <Layout
      canonicalPath="https://www.aomail.com.au/contact"
      metaData={contactPage._seoMetaTags}
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
            minHeight: '280px',
            '@m': { minHeight: '400px' },
          }}
        >
          <TextHolder css={{ mt: '$7', '@l': { ml: '8.33%' } }}>
            <Title color="primaryGradient">{contactPage.title}</Title>
          </TextHolder>
        </Container>
      </Box>
      <Container>
        <ColumnWrapper
          css={{
            flexFlow: 'column nowrap',
            mb: '-$5',
            '@s_max': {
              p: '0',
              mx: '-$4',
            },
            '@l': {
              flexFlow: 'row nowrap',
              mb: '-$6',
              justifyContent: 'stretch',
            },
          }}
        >
          <Column css={{ pb: '$5', '@l': { flex: '0 0 40%' } }}>
            <TextHolder
              css={{ '@l': { display: 'flex', flexFlow: 'column ' } }}
            >
              <Box
                css={{
                  '@m': { width: '50%', float: 'left' },
                  '@l': { width: 'auto', float: 'none' },
                }}
              >
                <Heading2
                  marginTop="small"
                  level="6"
                  css={{ fontWeight: 'bold' }}
                >
                  Call us:
                </Heading2>
                <Button
                  as="a"
                  href={`tel:${companyInformationGlobal.mainTelephoneNumberInternationalUnformatted}`}
                  leftIcon={<Phone size="matchFontSize" />}
                  style="naked"
                  offset="left"
                  clickEvent="telephone_number_clicked"
                >
                  {companyInformationGlobal.mainTelephoneNumber}
                </Button>
              </Box>
              <Box
                css={{
                  '@m': { width: '50%', float: 'right' },
                  '@l': { width: 'auto', float: 'none' },
                }}
              >
                <Heading2
                  level="6"
                  marginTop="small"
                  css={{ fontWeight: 'bold' }}
                >
                  Opening hours:
                </Heading2>
                <Spacer />
                <OpeningHoursTable data={openingHours} />
              </Box>
              <Box
                css={{
                  display: 'flex',
                  flexFlow: 'column nowrap',
                  alignItems: 'flex-start',
                  flex: '1 1',
                  justifyContents: 'flex-end',
                  '@m': { width: '50%', float: 'left' },
                  '@l': { width: 'auto', float: 'none' },
                }}
              >
                <Heading2
                  level="6"
                  marginTop="small"
                  css={{ fontWeight: 'bold' }}
                >
                  Visit Us:
                </Heading2>
                <Paragraph size="s">
                  {`${companyInformationGlobal.companyAddress}`}
                </Paragraph>
                <Spacer size="large" />
                <Button
                  as="a"
                  href={companyInformationGlobal.gmbPageUrl}
                  rightIcon={<ArrowForward />}
                  style="naked"
                  offset="left"
                  size="small"
                  css={{ color: '$blue' }}
                >
                  Directions on Google Maps
                </Button>
              </Box>
            </TextHolder>
          </Column>
          <Column
            css={{
              zIndex: 1,
              mx: '0',
              p: '0',
              '@m': { mx: '8.33%' },
              '@l': {
                position: 'relative',
                top: '-$4',
                mx: '0',
                flex: '0 0 60%',
              },
            }}
          >
            <ContactForm
              css={{
                width: '100vw',
                mx: '50%',
                left: '-50vw',
                right: '-50vw',
                position: 'relative',
                br: '0',
                '@m': {
                  width: 'unset',
                  mx: 'unset',
                  left: 'unset',
                  right: 'unset',
                  br: '$4',
                },
              }}
            />
          </Column>
        </ColumnWrapper>
      </Container>
      <GoogleMap
        center={{
          lat: officeLocation.latitude,
          lng: officeLocation.longitude,
        }}
        zoom={13}
        css={{
          height: '480px',
          '@m': { height: '560px' },
          '@xl': { height: '768px' },
        }}
      />
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ preview = false }) {
  const {
    contactPage: { _seoMetaTags, ...rest },
  }: GetContactPageQuery = await request({
    query: 'GetContactPage',
    preview,
  })

  const { companyInformationGlobal } = await fetchGlobalCompanyInformation(
    preview
  )

  return {
    props: {
      data: {
        companyInformationGlobal,
        contactPage: {
          _seoMetaTags: parseMetaTags(_seoMetaTags),
          ...rest,
        },
      },
    },
  }
}

export default Contact
