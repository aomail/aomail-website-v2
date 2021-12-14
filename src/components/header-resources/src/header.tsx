import { Container, Logo, HeaderBar, Download } from '@theme'
import Link from 'next/link'
import { Button } from '../../button'

interface HeaderProps extends React.ComponentProps<typeof HeaderBar> {
  downloadLink?: string
}

export function Header({ downloadLink, ...props }: HeaderProps): JSX.Element {
  return (
    //@ts-expect-error https://github.com/modulz/stitches/issues/749
    <HeaderBar background="transluscent" as="header" {...props}>
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
            <Logo size="small" />
          </a>
        </Link>

        {downloadLink && (
          <Button
            as="a"
            href={downloadLink}
            //@ts-expect-error we are using as='a' but typescript still thinks this is a button element so does not think download & rel attrs exist
            download
            rel="noreferrer noopener"
            rightIcon={<Download size="matchFontSize" />}
            clickEvent="telephone_number_clicked"
            size="small"
          >
            Download PDF
          </Button>
        )}
      </Container>
    </HeaderBar>
  )
}
