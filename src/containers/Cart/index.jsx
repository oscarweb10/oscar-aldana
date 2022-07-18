import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import './styles.css'


const Cart = () => {
  const { cart, cartLenght, removeItem, cleanCart, totalShopping } = useContext(Shop)
  return (
    <div>
      <div className='resumen'>
        {cartLenght() !== 0 && <p><button type="button" className="btn btn-danger" onClick={() => { cleanCart() }}>Vaciar Carrito</button></p>}
        {cartLenght() !== 0 && <p><button type="button" className="btn btn-success">Comprar</button></p>}
      </div>
      {cart.map(producto => {
        return <div className='cart' key={producto.id}>
          {/*<div className='titulo'><b>{producto.title} </b></div>*/}
          <table class="table">
            <tbody>
              <tr>
                <th scope="row"><img className='imagen' src={producto.image} style={{ width: 60 }} /></th>
                <td>{producto.title}</td>
                <td>Cant: {producto.quantity}</td>
                <td> {producto.price} $</td>
                <td>Total: {producto.quantity * producto.price} $</td>
                <td>{cartLenght() !== 0 && <button type="button" className="btn btn-danger" onClick={() => { removeItem(producto) }}>X</button>}</td>
              </tr>
            </tbody>
          </table>
        </div>
      })}
      {cartLenght() !== 0 && <h6 className='totalShopping' onClick={() => { totalShopping() }}>Total Compra: {totalShopping()} $</h6>}
    </div>
  )
}

export default Cart