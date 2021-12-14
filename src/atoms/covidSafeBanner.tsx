import { styled } from '@theme/stitches.config'
import { Paragraph } from '@theme/typography/text'
import { CovidSafe } from '@theme/icons'
import Link from 'next/link'

const Background = styled('div', {
  backgroundColor: '$LA25',
  br: '$4',
  display: 'flex',
  alignItems: 'center',
  px: '$3',
  py: '$1',
  '@m': { px: '$4', py: '$2' },
  '@l': { px: '$5', py: '$2' },
})

const A = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  [`${Background}:hover &`]: {
    color: 'white',
  },
  '&:hover,&:focus': {
    textDecoration: 'underline',
    color: 'white',
  },
})

export function CovidSafeBanner(
  props: React.ComponentProps<typeof Background>
): JSX.Element {
  return (
    //@ts-expect-error I think this is a Stitches bug https://github.com/microsoft/TypeScript/issues/32689
    <Background {...props}>
      <CovidSafe css={{ flex: '0 0 $10', size: '$9' }} />
      <Paragraph
        size="xs"
        css={{ ml: '$4', color: '$LA80', mt: '0', flex: '0 1 100%' }}
      >
        A&amp;O is fully open for business and operating with a&nbsp;
        <Link passHref href="/legal/covid-response">
          <A>COVID safe plan.</A>
        </Link>
      </Paragraph>
    </Background>
  )
}
