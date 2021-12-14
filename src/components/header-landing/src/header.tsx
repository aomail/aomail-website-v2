import { Container, Logo, HeaderBar } from '@theme'
import Link from 'next/link'
import { Button } from '../../button'
import { Phone } from '@theme/icons/phone'

type HeaderProps = React.ComponentProps<typeof HeaderBar>

export function Header(props: HeaderProps): JSX.Element {
  return (
    //@ts-expect-error stitches css compatability error
    <HeaderBar as="header" {...props}>
      <Container
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        <Link href="/">
          <a>
            <Logo
              size={{
                '@initial': 'regular',
                '@m': 'large',
              }}
            />
          </a>
        </Link>

        <Button
          as="a"
          href="tel:+61296456777"
          leftIcon={<Phone size="matchFontSize" />}
          style="naked"
          clickEvent="telephone_number_clicked"
        >
          (02) 9645 6777
        </Button>
      </Container>
    </HeaderBar>
  )
}
