import { Container } from '@theme'
import type {
  TestimonialRecord,
  FeatureParagraphImageRecord,
  SideBySidePRecord,
  TwoColumnListRecord,
  CtaRecord,
  StaffProfileCollectionRecord,
  FullWidthCalloutRecord,
} from './__generated__/types'
import dynamic from 'next/dynamic'
import { fullWidth } from '@theme/utils/utilityClasses'
import type { FeatureParagraphWithImageProps } from '@components/feature-paragraph-with-image'
import type { TwoColumnListProps } from '@components/two-column-list'
import type { TestimonialProps } from '@components/testimonial'
import type { SideBySideParagraphsProps } from '@components/side-by-side-paragraphs'
import type { QuoteCtaProps } from '@components/quote-cta'
import type { StaffProfileCollectionProps } from '@components/staff-profile-collection'
import type { MissionCalloutProps } from '@components/mission-callout'

export type BlockRecord =
  | TestimonialRecord
  | FeatureParagraphImageRecord
  | SideBySidePRecord
  | TwoColumnListRecord
  | CtaRecord
  | StaffProfileCollectionRecord
  | FullWidthCalloutRecord

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const FeatureParagraphImage = dynamic<FeatureParagraphWithImageProps>(() =>
  import('@components/feature-paragraph-with-image').then(
    (res) => res.FeatureParagraphWithImage
  )
)

const TwoColumnList = dynamic<TwoColumnListProps>(() =>
  import('@components/two-column-list').then((res) => res.TwoColumnList)
)
const Testimonial = dynamic<TestimonialProps>(() =>
  import('@components/testimonial').then((res) => res.Testimonial)
)
const SideBySideParagraphs = dynamic<SideBySideParagraphsProps>(() =>
  import('@components/side-by-side-paragraphs').then(
    (res) => res.SideBySideParagraphs
  )
)
const QuoteCta = dynamic<QuoteCtaProps>(() =>
  import('@components/quote-cta').then((res) => res.QuoteCta)
)
const StaffProfileCollection = dynamic<StaffProfileCollectionProps>(() =>
  import('@components/staff-profile-collection').then(
    (res) => res.StaffProfileCollection
  )
)
const MissionCallout = dynamic<MissionCalloutProps>(() =>
  import('@components/mission-callout').then((res) => res.MissionCallout)
)

export function structuredTextBlockRules({
  record,
}: {
  record: BlockRecord
}): JSX.Element {
  switch (record.__typename) {
    case 'FeatureParagraphImageRecord':
      return (
        <FeatureParagraphImage
          key={record.id}
          heading={record.heading}
          paragraph={record.paragraph}
          image={record.image}
          crop={record.cropImage}
          background={record.patternBackground}
          imagePosition={record.imagePosition}
        />
      )
    case 'TwoColumnListRecord':
      return <TwoColumnList key={record.id} items={record.serviceList} />
    case 'TestimonialRecord':
      return (
        <Testimonial
          testimonial={record.testimonial}
          name={record.name}
          company={record.positionCompany}
          key={record.id}
          image={record.photo.responsiveImage}
        />
      )
    case 'SideBySidePRecord':
      return (
        //@ts-expect-error differences in meta between graphql generator and datocms type
        <SideBySideParagraphs
          leftHeading={record.leftHeading}
          rightHeading={record.rightHeading}
          leftParagraph={record.leftParagraph}
          rightParagraph={record.rightParagraph}
          key={record.id}
          css={{ my: '$5' }}
        />
      )
    case 'CtaRecord':
      return (
        <Container key={record.id}>
          <QuoteCta
            heading={record.heading}
            css={{ my: '$5' }}
            paragraph={record.subtext}
          />
        </Container>
      )
    case 'StaffProfileCollectionRecord':
      //@ts-expect-error differences in meta between graphql generator and datocms type
      return <StaffProfileCollection key={record.id} data={record.profiles} />
    case 'FullWidthCalloutRecord': {
      const { id, callout, subheading } = record
      return (
        <MissionCallout
          key={id}
          css={{ my: '$7' }}
          className={fullWidth()}
          data={{ callout, subheading, id }}
        />
      )
    }
    default:
      return null
  }
}

export function ModularContent({ data }: { data: BlockRecord[] }): JSX.Element {
  return <>{data.map((record) => structuredTextBlockRules({ record }))}</>
}
