import type { ResponsiveImageType } from 'react-datocms'
import { Image, StructuredText } from 'react-datocms'
import type { StructuredTextDocument } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredText'
import {
  styled,
  Flex,
  Box,
  Paragraph,
  ColumnWrapper,
  Column,
  FlatCard,
  Heading3,
} from '@theme'

export interface StaffProfileCollectionProps
  extends React.ComponentProps<typeof ColumnWrapper> {
  data: StaffProfileProps[]
}

interface StaffProfileProps extends React.ComponentProps<typeof FlatCard> {
  name?: string
  jobTitle?: string
  biography?: StructuredTextDocument
  avatar?: { responsiveImage?: ResponsiveImageType }
}

type NameBadgeProps = Pick<StaffProfileProps, 'name' | 'jobTitle' | 'avatar'>

const Avatar = styled(Image, {
  alignSelf: 'center',
  flex: '0 0 $sizes$8',
  mr: '$3',
  '@m': {
    flex: '0 0 $sizes$9',
    mr: '$3',
  },
  '@xl': {
    mr: '$4',
  },
})

export function NameBadge({
  name,
  jobTitle,
  avatar,
}: NameBadgeProps): JSX.Element {
  return (
    <Flex>
      <Avatar data={avatar.responsiveImage} />
      <Box css={{ alignSelf: 'center' }}>
        <Heading3 color="primaryGradient" marginTop="none">
          {name}
        </Heading3>
        <Paragraph size="m" marginTop="small">
          {jobTitle}
        </Paragraph>
      </Box>
    </Flex>
  )
}

const Col = styled(Column, {
  my: '$3',
  flexBasis: '100%',
  '@m': {
    mx: '16.67%',
  },
  '@l': {
    mx: '0',
    flexBasis: '50%',
    alignSelf: 'stretch',
  },
})

const BiographyStRules = structuredTextRules({
  paragraphProps: { size: 's' },
})

export function StaffProfile({
  name,
  jobTitle,
  biography,
  avatar,
  ...props
}: StaffProfileProps): JSX.Element {
  return (
    //@ts-expect-error Stitches css compatability issue
    <FlatCard {...props}>
      <NameBadge name={name} jobTitle={jobTitle} avatar={avatar} />
      <StructuredText data={biography} customRules={BiographyStRules} />
    </FlatCard>
  )
}
export function StaffProfileCollection({
  data,
  ...props
}: StaffProfileCollectionProps): JSX.Element {
  return (
    <ColumnWrapper
      //@ts-expect-error Stitches css compatability issue
      css={{
        my: '$6',
        flexFlow: 'column nowrap',
        '@l': { flexFlow: 'row nowrap' },
        '@xl': {
          mx: '8.33%',
        },
      }}
      {...props}
    >
      {data.map((staff) => {
        return (
          <Col key={staff.id}>
            <StaffProfile
              avatar={staff.avatar}
              biography={staff.biography}
              jobTitle={staff.jobTitle}
              name={staff.name}
              css={{ minHeight: '100%', pb: '$5', boxShadow: '$1' }}
            />
          </Col>
        )
      })}
    </ColumnWrapper>
  )
}
