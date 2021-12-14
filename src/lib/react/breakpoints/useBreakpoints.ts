import { useMemo } from 'react'
import { breakpoints } from '@theme'
import { useWindowSize } from './useWindowSize'

export type BreakpointsAry = (keyof typeof breakpoints)[]

export function useBreakpoints(): BreakpointsAry {
  const { width } = useWindowSize()
  const bp: BreakpointsAry = useMemo(() => {
    function setBreakpoints(acc, [k, v]) {
      return width >= v ? [...acc, k] : acc
    }
    return Object.entries(breakpoints).reduce(setBreakpoints, [])
  }, [width])

  return bp
}
