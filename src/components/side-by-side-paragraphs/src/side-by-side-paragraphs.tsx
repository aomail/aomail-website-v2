import {
  styled,
  Container,
  Column,
  ColumnWrapper,
  TextHolder,
  Heading3,
} from '@theme'
import { StructuredText, StructuredTextDocument } from 'react-datocms'
import { structuredTextRules } from '@lib/datocms/structuredText'

export interface SideBySideParagraphsProps
  extends React.ComponentProps<typeof Bg> {
  leftHeading: string
  leftParagraph: StructuredTextDocument
  rightHeading: string
  rightParagraph: StructuredTextDocument
}

const ColWrap = styled(ColumnWrapper, {
  flexFlow: 'column nowrap',
  '@m': {
    flexFlow: 'row nowrap',
  },
  '@l': {
    px: '8.335%',
  },
})

const Col = styled(Column, {
  '@m': {
    flex: '1 1 50%',
  },
})

function Text({ data }: { data: StructuredTextDocument }): JSX.Element {
  return (
    <StructuredText
      data={data}
      customRules={structuredTextRules({
        paragraphProps: { size: 's' },
      })}
    />
  )
}

const Bg = styled('div', {
  my: '$7',
})

export function SideBySideParagraphs({
  leftHeading,
  leftParagraph,
  rightHeading,
  rightParagraph,
  ...props
}: SideBySideParagraphsProps): JSX.Element {
  return (
    //@ts-expect-error Stitches css compatability issue
    <Bg {...props}>
      <Container>
        <ColWrap>
          <Col>
            <TextHolder>
              <Heading3>{leftHeading}</Heading3>
              <Text data={leftParagraph}></Text>
            </TextHolder>
          </Col>
          <Col>
            <TextHolder>
              <Heading3>{rightHeading}</Heading3>
              <Text data={rightParagraph}></Text>
            </TextHolder>
          </Col>
        </ColWrap>
      </Container>
    </Bg>
  )
}
