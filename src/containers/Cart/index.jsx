import { addDoc, collection } from 'firebase/firestore'
import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import { db } from '../../firebase/config'
import ordenGenerada from '../Utilitario/generarOrden'
/*import guardarOrden from '../Utilitario/guardarOrden'*/
import './styles.css'


const Cart = () => {
  const { cart, cartLenght, removeItem, cleanCart, totalShopping } = useContext(Shop)

  const confirmarOrden = async () => {
    const orden = ordenGenerada('Oscar', 'Calle 21', cart, 60)
    /* guardarOrden(cart, orden)*/

    const docRef = await addDoc(collection(db, 'orders'), orden);
    console.log('Document written with ID: ', docRef.id);
    alert(`'Document written with ID: ', ${docRef.id}`)
  }

  return (
    <div>
      <div className='resumen'>
        {cartLenght() !== 0 && <p><button type="button" className="btn btn-danger" onClick={() => { cleanCart() }}>Vaciar Carrito</button></p>}
        {cartLenght() !== 0 && <p><button type="button" className="btn btn-success" onClick={() => { confirmarOrden() }}>Confirmar compra</button></p>}
      </div>
      {cart.map(producto => {
        return <div className='cart' key={producto.id}>c
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