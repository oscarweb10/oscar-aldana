import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const useModalCliente = (initialValue = false) => {

  const [isOpenModal, setIsOpenModal] = useState(initialValue);
  const navigation = useNavigate()
  const openModal = () => {
    setIsOpenModal(true);
  }
  const closeModal = () => {
    setIsOpenModal(false);
  
    navigation('/ModalCart')
  }
  return [isOpenModal, openModal, closeModal];
}
export default useModalCliente