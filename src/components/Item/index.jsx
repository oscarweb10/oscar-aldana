import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Item1.css'

const Item = ({ prod }) => {
  const navigation = useNavigate()
  const handleDetail = () => {
    navigation(`/detail/${prod.id}`)
  }

  return (
    <div className='nombre' onClick={handleDetail}>
      <p>{prod.title}</p>
      <img src={prod.image} alt='articulos' />
      <p>Price:{' ' + prod.price + '$'}</p>
    </div>
  )
}

export default Item