import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Shop } from '../../context/ShopContext'
import './styles.css'

const CartWidget = () => {


 const {cart, cartLenght} = useContext(Shop);
 
 
  return (
    <div className='cartWidget'>
        <AiOutlineShoppingCart/>
        
        {cart.length && <b className='cantidadCarrito'>{cartLenght()}</b>}

     </div>
  )
}

export default CartWidget