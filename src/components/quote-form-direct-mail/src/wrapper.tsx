import { useEffect, useRef } from 'react'
import { Card, styled } from '@theme'

export type WrapperProps = React.ComponentProps<typeof Frame>

export const Frame = styled(Card, {
  position: 'fixed',
  zIndex: '$3',
  left: '0',
  right: '0',
  bottom: '0',
  minHeight: '$8',
  transform: 'translateY(100%)',
  transition: 'transform 0.2s ease-out',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  '&.visible': {
    transform: 'translateY(0)',
  },
  '@l': {
    transform: 'translateY(0)',
    minHeight: '42rem',
    height: '100%',
    position: 'relative',
    top: '$3',
    ml: '$3',
    mr: '$3',
    mt: '$3',
    width: 'calc(50% - 48px)',
  },
  '@xl': {
    width: 'calc(100% / 12 * 5 - 64px)',
  },
  '@m_max': {
    br: '0',
  },
})

export function Wrapper(props: WrapperProps): JSX.Element {
  const frameRef: React.Ref<HTMLDivElement> = useRef()
  const setVisible = () => frameRef.current.classList.add('visible')
  useEffect(() => {
    setTimeout(setVisible, 2000)
  }, [])
  return (
    //@ts-expect-error Stiches css compatability issue
    <Frame ref={frameRef} {...props} />
  )
}
