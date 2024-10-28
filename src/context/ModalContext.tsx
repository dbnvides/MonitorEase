import type { SubscribeInterface } from '@/interfaces/data'
import { createContext, useState } from 'react'

export interface ModalContextValue {
  modalIsOpen: boolean
  openModal: (service: SubscribeInterface) => void
  closeModal: () => void
  itemOpen: SubscribeInterface | null
  setItemOpen: React.Dispatch<React.SetStateAction<SubscribeInterface | null>>
  modalAddIsOpen: boolean
  openAddModal: () => void
  modalLogin: boolean
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalContext = createContext<ModalContextValue>(
  {} as ModalContextValue
)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalAddIsOpen, setAddIsOpen] = useState(false)
  const [itemOpen, setItemOpen] = useState<SubscribeInterface | null>(null)
  const [modalLogin, setModalLogin] = useState(false)

  const openModal = (service: SubscribeInterface) => {
    setItemOpen(service)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setAddIsOpen(false)
    setItemOpen(null)
    setModalLogin(false)
  }

  const openAddModal = () => {
    setAddIsOpen(true)
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        itemOpen,
        setItemOpen,
        modalAddIsOpen,
        openAddModal,
        modalLogin,
        setModalLogin
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
