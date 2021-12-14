import Head from 'next/head'
import Script from 'next/script'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { store } from '@lib/little-state-machine'
import { LazyMotion, domMax } from 'framer-motion'
import { UserData } from '@lib/react'
import { globalStyles } from '@theme'
import '../styles/font-face.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(JSON.stringify(metric, null, 2))
}
if (typeof window !== 'undefined') {
  createStore(store, {
    storageType: window.localStorage,
    name: '__AOM__',
    middleWares: [],
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <StateMachineProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width initial-scale=1, viewport-fit=cover"
        ></meta>
      </Head>
      <Script
        // HUBSPOT
        type="text/javascript"
        id="hs-script-loader"
        strategy="lazyOnload"
        async
        defer
        src="//js.hs-scripts.com/8035366.js"
      ></Script>
      <Script
        // REVIEWS.IO
        src="https://widget.reviews.io/rich-snippet-reviews-widgets/dist.js"
        strategy="afterInteractive"
        type="text/javascript"
      ></Script>
      <UserData />
      <LazyMotion strict features={domMax}>
        <Component {...pageProps} />
      </LazyMotion>
    </StateMachineProvider>
  )
}

export default MyApp
