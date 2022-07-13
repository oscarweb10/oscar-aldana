import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import './styles.css'


const Cart = () => {
  const { cart, cartLenght, removeItem, cleanCart } = useContext(Shop)
  return (
    <div>
      {cart.map(producto => {
        return <div className='cart' key={producto.id}>
          {/*<div className='titulo'><b>{producto.title} </b></div>*/}
          <b>{producto.title} </b>
          <img className='imagen' src={producto.image} style={{ width: 60 }} />
          <b className='cant'>{producto.quantity}x</b>
          <b className='title'>{producto.price}$</b>
          <u className='cost'>    Total: {producto.quantity * producto.price}  $</u>
          {cartLenght() !== 0 && <b><button onClick={() => { removeItem(producto) }}>X</button></b>}

        </div>
      })}

      {cartLenght() !== 0 && <p><button onClick={() => { cleanCart() }}>Vaciar Carrito</button></p>}


    </div>
  )
}

export default Cart