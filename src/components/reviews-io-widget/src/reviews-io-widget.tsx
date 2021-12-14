import Script from 'next/script'
import { useEffect } from 'react'
export type ReviewsIoWidgetProps = {
  starColor?: string
  numReviews?: number
}

export function ReviewsIoWidget({
  starColor = '#FE9339',
  numReviews = 20,
}: ReviewsIoWidgetProps): JSX.Element {
  const ReviewWidgetMeta = `richSnippetReviewsWidgets("carousel-widget", { store: "https-www.aomail.com.au", primaryClr: "${starColor}", neutralClr: "#dbdcdd", reviewTextClr: "#32334A", widgetName: "carousel", layout: "fullWidth", numReviews: ${numReviews}, contentMode: "company;third-party", hideDates: false,})`

  return (
    <>
      <div id="carousel-widget"></div>
      <Script
        id="reviews-io-widget-loader"
        async
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: ReviewWidgetMeta,
        }}
      ></Script>
    </>
  )
}
