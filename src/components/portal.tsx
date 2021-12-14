import React, { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  selector: string
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Portal({ selector, children }: PortalProps): JSX.Element {
  const ref = useRef<Element>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const el =
      document.querySelector(`#${selector}`) || document.createElement('div')
    el.id = selector
    ref.current = document.body.appendChild(el)
    setMounted(true)
    return () => {
      document.querySelector(`#${selector}`) &&
        document.body.removeChild(ref.current)
    }
  }, [])

  return mounted ? createPortal(children, ref.current) : null
}
export default Portal
