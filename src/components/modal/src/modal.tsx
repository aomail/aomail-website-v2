import { LayoutContext } from '@components/layout/src/layoutContext'
import type { ModalProps } from '@components/modal/src/modalBody'
import Portal from '@components/portal'
import { AnimatePresence, useCycle } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useContext, useEffect } from 'react'

const ModalBody = dynamic(
  () => import('@components/modal/src/modalBody').then((res) => res.ModalBody),
  { ssr: false }
)

type ModalRenderProps = ({
  modalIsOpen,
  toggleModal,
}: {
  modalIsOpen: boolean
  toggleModal: () => void
}) => React.ReactNode
interface ModelOpenerProps extends ModalProps {
  opens: ModalRenderProps
  startOpen?: boolean
  children?: ModalRenderProps
  parentSelector?: string
}

export function Modal({
  width,
  height,
  opens,
  children,
  layoutId,
  startOpen = false,
  parentSelector = 'modal-portal',
  ...props
}: ModelOpenerProps): JSX.Element {
  const [modalIsOpen, toggleModalIsOpen] = useCycle(false, true)
  const { toggleScrollLock } = useContext(LayoutContext)

  function toggleModal() {
    toggleScrollLock()
    toggleModalIsOpen()
  }

  useEffect(() => {
    if (startOpen && !modalIsOpen) {
      toggleModal()
    }
  }, [])

  const modalProps: ModalProps = {
    toggle: toggleModal,
    layoutId,
    ...props,
  }

  return (
    <>
      {children ? children({ modalIsOpen, toggleModal }) : null}
      <AnimatePresence>
        {modalIsOpen && (
          <Portal selector={parentSelector}>
            {/*@ts-expect-error css issue */}
            <ModalBody width={width} height={height} {...modalProps}>
              {opens({ modalIsOpen, toggleModal })}
            </ModalBody>
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}
