import { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../../context/ModalContext'
import { SquareX } from 'lucide-react'

Modal.setAppElement('#root')

export const ModalViewService = () => {
  const { closeModal, modalIsOpen, itemOpen } = useContext(ModalContext)

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Adding new subscribe"
      className="relative m-auto p-8 w-[95%] max-w-[500px] bg-gradient-to-t from-blue-600 to-zinc-950 max-h-[90%] overflow-y-auto rounded-[8px]"
      overlayClassName="modal-overlay"
    >
      {itemOpen && (
        <div className="flex flex-col items-center gap-4 font-dosis text-white">
          <img
            src={itemOpen.imagem}
            alt={itemOpen.nome}
            className="object-contain w-[90%] h-[200px] rounded-md "
          />
          <p className="text-center ">{itemOpen.descricao.pt}</p>
         <div className='flex w-full justify-between'>
            <span className='w-20'>Valor: R$35,99</span>
            <span className='w-20'>Data: 21/10/2024</span>
            <span className='text-green-400 font-bold w-24'>Pagamento: 21/11/2024</span>
         </div>
        
          <button
            type="button"
            onClick={closeModal}
            className="text-zinc-50 absolute right-5 top-5"
          >
            <SquareX size={32} />
          </button>
        </div>
      )}
    </Modal>
  )
}
