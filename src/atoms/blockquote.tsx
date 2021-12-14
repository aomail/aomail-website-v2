import { styled } from '@theme/stitches.config'

export interface BlockQuoteProps {
  cite?: string
  citeText?: string
  caption?: string
  children?: React.ReactNode
}

const Wrapper = styled('div', {
  my: '$6',
})

const Background = styled('figure', {
  display: 'block',
  position: 'relative',
  background: '$LA50',
  borderWidth: '$thin',
  borderColor: '$DA20',
  borderStyle: 'solid',
  margin: '0',
  pb: '$5',
  pt: '$1',
  pl: '$5',
  pr: '$4',
  br: '$3',
  '@m': {
    display: 'inline-block',
  },
})

const Decoration = styled('div', {
  width: '8px',
  btlr: '$3',
  bblr: '$3',
  position: 'absolute',
  height: '100%',
  background: '$darkBlue',
  left: '0',
  top: '0',
})

export function BlockQuote({ children }: BlockQuoteProps): JSX.Element {
  return (
    <Wrapper>
      <Background>
        <Decoration />
        {children}
      </Background>
    </Wrapper>
  )
}
