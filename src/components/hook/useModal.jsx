import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopContext'

const useModal = (initialValue = false) => {
  const { cleanCart } = useContext(Shop)
  const [isOpenModal, setIsOpenModal] = useState(initialValue);
  const navigation = useNavigate()
  const openModal = () => {
    setIsOpenModal(true);
  }
  const closeModal = () => {
    setIsOpenModal(false);
    cleanCart()
    navigation('/')
  }
  return [isOpenModal, openModal, closeModal];
}
export default useModal