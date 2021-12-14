import { useEffect, useRef } from 'react'

type Delay = number | null
type TimerHandler = (...args: any[]) => void

/**
 * Provides a declarative useInterval
 *
 * @param callback - Function that will be called every `delay` ms.
 * @param delay - Number representing the delay in ms. Set to `null` to "pause" the interval.
 */

const useInterval = (callback: TimerHandler, delay: Delay): void => {
  const savedCallbackRef = useRef<TimerHandler>()

  useEffect(() => {
    savedCallbackRef.current = callback
  }, [callback])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (...args: any[]) => savedCallbackRef?.current?.(...args)

    if (delay !== null) {
      const intervalId = setInterval(handler, delay)
      return () => clearInterval(intervalId)
    }
  }, [delay])
}

export default useInterval
