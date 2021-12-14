import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@theme'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default class Document extends NextDocument {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    let ssrStyles = getCssText()
    if (process.env.NODE_ENV === 'production') {
      ssrStyles = await postcss([autoprefixer({})])
        .process(ssrStyles, { from: undefined })
        .then((style) => {
          return style.css
        })
    }
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {process.env.NODE_ENV === 'production' && (
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: ssrStyles }}
            />
          )}
        </>
      ),
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line react/no-danger*/}
          {/*eslint-disable-next-line @next/next/next-script-for-ga*/}
          <script
            //GTM GOOGLE TAG MANAGER
            async
            dangerouslySetInnerHTML={{
              __html: `!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-WSFD68H",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");`,
            }}
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="alternate"
            href={process.env.NEXT_PUBLIC_SITE_URL}
            hrefLang="en-AU"
          />
          <meta name="theme-color" content="#10102B" />
          <link
            rel="preload"
            href="/fonts/ao-rcltsmbld/ao-rcltsmb-alph.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/inter/inter-smb-ltb.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/inter/inter-reg-ltb.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <noscript>
            <iframe
              //GTM GOOGLE TAG MANAGER NOSCRIPT
              src="https://www.googletagmanager.com/ns.html?id=GTM-WSFD68H"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
          <div id="portal" />
        </body>
      </Html>
    )
  }
}
