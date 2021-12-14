import { createContext } from 'react'

export const LayoutContext = createContext({
  scrollLock: false,
  toggleScrollLock: undefined,
  showNav: false,
  setShowNav: undefined,
})
