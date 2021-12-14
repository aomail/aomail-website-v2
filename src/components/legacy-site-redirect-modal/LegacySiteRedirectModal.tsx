import { Button } from '@components/button'
import { Modal } from '@components/modal'
import { ModalLayout } from '@components/modal/src/layout'
import { LatLonField } from '@lib/datocms/__generated__/types'
import { useBreakpoints } from '@lib/react/breakpoints'
import { useQuery } from '@lib/react/useQuery'
import {
  Heading2,
  Paragraph,
  Title,
  Spacer,
  Phone,
  Close,
  ColumnWrapper,
  Column,
  styled,
  Flex,
  ArrowForward,
  Logo,
} from '@theme'

import DocmasterLogo from '@svg/docmaster.svg'
import NbpLogo from '@svg/nbp.svg'

import { useEffect, useState } from 'react'
import { GoogleMap } from '../map'

interface LegacySiteRedirectModalProps {
  address: string
  tel: string
  telLink: string
  officeLocation: {
    __typename?: 'LatLonField'
  } & Pick<LatLonField, 'latitude' | 'longitude'>
}

const DottedLine = styled('span', {
  variants: {
    direction: {
      horizontal: {
        width: '100%',
        height: '1px',
        background: '$dotted-horizontal',
        backgroundSize: '16px 1px',
      },
      vertical: {
        width: '1px',
        height: '100%',
        background: '$dotted-vertical',
        backgroundSize: '1px 16px',
      },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})

function LegacySiteRedirectModal({
  address,
  tel,
  telLink,
  officeLocation,
}: LegacySiteRedirectModalProps): JSX.Element {
  const breakpoints = useBreakpoints()
  const { queries } = useQuery()
  const [active, setActive] = useState(false)
  const [referrer, setReferrer] = useState('Northern Beaches Printing')
  useEffect(() => {
    if (queries.lsrc) {
      if (queries.lsrc === 'dms') {
        setReferrer('Docmaster')
      }
      setTimeout(setActive, 1200, true)
    }
  }, [queries])
  return active ? (
    <Modal
      startOpen
      height={{ '@initial': 'fitContent', '@l': 'contain' }}
      width="l"
      opens={({ toggleModal }) => {
        return (
          <ModalLayout hideControlsBorder>
            <Flex css={{ alignItems: 'center', mt: '$3' }}>
              {referrer === 'Docmaster' ? <DocmasterLogo /> : <NbpLogo />}
              <Spacer />
              <ArrowForward css={{ mt: '$2', color: '$darkBlue' }} />
              <Spacer />
              <Logo />
            </Flex>
            <ColumnWrapper
              css={{ marginTop: '$3', '@m': { marginTop: '-$3' } }}
            >
              <Column css={{ '@m': { width: '75%' }, '@l': { width: '60%' } }}>
                <Title color="primaryGradient" level="2">
                  {referrer} is now A&O
                </Title>
                <Paragraph color="primary">
                  We still provide Direct Mail, Printing and Fulfilment services
                  from our offices in Brookvale
                </Paragraph>
              </Column>
            </ColumnWrapper>
            <Button
              href={`tel:${telLink}`}
              style="naked"
              offset="left"
              rightIcon={<Close />}
              css={{
                order: -1,
                ml: 'auto',
                '@m': {
                  position: 'absolute',
                  right: '$4',
                  mt: '$2',
                },
              }}
              onClick={toggleModal}
            >
              Close
            </Button>
            <Spacer size="xlarge" />
            <ColumnWrapper
              css={{
                flexGrow: 1,
                flexDirection: 'column',
                '@m': { flexDirection: 'row' },
              }}
            >
              <Column css={{ order: 2, '@m': { flexBasis: '50%' } }}>
                <Heading2
                  level="6"
                  marginTop="small"
                  css={{ fontWeight: 'bold' }}
                >
                  Visit Us:
                </Heading2>
                <Paragraph size="s" color="primary">
                  {address}
                </Paragraph>
                <Spacer size="large" />
                <Heading2
                  level="6"
                  marginTop="small"
                  css={{ fontWeight: 'bold' }}
                >
                  Call Us:
                </Heading2>
                <Spacer />
                <Button
                  as="a"
                  href={`tel:${telLink}`}
                  leftIcon={<Phone size="matchFontSize" />}
                  style="naked"
                  offset="left"
                  clickEvent="telephone_number_clicked"
                >
                  {tel}
                </Button>
              </Column>
              <Column
                css={{
                  order: 0,
                  '@m': { order: 1, display: 'flex', alignItems: 'stretch' },
                }}
              >
                <DottedLine
                  direction={{ '@initial': 'horizontal', '@l': 'vertical' }}
                />
              </Column>
              <Column
                css={{
                  '@m': {
                    order: 0,
                    flexBasis: '50%',
                    display: 'flex',
                    alignItems: 'stretch',
                  },
                }}
              >
                {breakpoints.includes('m') && (
                  <GoogleMap
                    center={{
                      lat: officeLocation.latitude,
                      lng: officeLocation.longitude,
                    }}
                    zoom={13}
                  />
                )}
              </Column>
            </ColumnWrapper>
            <Spacer size="xlarge" />
          </ModalLayout>
        )
      }}
    />
  ) : null
}

export { LegacySiteRedirectModal }
export type { LegacySiteRedirectModalProps }
