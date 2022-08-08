import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import ordenGenerada from '../Utilitario/generarOrden'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import guardarOrden from '../Utilitario/guardarOrden'
import './styles.css'

const Cart = () => {
  const { cart, cartLenght, removeItem, cleanCart, totalShopping } = useContext(Shop)
  const navigation = useNavigate()
  const confirmarOrden = async () => {
    const orden = ordenGenerada('Messi', 'Calle 21', cart, totalShopping())
    guardarOrden(cart, orden)

    //const docRef = await addDoc(collection(db, 'orders'), orden);
    //console.log('Document written with ID: ', docRef.id);
    // alert(`'Document written with ID: ', ${docRef.id}`)

    navigation('/ModalCliente')
  }
  return (
    <>
      <div>
        {cartLenght() > 0 ?
          <div>
            {cart.map(producto => {
              return (
                <div className='cart' key={producto.id}>
                  {/*<div className='titulo'><b>{producto.title} </b></div>*/}
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"><img className='imagen' src={producto.image} alt='articulo' style={{ width: 60 }} /></th>
                        <td>{producto.title}</td>
                        <td>Cant: {producto.quantity}</td>
                        <td> {producto.price} $</td>
                        <td>Total: {producto.quantity * producto.price} $</td>
                        <td>{cartLenght() !== 0 && <button type="button" className="btn btn-danger" onClick={() => { removeItem(producto) }}>X</button>}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>)
            })}
            {cartLenght() !== 0 && <h6 className='totalShopping' onClick={() => { totalShopping() }}>Total Compra: {totalShopping()} $</h6>}
            <div className='botonesCarrito'>
              <p><button type="button" className="btn btn-danger" onClick={() => { cleanCart() }}>Vaciar Carrito</button></p>
              {cartLenght() !== 0 && <p><button type="button" className="btn btn-success" onClick={() => { confirmarOrden() }}>Confirmar compra</button></p>}
              <p><Link to="/"><button className='btn btn-primary'>Seguir Comprando</button></Link></p>
            </div>
          </div>
          :
          <div className='carritoVacio'>
            <p>No hay productos en el carrito</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg><br /><br />
            <div>
              <Link to="/"><button className='btn btn-primary'>Ir de compras</button></Link>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Cart


