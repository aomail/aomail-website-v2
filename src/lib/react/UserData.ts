import { useEffect } from 'react'
//import publicIp from 'public-ip'
import { useStateMachine } from 'little-state-machine'
import { updateUserData } from '@lib/little-state-machine/actions'
import { useSetCookieToState } from './cookies'
import { useRouter } from 'next/router'

export function UserData(): JSX.Element {
  const { state, actions } = useStateMachine({ updateUserData })
  const router = useRouter()

  // useEffect(() => {
  //   ;(async () => {
  //     const ip = await publicIp.v4()
  //     //fetch the user ip and add to state
  //     actions.updateUserData({ ipAddress: ip })
  //   })()
  // }, [])
  useEffect(() => {
    const trackingParams = Object.keys(state.userData).filter((key) =>
      key.match(/^[utm_|hsa_|gclid|dclid]/)
    )
    function filterParams(acc, [key, value]) {
      if (trackingParams.includes(key)) {
        return {
          ...acc,
          [key]: value,
        }
      }
      return acc
    }

    const trackingData = Object.entries(router.query).reduce(filterParams, {})
    for (const k in { ...state.userData, ...trackingData }) {
      if (trackingData?.[k])
        window.dataLayer.push({ event: k, value: trackingData[k] })
    }
    actions.updateUserData(trackingData)
  }, [router])

  useSetCookieToState('hubspotutk', 'hubspotUserToken', 'hutk')
  return null
}
