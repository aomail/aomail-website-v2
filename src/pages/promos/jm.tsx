import { Layout } from '@components/layout'
import { ClientLogoBanner } from '@components/client-logo-banner'
import { ReviewsIoWidget } from '@components/reviews-io-widget'
import { Header } from '@components/header-landing'
import {
  Container,
  Spacer,
  Box,
  Title,
  Paragraph,
  TextHolder,
  css,
  Card,
  Phone,
  ColumnWrapper,
  Column,
} from '@theme'
import { m as motion, useAnimation, Variants } from 'framer-motion'
import { useQuery } from '@lib/react/useQuery'
import { useEffect } from 'react'
import { Button } from '@components/button'
import { VideoMeet } from '@theme/icons/videoMeet'
import { QuoteButton } from '@components/quoteButton'
import { fetchGlobalCompanyInformation } from '@lib/datocms/datocms'
import type { Awaited } from '@utils'

interface PageProps {
  data?: Awaited<ReturnType<typeof getStaticProps>>['props']['data']
}

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

const titleAnimation: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const childrenAnimation: Variants = {
  hidden: {
    opacity: 0,
    translateY: 100,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
}

function AnimatedChildren({ children }: { children: string }): JSX.Element {
  const splitChildren = children.split(/\s/)
  const _children = splitChildren.map((child, i) => (
    <>
      {i > 0 ? <span>&nbsp;</span> : null}
      <motion.span
        style={{ display: 'inline-block' }}
        key={i}
        variants={childrenAnimation}
      >{`${child}`}</motion.span>
    </>
  ))
  return <>{_children}</>
}

const hide = css({
  opacity: '0',
})

function Jm({ data }: PageProps): JSX.Element {
  const {
    processedQueries,
    queries: { fn, an },
  } = useQuery()
  const titleControls = useAnimation()
  const paragraphControls = useAnimation()
  async function textReveal() {
    await titleControls.start('visible')
    paragraphControls.start('visible')
  }
  useEffect(() => {
    if (processedQueries) {
      textReveal()
    }
  }, [processedQueries])
  return (
    <Layout
      beforeFooter={beforeFooter}
      landing
      altHeader={<Header />}
      globalCompanyInformation={data.companyInformationGlobal}
    >
      <Container className={!processedQueries && hide()}>
        <Title
          as={motion.h1}
          animate={titleControls}
          initial="hidden"
          variants={titleAnimation}
          css={{ overflow: 'hidden' }}
          alignCenter
        >
          <AnimatedChildren>
            {fn ? `Welcome, ${fn}` : 'Welcome'}
          </AnimatedChildren>
        </Title>
        <Spacer size="large" />
        <ColumnWrapper>
          <Column
            css={{
              width: '100%',
              '@m': { mx: '8.33%' },
              '@l': { mx: '16.67%' },
              '@xl': { mx: '25%' },
            }}
          >
            <TextHolder
              as={motion.div}
              animate={paragraphControls}
              initial="hidden"
              variants={titleAnimation}
            >
              <Paragraph as={motion.p} variants={childrenAnimation} alignCenter>
                We’re honoured to have piqued your interest. Let’s get the ball
                rolling with a zoom meeting.
              </Paragraph>
              <Paragraph as={motion.p} variants={childrenAnimation} alignCenter>
                Tap the button below to firm up a convenient date and time, and
                together we can find out if&nbsp;
                {an || 'your agency'} and A&amp;O is a match made in heaven.
              </Paragraph>
              <Paragraph as={motion.p} variants={childrenAnimation} alignCenter>
                Alternatively, if you have a print, mail or fulfilment brief
                ready to go, you can send it over to us using our quote request
                form.
              </Paragraph>
            </TextHolder>
            <Spacer css={{ height: '$6' }} />
            <Card
              css={{
                mb: '$6',
                p: '$4',
                display: 'flex',
                flexDirection: 'column',
                '@m': { p: '$5' },
                '@l': { p: '$6' },
              }}
            >
              <Button
                as="a"
                href="https://meetings.hubspot.com/gareth84/30-mins"
                leftIcon={<VideoMeet />}
              >
                Meet with Gareth
              </Button>

              <Spacer />
              <QuoteButton color="subtle">Request a quote</QuoteButton>
              <Spacer size="small" />
              <Paragraph>
                Prefer to speak on the phone?
                <br /> You can call me on:
              </Paragraph>
              <Spacer />
              <Button
                style="naked"
                as="a"
                leftIcon={<Phone />}
                css={{ alignSelf: 'flex-start' }}
                href="+61414470777"
                offset="left"
              >
                0414 470 777
              </Button>
            </Card>
          </Column>
        </ColumnWrapper>
      </Container>
    </Layout>
  )
}

export default Jm

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({ preview = false }) {
  const { companyInformationGlobal } = await fetchGlobalCompanyInformation(
    preview
  )
  return { props: { data: { companyInformationGlobal } } }
}
