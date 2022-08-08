import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Shop } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom';
import './styles.css'

const CartWidget = () => {
  const navigate = useNavigate();
  const { cart, cartLenght } = useContext(Shop);
  const handleCardWidget = () => {
    navigate('/cart')
  }
  return (
    <div className='cartWidget'>
      <span type="button" className="btn btn-primary">
        <AiOutlineShoppingCart onClick={handleCardWidget} />
      </span>
      {cart.length && <b className='cantidadCarrito'>{cartLenght()}</b>}
    </div>
  )
}

export default CartWidget