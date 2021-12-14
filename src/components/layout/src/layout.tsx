import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import { Footer } from '@components/footer'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { HeaderMain } from '@components/header-main'
import {
  useViewportScroll,
  useMotionValue,
  useCycle,
  m as motion,
} from 'framer-motion'
import { CSS } from '@theme/stitches.config'
import { ContentWrapper, PageWrapper } from '@atoms'
import { LayoutContext } from './layoutContext'
import type { GlobalCompanyInformation } from '@lib/datocms/datocms'
import { LegacySiteRedirectModal } from '@components/legacy-site-redirect-modal'

interface LayoutProps {
  beforeFooter?: React.ReactNode
  altHeader?: React.ReactNode
  metaData?: SeoMetaTagType[]
  canonicalPath?: string
  footerCss?: CSS
  landing?: boolean
  layoutElement?: React.ReactNode
  children?: React.ReactNode
  globalCompanyInformation: GlobalCompanyInformation
}

export function Layout({
  beforeFooter,
  metaData,
  canonicalPath,
  footerCss,
  altHeader,
  landing,
  children,
  ...props
}: LayoutProps): JSX.Element {
  const [scrollLock, toggleScroll] = useCycle(false, true)
  const [velocityListener, setVelocityListener] = useState<boolean>(true)
  const [showNav, setShowNav] = useState(true)
  const scrollPosition = useMotionValue(0)
  const headerRef = useRef<HTMLDivElement>()
  const meta = metaData ? renderMetaTags(metaData) : null

  const { scrollY } = useViewportScroll()

  useEffect(() => {
    if (!scrollLock) {
      const top = scrollPosition.get()
      window.scroll({ top })
      setTimeout(setVelocityListener, 500, true)
    }
  }, [scrollLock])
  useEffect(() => {
    let listener
    function update() {
      if (scrollY.get() < 100) {
        setShowNav(true)
        return
      }
      const velocity = scrollY.getVelocity()
      if (velocityListener && velocity > 100) {
        setShowNav(false)
        return
      }
      if (velocity < -100) {
        setShowNav(true)
        return
      }
    }

    function focusHeader() {
      setShowNav(true)
    }
    const hr = headerRef.current
    if (hr) {
      hr.addEventListener('focusin', focusHeader)
    }
    const addScrollListener = window.setTimeout(() => {
      listener = scrollY.onChange(update)
    }, 1000)
    return () => {
      window.clearTimeout(addScrollListener)
      listener && listener()
      if (hr) {
        hr.removeEventListener('focusin', focusHeader)
      }
    }
  }, [])

  const toggleScrollLock = (skipPositionSet = false) => {
    const scrollIsLocked = !scrollLock
    if (scrollIsLocked && !skipPositionSet) {
      scrollPosition.set(scrollY.get())
    }
    toggleScroll()
    setVelocityListener(false)
  }

  const {
    companyAddress,
    gmbPageUrl,
    mainTelephoneNumber,
    mainTelephoneNumberInternationalUnformatted,
    officeLocation,
  } = props.globalCompanyInformation

  return (
    <LayoutContext.Provider
      value={{ scrollLock, toggleScrollLock, showNav, setShowNav }}
    >
      <Head>
        {meta}
        <link rel="canonical" href={canonicalPath} />
      </Head>
      <LegacySiteRedirectModal
        address={companyAddress}
        tel={mainTelephoneNumber}
        telLink={mainTelephoneNumberInternationalUnformatted}
        officeLocation={officeLocation}
      />
      <PageWrapper
        as={motion.main}
        style={
          scrollLock
            ? {
                position: 'fixed',
                width: '100%',
                left: '0',
                top: `-${scrollY.getPrevious()}px`,
              }
            : {}
        }
      >
        {altHeader ?? <HeaderMain show={showNav} ref={headerRef} />}
        {/* @ts-expect-error https://github.com/modulz/stitches/issues/749 */}
        <ContentWrapper as={props.layoutElement}>{children}</ContentWrapper>
        <Footer
          landing={landing}
          beforeFooter={beforeFooter}
          footerCss={footerCss}
          address={companyAddress}
          gmbPageUrl={gmbPageUrl}
          mainTelephone={mainTelephoneNumber}
          mainTelephoneRaw={mainTelephoneNumberInternationalUnformatted}
        />
      </PageWrapper>
    </LayoutContext.Provider>
  )
}
