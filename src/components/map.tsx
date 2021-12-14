import { Loader } from '@googlemaps/js-api-loader'
import { Box } from '@theme'
import React, { useEffect } from 'react'

interface GoogleMapProps extends React.ComponentProps<typeof Box> {
  center: {
    lat: number
    lng: number
  }
  zoom: number
}

function GoogleMap({
  center,
  zoom,
  css,
  ...props
}: GoogleMapProps): JSX.Element {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    })
    loader.load().then(() => {
      const map = new google.maps.Map(
        document.getElementById('gmap') as HTMLElement,
        {
          center,
          zoom,
          disableDefaultUI: true,
          tilt: 45,
        }
      )
      new google.maps.Marker({ position: center, map })
    })
  }, [])
  return (
    <Box
      id="gmap"
      //@ts-expect-error css issue
      css={{ backgroundColor: '$blue', flexGrow: 1, ...css }}
      {...props}
    ></Box>
  )
}

export { GoogleMap }
